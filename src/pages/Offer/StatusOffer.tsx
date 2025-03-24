import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

// Interface for the raw Offer data from the API
interface Offer {
  // _id: string;
  id: string;
  recruitmentId: string;
  baseSalary: number;
  salary: number;
  bonus: number;
  negotiatedSalary: number;
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

// Interface for the enhanced offer with display fields
interface EnhancedOffer extends Offer {
  candidateName: string;
  jobTitle: string;
}

interface Recruitment {
  _id: string;
  candidateId: {
    name: string;
    email: string;
    phone: string;
    status: string;
    isPotential: boolean;
  };
  jobId: {
    title: string;
    source_url: string;
  };
  cvFile: {
    fileName: string;
    uploadedAt: string;
  };
  status: string;
  notes: string;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface RecruitmentResponse {
  message: string;
  recruitment: Recruitment;
}
interface ModalProps {
  offerId: string;
  isOpen: boolean;
  closeModal: () => void;
  updateOffer: (offerId: string, negotiatedSalary: number) => void;
}

interface StatusModalProps {
  offerId: string;
  isOpen: boolean;
  closeModal: () => void;
  updateOfferStatus: (offerId: string, action: "ACCEPT" | "REJECT") => void;
}

const OfferStatusList: React.FC = () => {
  const [offers, setOffers] = useState<EnhancedOffer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10); // Mặc định 10 items
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);
  const [negotiatedSalary, setNegotiatedSalary] = useState<number>(0);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false); // New state for loading feedback
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<
    "ACCEPT" | "REJECT" | null
  >(null);

  const statusOptions = [
    { value: "ALL", label: "Tất cả" },
    { value: "PENDING", label: "Pending" },
    { value: "SENT", label: "Sent" },
    { value: "ACCEPTED", label: "Accepted" },
    { value: "REJECTED", label: "Rejected" },
    { value: "MANAGER_APPROVAL", label: "Manager Approval" },
    { value: "MANAGER_REJECTED", label: "Manager Rejected" },
  ];
  const itemsPerPageOptions = [
    { value: 10, label: "10 mỗi trang" },
    { value: 20, label: "20 mỗi trang" },
    { value: 30, label: "30 mỗi trang" },
    { value: 50, label: "50 mỗi trang" },
  ];

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        setLoading(true);
        setError(null);

        const url =
          selectedStatus === "ALL"
            ? "http://localhost:9999/api/offers/listStatus"
            : `http://localhost:9999/api/offers/listStatus?status=${selectedStatus}`;

        const response = await axios.get(url);
        const rawOffers: Offer[] = Array.isArray(response.data.offers)
          ? response.data.offers
          : Array.isArray(response.data)
          ? response.data
          : [];

        console.log("Raw offers from API:", rawOffers); // Log dữ liệu thô
        if (rawOffers.length === 0) {
          setOffers([]);
          return;
        }

        const recruitmentPromises = rawOffers.map(async (offer) => {
          console.log("Processing offer:", offer.id); // Log từng offer
          if (!offer.recruitmentId) {
            return {
              ...offer,
              candidateName: "Unknown Candidate",
              jobTitle: "Unknown Job",
            };
          }

          try {
            const recruitmentResponse = await axios.get<RecruitmentResponse>(
              `http://localhost:9999/api/recruitments/${offer.recruitmentId}`
            );
            const recruitment = recruitmentResponse.data.recruitment;
            return {
              ...offer,
              candidateName:
                recruitment?.candidateId?.name || "Unknown Candidate",
              jobTitle: recruitment?.jobId?.title || "Unknown Job",
            };
          } catch (err) {
            return {
              ...offer,
              candidateName: "Unknown Candidate",
              jobTitle: "Unknown Job",
            };
          }
        });

        const enhancedOffers = await Promise.all(recruitmentPromises);
        console.log("Enhanced offers:", enhancedOffers); // Log dữ liệu sau khi xử lý
        setOffers(enhancedOffers);
      } catch (err) {
        setError("Không thể tải danh sách offer. Vui lòng thử lại sau.");
        setOffers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, [selectedStatus]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOffers = offers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(offers.length / itemsPerPage);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
    setCurrentPage(1); // Reset về trang 1 khi đổi filter
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset về trang 1 khi đổi số lượng
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const handleUpdateClick = (offerId: string | undefined) => {
    console.log("handleUpdateClick called with offerId:", offerId);
    if (!offerId) {
      console.error("No valid offerId provided");
      setUpdateError("Không có ID offer hợp lệ");
      return;
    }
    setSelectedOfferId(offerId);
    setIsModalOpen(true);
    setNegotiatedSalary(0);
    setUpdateError(null);
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "handleUpdateSubmit called with selectedOfferId:",
      selectedOfferId
    );
    if (!selectedOfferId) {
      console.log("No selectedOfferId, returning early");
      return;
    }

    if (!negotiatedSalary || negotiatedSalary <= 0) {
      setUpdateError("Vui lòng nhập mức lương hợp lệ");
      return;
    }

    setIsUpdating(true);
    setUpdateError(null);

    try {
      console.log("Sending update request:", {
        offerId: selectedOfferId,
        negotiatedSalary,
        updatedBy: null,
      });

      const response = await axios.put(
        `http://localhost:9999/api/offers/update/${selectedOfferId}`,
        {
          negotiatedSalary: negotiatedSalary,
          updatedBy: null,
        },
        { timeout: 10000 }
      );

      console.log("API Response:", response.data);
      setOffers((prevOffers) =>
        prevOffers.map((offer) =>
          offer.id === selectedOfferId ? response.data.offer : offer
        )
      );

      setIsModalOpen(false);
      setSelectedOfferId(null);
      setNegotiatedSalary(0);
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      console.error("Detailed error:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      const errorMessage =
        error.response?.data?.message || "Lỗi khi cập nhật offer";
      setUpdateError(errorMessage);
    } finally {
      setIsUpdating(false);
    }
  };
  const handleStatusUpdateClick = (offerId: string) => {
    setSelectedOfferId(offerId);
    setIsStatusModalOpen(true);
    setSelectedAction(null);
    setUpdateError(null);
  };

  const handleStatusUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("handleStatusUpdateSubmit started", {
      selectedOfferId,
      selectedAction,
    });

    if (!selectedOfferId || !selectedAction) {
      console.warn("Missing required parameters", {
        selectedOfferId,
        selectedAction,
      });
      return;
    }

    setIsUpdating(true);
    setUpdateError(null);
    console.log("State set: isUpdating = true, updateError = null");

    try {
      console.log("Making API request with:", {
        url: `http://localhost:9999/api/offers/status/${selectedOfferId}`,
        data: {
          action: selectedAction,
          updatedBy: null,
        },
        config: { timeout: 10000 },
      });

      const response = await axios.put(
        `http://localhost:9999/api/offers/status/${selectedOfferId}`,
        {
          action: selectedAction,
          updatedBy: null, // You might want to add actual user info here
        },
        { timeout: 10000 }
      );

      console.log("API response received:", {
        status: response.status,
        data: response.data,
      });

      setOffers((prevOffers) => {
        const updatedOffers = prevOffers.map((offer) =>
          offer.id === selectedOfferId ? response.data.offer : offer
        );
        console.log("Offers updated:", updatedOffers);
        return updatedOffers;
      });

      console.log("Closing modal and resetting state");
      setIsStatusModalOpen(false);
      setSelectedOfferId(null);
      setSelectedAction(null);
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      console.error("Error occurred during status update:", {
        message: error.message,
        responseStatus: error.response?.status,
        responseData: error.response?.data,
        request: error.request,
        config: error.config,
      });
      setUpdateError(
        error.response?.data?.message || "Lỗi khi cập nhật trạng thái"
      );
      console.log(
        "Update error set:",
        error.response?.data?.message || "Lỗi khi cập nhật trạng thái"
      );
    } finally {
      setIsUpdating(false);
      console.log("Finally block executed: isUpdating = false");
    }
  };
  if (loading) return <div className="loading-text">Đang tải dữ liệu...</div>;
  if (error) return <div className="error-text">{error}</div>;
  const isPendingView = selectedStatus === "PENDING";
  return (
    <div className="offer-status-container">
      <style>
        {`
           .offer-status-container {
             max-width: 1200px;
           margin: 0 auto;
             padding: 20px;
             font-family: Arial, sans-serif;
           }

           .offer-status-heading {
             font-size: 24px;
            font-weight: bold;
             margin-bottom: 20px;
          }

          .filter-form {
            margin-bottom: 20px;
          }

          .status-select {
            padding: 8px 12px;
             font-size: 16px;
             border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #fff;
            cursor: pointer;
            width: 200px;
          }
           .status-select:focus {             outline: none;
                        border-color: #007bff;
           }

          .offer-table {
             width: 100%;
             border-collapse: collapse;
            background-color: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
           }

         .offer-table th,
         .offer-table td {
             padding: 12px 15px;
             text-align: left;
            border-bottom: 1px solid #ddd;
           }

           .offer-table th {             background-color: #f8f9fa;
             font-weight: bold;
           }

          .offer-table tr:hover {
             background-color: #f1f3f5;
           }

          .status-badge {
             padding: 4px 8px;
             border-radius: 12px;
             font-size: 12px;
             color: #fff;
             display: inline-block;
           }

           .status-pending {
             background-color: #ffc107;
           }

           .status-sent {
             background-color: #17a2b8;
           }

           .status-accepted {
             background-color: #28a745;
           }

           .status-rejected {
             background-color: #dc3545;
           }

           .status-manager-approval {
             background-color: #6c757d;
           }

           .status-manager-rejected {
             background-color: #dc3545;
           }

           .loading-text,
           .error-text {
             font-size: 16px;
             text-align: center;
             margin: 20px 0;
           }

           .error-text {
             color: #dc3545;
           }
             .pagination {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            gap: 10px;
            align-items: center;
          }

          .pagination-button {
            padding: 8px 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #fff;
            cursor: pointer;
          }

          .pagination-button:disabled {
            background-color: #f8f9fa;
            cursor: not-allowed;
            opacity: 0.6;
          }

          .pagination-button.active {
            background-color: #007bff;
            color: white;
            border-color: #007bff;
          }

          .filter-group {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
          }
            .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.error-message {
  color: red;
  margin-bottom: 10px;
  font-size: 14px;
}

.modal-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.submit-button {
  background: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background: #45a049;
}

.cancel-button {
  background: #f44336;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-button:hover {
  background: #da190b;
}
  .loading-message {
  color: #666;
  margin-bottom: 10px;
  text-align: center;
}

.submit-button:disabled,
.cancel-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;

  .status-buttons {
    display: flex;
    gap: 10px;
    margin: 10px 0;
}

.action-button.status-update {
    margin-left: 5px;
    background-color: #4a90e2;
}

.action-button.selected {
    background-color: #2ecc71;
    color: white;
}

.action-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
}
         `}
      </style>
      <h1 className="offer-status-heading">Trạng thái Offer Lương</h1>

      <div className="filter-group">
        <select
          className="status-select"
          value={selectedStatus}
          onChange={handleStatusChange}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          className="status-select"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <table className="offer-table">
        <thead>
          <tr>
            <th>Tên ứng viên</th>
            <th>Vị trí</th>
            <th>Lương cơ bản</th>
            <th>Thưởng</th>
            <th>Lương cuối cùng</th>
            <th>Lương update</th>
            <th>Trạng thái</th>
            <th>{isPendingView ? "Hành động" : "Trạng thái quản lý"}</th>
          </tr>
        </thead>
        <tbody>
          {currentOffers.map((offer, index) => (
            <tr key={offer.id || `fallback-${index}`}>
              <td>{offer.candidateName}</td>
              <td>{offer.jobTitle}</td>
              <td>{formatCurrency(offer.baseSalary)}</td>
              <td>{formatCurrency(offer.bonus)}</td>
              <td>{formatCurrency(offer.salary)}</td>
              <td>{formatCurrency(offer.negotiatedSalary)}</td>
              <td>
                <span
                  className={`status-badge status-${offer.status
                    .toLowerCase()
                    .replace("_", "-")}`}
                >
                  {offer.status}
                </span>
              </td>
              <td>
                {offer.status === "PENDING" ? (
                  <>
                    <button
                      className="action-button"
                      onClick={() => handleUpdateClick(offer.id)}
                    >
                      Update Offer
                    </button>
                    <button
                      className="action-button status-update"
                      onClick={() => handleStatusUpdateClick(offer.id)}
                    >
                      Update Status
                    </button>
                  </>
                ) : (
                  <span
                    className={`status-badge status-${offer.managerStatus.toLowerCase()}`}
                  >
                    {offer.managerStatus}
                  </span>
                )}
              </td>
            </tr>
          ))}
          {currentOffers.length === 0 && (
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
                Không có offer nào với trạng thái này
              </td>
            </tr>
          )}
        </tbody>
        {isStatusModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Cập nhật Trạng thái Offer</h2>
              <form onSubmit={handleStatusUpdateSubmit}>
                <div className="form-group">
                  <label>Chọn hành động:</label>
                  <div className="status-buttons">
                    <button
                      type="button"
                      className={`action-button ${
                        selectedAction === "ACCEPT" ? "selected" : ""
                      }`}
                      onClick={() => setSelectedAction("ACCEPT")}
                      disabled={isUpdating}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className={`action-button ${
                        selectedAction === "REJECT" ? "selected" : ""
                      }`}
                      onClick={() => setSelectedAction("REJECT")}
                      disabled={isUpdating}
                    >
                      Reject
                    </button>
                  </div>
                </div>

                {updateError && (
                  <div className="error-message">{updateError}</div>
                )}

                {isUpdating && (
                  <div className="loading-message">Đang cập nhật...</div>
                )}

                <div className="modal-actions">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={!selectedAction || isUpdating}
                  >
                    {isUpdating ? "Đang xử lý..." : "Xác nhận"}
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => setIsStatusModalOpen(false)}
                    disabled={isUpdating}
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Cập nhật Offer</h2>
              <form
                onSubmit={(e) => {
                  console.log(
                    "Form submitted with selectedOfferId:",
                    selectedOfferId
                  );
                  handleUpdateSubmit(e);
                }}
              >
                {" "}
                <div className="form-group">
                  <label htmlFor="negotiatedSalary">
                    Lương thương lượng (VND):
                  </label>
                  <input
                    type="number"
                    id="negotiatedSalary"
                    value={negotiatedSalary}
                    onChange={(e) =>
                      setNegotiatedSalary(Number(e.target.value))
                    }
                    required
                    className="form-input"
                    disabled={isUpdating} // Disable input while updating
                  />
                </div>
                {updateError && (
                  <div className="error-message">{updateError}</div>
                )}
                {isUpdating && (
                  <div className="loading-message">Đang cập nhật...</div>
                )}
                <div className="modal-actions">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isUpdating} // Disable button while updating
                  >
                    {isUpdating ? "Đang xử lý..." : "Cập nhật"}
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => setIsModalOpen(false)}
                    disabled={isUpdating}
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </table>
      {offers.length > 0 && (
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Trước
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-button ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="pagination-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Sau
          </button>

          <span>
            Trang {currentPage} / {totalPages} (Tổng: {offers.length} offers)
          </span>
        </div>
      )}
    </div>
  );
};

export default OfferStatusList;
