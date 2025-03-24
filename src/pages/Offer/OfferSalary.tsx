import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the types based on the API response
interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface Job {
  id: string;
  title: string;
}

interface CandidateComparison {
  job: Job;
  selectedCandidates: Candidate[];
}
interface CandidateStatus {
  [candidateId: string]: "DONE" | null;
}

// Define a flattened candidate type for display
interface FlattenedCandidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  jobId: string;
  offerStatus?: "DONE" | "PENDING" | null; // Thêm trường này
}

// Define the Offer type based on the offerSchema (consistent with OfferSalary.tsx)
interface OfferInput {
  recruitmentId: string;
  candidateId: string;
  baseSalary: number;
  salary: number;
  bonus: number;
  note: string;
  approvalRequired: boolean;
  status:
    | "SENT"
    | "PENDING"
    | "ACCEPTED"
    | "REJECTED"
    | "MANAGER_APPROVAL"
    | "MANAGER_REJECTED";
  managerStatus: "PENDING" | "APPROVED" | "REJECTED";
}

const CandidateList: React.FC = () => {
  // State for candidate comparisons data
  const [comparisons, setComparisons] = useState<CandidateComparison[]>([]);
  const [flattenedCandidates, setFlattenedCandidates] = useState<
    FlattenedCandidate[]
  >([]);
  const [filteredCandidates, setFilteredCandidates] = useState<
    FlattenedCandidate[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [offerStatus, setOfferStatus] = useState<CandidateStatus>({});
  // State for filters
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("nameAsc");
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCandidate, setSelectedCandidate] =
    useState<FlattenedCandidate | null>(null);
  const [offerForm, setOfferForm] = useState<OfferInput>({
    recruitmentId: "",
    candidateId: "",
    baseSalary: 0,
    salary: 0,
    bonus: 0,
    note: "",
    approvalRequired: false,
    status: "PENDING",
    managerStatus: "PENDING",
  });

  // Fetch data from the API
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          "http://localhost:9999/api/candidates"
        );
        const fetchedComparisons: CandidateComparison[] = response.data.data;
        setComparisons(fetchedComparisons);

        // Flatten the data to a list of candidates
        const flattened: FlattenedCandidate[] = [];
        fetchedComparisons.forEach((comparison) => {
          comparison.selectedCandidates.forEach((candidate) => {
            if (!flattened.some((c) => c.id === candidate.id)) {
              flattened.push({
                id: candidate.id,
                name: candidate.name,
                email: candidate.email,
                phone: candidate.phone,
                jobTitle: comparison.job.title,
                jobId: comparison.job.id,
              });
            }
          });
        });

        setFlattenedCandidates(flattened);
        setFilteredCandidates(flattened);
      } catch (err) {
        setError("Không thể tải danh sách ứng viên. Vui lòng thử lại sau.");
        console.error("Error fetching candidates:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCandidates();
  }, []);

  // Handle filtering and sorting logic
  useEffect(() => {
    let filtered = [...flattenedCandidates];

    if (searchQuery) {
      filtered = filtered.filter(
        (candidate) =>
          candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.phone.includes(searchQuery) ||
          candidate.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption === "nameAsc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "nameDesc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "jobTitleAsc") {
      filtered.sort((a, b) => a.jobTitle.localeCompare(b.jobTitle));
    } else if (sortOption === "jobTitleDesc") {
      filtered.sort((a, b) => b.jobTitle.localeCompare(a.jobTitle));
    }

    setFilteredCandidates(filtered);
  }, [searchQuery, sortOption, flattenedCandidates]);

  // Handle pagination
  const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);
  const paginatedCandidates = filteredCandidates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers for filter changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  // Handle opening the modal
  const openModal = (candidate: FlattenedCandidate) => {
    setSelectedCandidate(candidate);
    setOfferForm({
      recruitmentId: candidate.jobId,
      candidateId: candidate.id,
      baseSalary: 0,
      salary: 0,
      bonus: 0,
      note: "",
      approvalRequired: false,
      status: "PENDING",
      managerStatus: "PENDING",
    });
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCandidate(null);
    setOfferForm({
      recruitmentId: "",
      candidateId: "",
      baseSalary: 0,
      salary: 0,
      bonus: 0,
      note: "",
      approvalRequired: false,
      status: "PENDING",
      managerStatus: "PENDING",
    });
  };

  // Handle form input changes
  const handleFormChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = event.target;

    // Chỉ xử lý các trường nhập là số
    if (type === "number") {
      // Loại bỏ ký tự không phải số và format lại giá trị
      let formattedValue = value.replace(/\D/g, ""); // Loại bỏ tất cả ký tự không phải số
      formattedValue = new Intl.NumberFormat("vi-VN").format(
        Number(formattedValue) || 0
      ); // Định dạng theo tiền Việt Nam

      // Cập nhật lại giá trị trong form
      setOfferForm((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setOfferForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Định dạng giá trị tiền tệ Việt Nam (hiển thị như tiền)
  const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat("vi-VN").format(
      Number(amount.replace(/\D/g, "")) || 0
    );
  };
  const handleSendEmail = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9999/api/candidates/send_email"
      );
      alert("Email sent successfully!");
      console.log("Email response:", response.data);
    } catch (err) {
      alert("Failed to send email. Please try again.");
      console.error("Error sending email:", err);
    }
  };
  // Handle creating an offer
  const handleCreateOffer = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const offerData = {
        ...offerForm,
        baseSalary: Number(offerForm.baseSalary.toString().replace(/\D/g, "")),
        salary: Number(offerForm.salary.toString().replace(/\D/g, "")),
        bonus: Number(offerForm.bonus.toString().replace(/\D/g, "")),
      };
      const response = await axios.post(
        `http://localhost:9999/api/offers/create/${selectedCandidate?.id}`,
        offerData
      );
      alert(`Offer created successfully for ${selectedCandidate?.name}!`);
      console.log("Offer created:", response.data);
      // Update status and close modal
      if (selectedCandidate) {
        setOfferStatus((prev) => ({
          ...prev,
          [selectedCandidate.id]: "DONE",
        }));
      }
      closeModal();
    } catch (err) {
      alert("Failed to create offer. Please try again.");
      console.error("Error creating offer:", err);
    }
  };

  if (loading) {
    return <div className="loading-text">Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div className="error-text">{error}</div>;
  }

  return (
    <div className="candidate-list-container">
      <style>
        {`
          /* Container for the entire component */
          .candidate-list-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          /* Heading */
          .candidate-list-heading {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          /* Filter form */
          .filter-form {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }

          /* Search input */
          .search-input {
            width: 300px;
            padding: 8px 12px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-right: 20px;
          }

          .search-input:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
          }

          /* Sorting and pagination section */
          .sorting-pagination {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          /* Select dropdown */
          .sort-select,
          .items-per-page-select {
            padding: 8px 12px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #fff;
            cursor: pointer;
          }

          .sort-select {
            width: 200px;
          }

          .items-per-page-select {
            width: 100px;
          }

          .sort-select:focus,
          .items-per-page-select:focus {
            outline: none;
            border-color: #007bff;
          }

          /* Pagination controls */
          .pagination-controls {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .pagination-button {
            padding: 8px 12px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #f8f9fa;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .pagination-button:disabled {
            background-color: #e9ecef;
            cursor: not-allowed;
          }

          .pagination-button:hover:not(:disabled) {
            background-color: #e2e6ea;
          }

          .pagination-text {
            font-size: 16px;
          }

          /* Table */
          .candidate-table {
            width: 100%;
            border-collapse: collapse;
            background-color: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }

          .candidate-table th,
          .candidate-table td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }

          .candidate-table th {
            background-color: #f8f9fa;
            font-weight: bold;
          }

          .candidate-table tr:hover {
            background-color: #f1f3f5;
          }

          /* Action button */
          .action-button {
            padding: 6px 12px;
            font-size: 14px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .action-button:hover {
            background-color: #0056b3;
          }

          /* Modal styles */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }

          .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 400px;
            max-width: 90%;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            position: relative;
          }

          .modal-header {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .modal-close {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
          }

          .modal-close:hover {
            color: #000;
          }

          .modal-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .form-group label {
            font-size: 14px;
            font-weight: bold;
          }

          .form-group input,
          .form-group select {
            padding: 8px 12px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .form-group input:focus,
          .form-group select:focus {
            outline: none;
            border-color: #007bff;
          }

          .form-group input[type="checkbox"] {
            width: auto;
          }

          .modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 20px;
          }

          .modal-button {
            padding: 8px 16px;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .modal-button.cancel {
            background-color: #dc3545;
            color: #fff;
          }

          .modal-button.cancel:hover {
            background-color: #c82333;
          }

          .modal-button.submit {
            background-color: #28a745;
            color: #fff;
          }

          .modal-button.submit:hover {
            background-color: #218838;
          }

          /* Loading and error messages */
          .loading-text,
          .error-text {
            font-size: 16px;
            text-align: center;
            margin: 20px 0;
          }

          .error-text {
            color: #dc3545;
          }
            .action-button.pending {
            background-color: #ffc107;
            cursor: not-allowed;
          }

          .action-button.pending:hover {
            background-color: #e0a800;
          }
        `}
      </style>

      <h1 className="candidate-list-heading">
        Danh sách ứng viên đã chọn (COMPLETED)
      </h1>

      {/* Filter Form */}
      <div className="filter-form">
        <input
          type="text"
          className="search-input"
          placeholder="Tìm kiếm (tên, email, số điện thoại, vị trí...)"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Sorting and Pagination */}
      <div className="sorting-pagination">
        <select
          className="sort-select"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="nameAsc">Tên: A → Z</option>
          <option value="nameDesc">Tên: Z → A</option>
          <option value="jobTitleAsc">Vị trí: A → Z</option>
          <option value="jobTitleDesc">Vị trí: Z → A</option>
        </select>

        <select
          className="items-per-page-select"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>

        <div className="pagination-controls">
          <button
            className="pagination-button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {"<"}
          </button>
          <span className="pagination-text">
            Trang {currentPage} trên {totalPages}
          </span>
          <button
            className="pagination-button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Candidate Table */}
      <table className="candidate-table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Vị trí</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.email}</td>
              <td>{candidate.phone}</td>
              <td>{candidate.jobTitle}</td>
              <td>
                {offerStatus[candidate.id] === "DONE" ? (
                  <button className="action-button done" disabled>
                    Done
                  </button>
                ) : (
                  <button
                    className="action-button"
                    onClick={() => openModal(candidate)}
                  >
                    Create Offer
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="action-button"
        style={{ backgroundColor: "#28a745" }} // Green color to differentiate
        onClick={handleSendEmail}
      >
        Send Email
      </button>

      {/* Modal for creating an offer */}
      {isModalOpen && selectedCandidate && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-header">
              Tạo Offer cho {selectedCandidate.name}
            </div>
            <form className="modal-form" onSubmit={handleCreateOffer}>
              <div className="form-group">
                <label>Lương cơ bản (VND)</label>
                <input
                  type="text" // Đổi thành type="text" để có thể hiển thị định dạng tiền
                  name="baseSalary"
                  value={offerForm.baseSalary}
                  onChange={handleFormChange}
                  required
                  placeholder="0"
                />
              </div>

              <div className="form-group">
                <label>Thưởng (VND)</label>
                <input
                  type="text" // Đổi thành type="text" để có thể hiển thị định dạng tiền
                  name="bonus"
                  value={offerForm.bonus}
                  onChange={handleFormChange}
                  required
                  placeholder="0"
                />
              </div>

              <div className="form-group">
                <label>Lương cuối cùng (VND)</label>
                <input
                  type="text" // Đổi thành type="text" để có thể hiển thị định dạng tiền
                  name="salary"
                  value={offerForm.salary}
                  onChange={handleFormChange}
                  required
                  placeholder="0"
                />
              </div>

              <div className="form-group">
                <label>Ghi chú</label>
                <textarea
                  name="note"
                  value={offerForm.note}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="modal-button cancel"
                  onClick={closeModal}
                >
                  Hủy
                </button>
                <button type="submit" className="modal-button submit">
                  Tạo Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateList;
