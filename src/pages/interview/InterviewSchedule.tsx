import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Define styles for a modern and polished UI
const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
    display: "flex",
    gap: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  leftSection: {
    flex: "3",
    display: "flex",
    flexDirection: "column" as "column",
    gap: "20px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  rightSection: {
    flex: "7",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333",
  },
  searchBar: {
    width: "100%",
    padding: "12px",
    border: "1px solid #d9d9d9",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  searchBarFocus: {
    borderColor: "#1890ff",
  },
  filterSection: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "20px",
  },
  filterLabel: {
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "8px",
    color: "#555",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "10px",
  },
  dropdown: {
    width: "100%",
    padding: "12px",
    border: "1px solid #d9d9d9",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  dropdownFocus: {
    borderColor: "#1890ff",
  },
  button: {
    backgroundColor: "#1890ff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    alignSelf: "flex-end",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#40a9ff",
  },
  placeholderText: {
    color: "#888",
    fontSize: "14px",
    textAlign: "center" as "center",
    marginTop: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as "collapse",
    marginTop: "20px",
  },
  th: {
    backgroundColor: "#f5f5f5",
    textAlign: "left" as "left",
    padding: "12px",
    borderBottom: "1px solid #d9d9d9",
    fontSize: "14px",
    fontWeight: "500",
    color: "#333",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #e8e8e8",
    fontSize: "14px",
    color: "#555",
  },
  trHover: {
    backgroundColor: "#fafafa",
  },
  actionButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    marginRight: "10px",
    fontSize: "14px",
  },
  detailButton: {
    color: "#52c41a", // Green color for "Detail" button
  },
  editButton: {
    color: "#1890ff",
  },
  cancelButton: {
    color: "#ff4d4f",
  },
  modalOverlay: {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "700px",
    maxWidth: "90%",
    maxHeight: "85vh",
    overflowY: "auto" as "auto",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  },
  addModalContent: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "500px",
    maxWidth: "90%",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  },
  editModalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
  modalHeader: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333",
    borderBottom: "1px solid #e8e8e8",
    paddingBottom: "10px",
  },
  modalCloseButton: {
    backgroundColor: "#ff4d4f",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.3s",
  },
  modalAddRoundButton: {
    backgroundColor: "#1890ff",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.3s",
  },
  modalConductButton: {
    backgroundColor: "#52c41a",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.3s",
  },
  modalButtonGroup: {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
    marginBottom: "20px",
  },
  modalSection: {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  modalLabel: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#555",
    width: "150px",
  },
  modalValue: {
    fontSize: "14px",
    color: "#333",
    flex: 1,
  },
  stageSection: {
    border: "1px solid #e8e8e8",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
    backgroundColor: "#fafafa",
  },
  stageHeader: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#1890ff",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #d9d9d9",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
  },
  editDropdown: {
    width: "100%",
    padding: "8px",
    border: "1px solid #d9d9d9",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
  },
  saveButton: {
    backgroundColor: "#1890ff",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.3s",
  },
};

// Define types for the interview data and export them
export interface Evaluation {
  interviewerId: string;
  score: { [key: string]: number };
  comments: string;
}

export interface Stage {
  round: number;
  interviewerIds: string[];
  type: string;
  status: string;
  evaluations: Evaluation[];
}

export interface Interview {
  _id: string;
  recruitmentId: string;
  stages: Stage[];
  finalStatus: string;
  date: string;
  time: string;
  mode: string;
  address?: string;
  google_meet_link?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Candidate {
  _id: string;
  name: string;
}

export interface Job {
  _id: string;
  title: string;
}

export interface User {
  _id: string;
  name: string;
}

const InterviewSchedule: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState({
    completed: false,
    canceled: false,
  });
  const [dateFilter, setDateFilter] = useState("");
  const [candidateFilter, setCandidateFilter] = useState("");
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null);
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [job, setJob] = useState<Job | null>(null);
  const [interviewers, setInterviewers] = useState<{ [key: string]: User }>({});
  const [detailsLoading, setDetailsLoading] = useState(false);

  // State for add interview modal
  const [addInterviewModal, setAddInterviewModal] = useState(false);
  const [addRecruitmentId, setAddRecruitmentId] = useState("");
  const [addDate, setAddDate] = useState("");
  const [addTime, setAddTime] = useState("");
  const [addMode, setAddMode] = useState("ONLINE");
  const [addGoogleMeetLink, setAddGoogleMeetLink] = useState("");
  const [addAddress, setAddAddress] = useState("");

  // State for edit modals
  const [editDateTimeModal, setEditDateTimeModal] = useState(false);
  const [editModeModal, setEditModeModal] = useState(false);
  const [editFinalStatusModal, setEditFinalStatusModal] = useState(false);
  const [editPassFailModal, setEditPassFailModal] = useState(false);

  // State for form inputs in edit modals
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editMode, setEditMode] = useState("ONLINE");
  const [editGoogleMeetLink, setEditGoogleMeetLink] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editFinalStatus, setEditFinalStatus] = useState("");
  const [editRound, setEditRound] = useState(1);
  const [editPassFailStatus, setEditPassFailStatus] = useState("PASS");

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/interviews");
        if (response.data.success) {
          setInterviews(response.data.data);
        } else {
          setError("Failed to fetch interviews");
        }
      } catch (err) {
        setError("Error fetching interviews");
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  const fetchInterviewById = async (id: string) => {
    setDetailsLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/interviews/${id}`);
      if (response.data.success) {
        setSelectedInterview(response.data.data);
        fetchAdditionalDetails(response.data.data);
      } else {
        console.error("Failed to fetch interview details");
      }
    } catch (err) {
      console.error("Error fetching interview details:", err);
    } finally {
      setDetailsLoading(false);
    }
  };

  const fetchAdditionalDetails = async (interview: Interview) => {
    try {
      const recruitmentResponse = await axios.get(
        `http://localhost:5000/api/recruitments/${interview.recruitmentId}`
      );
      const recruitment = recruitmentResponse.data;

      const candidateResponse = await axios.get(
        `http://localhost:5000/api/candidates/${recruitment.candidateId}`
      );
      setCandidate(candidateResponse.data);

      const jobResponse = await axios.get(
        `http://localhost:5000/api/jobs/${recruitment.jobId}`
      );
      setJob(jobResponse.data);

      const allInterviewerIds: string[] = Array.from(
        new Set(
          interview.stages.flatMap((stage: Stage) => stage.interviewerIds)
        )
      );
      if (allInterviewerIds.length > 0) {
        const interviewerPromises = allInterviewerIds.map((id: string) =>
          axios.get(`http://localhost:5000/api/users/${id}`)
        );
        const interviewerResponses = await Promise.all(interviewerPromises);
        const interviewerMap = interviewerResponses.reduce(
          (acc: { [key: string]: User }, res: any) => {
            acc[res.data._id] = res.data;
            return acc;
          },
          {}
        );
        setInterviewers(interviewerMap);
      }
    } catch (err) {
      console.error("Error fetching additional details:", err);
    }
  };

  const handleDetailClick = (interview: Interview) => {
    fetchInterviewById(interview._id);
  };

  const handleAddRoundClick = async (id: string) => {
    try {
      const response = await axios.post("http://localhost:5000/api/createInterviewStage", {
        interviewId: id,
        round: selectedInterview?.stages.length ? selectedInterview.stages.length + 1 : 1,
        type: "Technical", // Example type, can be dynamic
        interviewerIds: [], // Add logic to select interviewers
        status: "PENDING",
      });
      if (response.data.success) {
        alert("Thêm vòng phỏng vấn thành công!");
        fetchInterviewById(id); // Refresh the interview details
      }
    } catch (err) {
      console.error("Error adding interview round:", err);
      alert("Failed to add interview round");
    }
  };

  const handleConductInterviewClick = async (id: string) => {
    try {
      const response = await axios.post("http://localhost:5000/api/updateFinalStatus", {
        interviewId: id,
        finalStatus: "COMPLETED",
      });
      if (response.data.success) {
        alert("Cập nhật trạng thái phỏng vấn thành công!");
        fetchInterviewById(id); // Refresh the interview details
      }
    } catch (err) {
      console.error("Error updating final status:", err);
      alert("Failed to update final status");
    }
  };

  const handleCancelInterview = async (id

: string) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/cancel/${id}`);
      if (response.data.success) {
        alert("Hủy phỏng vấn thành công!");
        fetchInterviewById(id); // Refresh the interview details
      }
    } catch (err) {
      console.error("Error canceling interview:", err);
      alert("Failed to cancel interview");
    }
  };

  const closeModal = () => {
    setSelectedInterview(null);
    setCandidate(null);
    setJob(null);
    setInterviewers({});
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setStatusFilter((prev) => ({ ...prev, [name]: checked }));
  };

  const filteredInterviews = interviews.filter((interview) => {
    const formattedDate = new Date(interview.date).toLocaleDateString("vi-VN");
    const matchesSearch =
      searchQuery === "" ||
      interview.mode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formattedDate.includes(searchQuery);

    const matchesStatus =
      (statusFilter.completed && interview.finalStatus === "COMPLETED") ||
      (statusFilter.canceled && interview.finalStatus === "CANCELLED") ||
      (!statusFilter.completed && !statusFilter.canceled);

    const matchesDate =
      dateFilter === "" ||
      new Date(interview.date).toISOString().split("T")[0] ===
        new Date(dateFilter).toISOString().split("T")[0];

    const matchesCandidate =
      candidateFilter === "" || interview.recruitmentId === candidateFilter;

    return matchesSearch && matchesStatus && matchesDate && matchesCandidate;
  });

  const completedCount = interviews.filter(
    (interview) => interview.finalStatus === "COMPLETED"
  ).length;
  const canceledCount = interviews.filter(
    (interview) => interview.finalStatus === "CANCELLED"
  ).length;

  // Handlers for add interview modal
  const openAddInterviewModal = () => {
    setAddInterviewModal(true);
  };

  const closeAddInterviewModal = () => {
    setAddInterviewModal(false);
    setAddRecruitmentId("");
    setAddDate("");
    setAddTime("");
    setAddMode("ONLINE");
    setAddGoogleMeetLink("");
    setAddAddress("");
  };

  const handleAddInterview = async () => {
    if (!addRecruitmentId || !addDate || !addTime) {
      alert("Vui lòng điền đầy đủ các trường bắt buộc!");
      return;
    }

    const interviewData = {
      recruitmentId: addRecruitmentId,
      date: new Date(addDate).toISOString(),
      time: addTime,
      mode: addMode,
      ...(addMode === "ONLINE" ? { google_meet_link: addGoogleMeetLink } : { address: addAddress }),
    };

    try {
      const response = await axios.post("http://localhost:5000/api/createInterviews", interviewData);
      if (response.data.success) {
        alert("Thêm lịch phỏng vấn thành công!");
        setInterviews([...interviews, response.data.data]); // Add the new interview to the list
        closeAddInterviewModal();
      } else {
        alert("Thêm lịch phỏng vấn thất bại!");
      }
    } catch (err) {
      console.error("Error adding interview:", err);
      alert("Đã có lỗi xảy ra khi thêm lịch phỏng vấn!");
    }
  };

  // Handlers for edit modals
  const openEditDateTimeModal = () => {
    if (selectedInterview) {
      setEditDate(selectedInterview.date.split("T")[0]); // Format date for input
      setEditTime(selectedInterview.time);
      setEditDateTimeModal(true);
    }
  };

  const openEditModeModal = () => {
    if (selectedInterview) {
      setEditMode(selectedInterview.mode);
      setEditGoogleMeetLink(selectedInterview.google_meet_link || "");
      setEditAddress(selectedInterview.address || "");
      setEditModeModal(true);
    }
  };

  const openEditFinalStatusModal = () => {
    if (selectedInterview) {
      setEditFinalStatus(selectedInterview.finalStatus);
      setEditFinalStatusModal(true);
    }
  };

  const openEditPassFailModal = (stage: Stage) => {
    setEditRound(stage.round);
    setEditPassFailStatus(stage.status);
    setEditPassFailModal(true);
  };

  const handleUpdateDateTime = async () => {
    if (!selectedInterview) return;
    try {
      const response = await axios.post("http://localhost:5000/api/updateInterviewDateTime", {
        interviewId: selectedInterview._id,
        date: editDate,
        time: editTime,
      });
      if (response.data.success) {
        alert("Cập nhật thời gian phỏng vấn thành công!");
        fetchInterviewById(selectedInterview._id); // Refresh the interview details
        setEditDateTimeModal(false);
      }
    } catch (err) {
      console.error("Error updating interview date/time:", err);
      alert("Failed to update interview date/time");
    }
  };

  const handleUpdateMode = async () => {
    if (!selectedInterview) return;
    try {
      const response = await axios.put(
        `http://localhost:5000/api/update-mode/${selectedInterview._id}`,
        {
          mode: editMode,
          ...(editMode === "ONLINE" ? { google_meet_link: editGoogleMeetLink } : { address: editAddress }),
        }
      );
      if (response.data.success) {
        alert("Cập nhật hình thức phỏng vấn thành công!");
        fetchInterviewById(selectedInterview._id); // Refresh the interview details
        setEditModeModal(false);
      }
    } catch (err) {
      console.error("Error updating interview mode:", err);
      alert("Failed to update interview mode");
    }
  };

  const handleUpdateFinalStatus = async () => {
    if (!selectedInterview) return;
    try {
      const response = await axios.post("http://localhost:5000/api/updateFinalStatus", {
        interviewId: selectedInterview._id,
        finalStatus: editFinalStatus,
      });
      if (response.data.success) {
        alert("Cập nhật trạng thái cuối cùng thành công!");
        fetchInterviewById(selectedInterview._id); // Refresh the interview details
        setEditFinalStatusModal(false);
      }
    } catch (err) {
      console.error("Error updating final status:", err);
      alert("Failed to update final status");
    }
  };

  const handleUpdatePassFail = async () => {
    if (!selectedInterview) return;
    try {
      const response = await axios.put("http://localhost:5000/api/update-pass-fail", {
        interviewId: selectedInterview._id,
        round: editRound,
        status: editPassFailStatus,
      });
      if (response.data.success) {
        alert("Cập nhật trạng thái pass/fail thành công!");
        fetchInterviewById(selectedInterview._id); // Refresh the interview details
        setEditPassFailModal(false);
      }
    } catch (err) {
      console.error("Error updating pass/fail status:", err);
      alert("Failed to update pass/fail status");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <input
          type="text"
          placeholder="Tìm kiếm "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchBar}
          onFocus={(e) => (e.target.style.borderColor = "#1890ff")}
          onBlur={(e) => (e.target.style.borderColor = "#d9d9d9")}
        />
        <div style={styles.filterSection}>
          <div>
            <div style={styles.filterLabel}>Trạng thái phỏng vấn</div>
            <div style={styles.checkboxContainer}>
              <label>
                <input
                  type="checkbox"
                  name="completed"
                  checked={statusFilter.completed}
                  onChange={handleStatusChange}
                />
                Đã hoàn thành ({completedCount})
              </label>
              <label>
                <input
                  type="checkbox"
                  name="canceled"
                  checked={statusFilter.canceled}
                  onChange={handleStatusChange}
                />
                Đã hủy ({canceledCount})
              </label>
            </div>
          </div>
          <div>
            <div style={styles.filterLabel}>Thời gian</div>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              style={styles.dropdown}
              onFocus={(e) => (e.target.style.borderColor = "#1890ff")}
              onBlur={(e) => (e.target.style.borderColor = "#d9d9d9")}
            >
              <option value="">Hôm nay</option>
              <option value="yesterday">Hôm qua</option>
              <option value="this-week">Tuần này</option>
              <option value="this-month">Tháng này</option>
            </select>
          </div>
        </div>
      </div>
      <div style={styles.rightSection}>
        <h1 style={styles.header}>Lên lịch phỏng vấn</h1>
        <button
          style={styles.button}
          onClick={openAddInterviewModal}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#40a9ff")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#1890ff")
          }
        >
          Thêm lịch phỏng vấn
        </button>
        {loading ? (
          <p style={styles.placeholderText}>Đang tải...</p>
        ) : error ? (
          <p style={styles.placeholderText}>{error}</p>
        ) : filteredInterviews.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Ngày</th>
                <th style={styles.th}>Thời gian</th>
                <th style={styles.th}>Hình thức</th>
                <th style={styles.th}>Địa điểm/Link</th>
                <th style={styles.th}>Trạng thái</th>
                <th style={styles.th}>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredInterviews.map((interview) => (
                <tr
                  key={interview._id}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#fafafa")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <td style={styles.td}>
                    {new Date(interview.date).toLocaleDateString("vi-VN")}
                  </td>
                  <td style={styles.td}>{interview.time}</td>
                  <td style={styles.td}>{interview.mode}</td>
                  <td style={styles.td}>
                    {interview.mode === "ONLINE" ? (
                      <a
                        href={interview.google_meet_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {interview.google_meet_link}
                      </a>
                    ) : (
                      interview.address || "N/A"
                    )}
                  </td>
                  <td style={styles.td}>{interview.finalStatus}</td>
                  <td style={styles.td}>
                    <button
                      style={{ ...styles.actionButton, ...styles.detailButton }}
                      onClick={() => handleDetailClick(interview)}
                    >
                      Chi tiết
                    </button>
                    <button
                      style={{ ...styles.actionButton, ...styles.cancelButton }}
                      onClick={() => handleCancelInterview(interview._id)}
                    >
                      Hủy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={styles.placeholderText}>
            Không tìm thấy lịch phỏng vấn nào phù hợp với tiêu chí của bạn.
          </p>
        )}
      </div>

      {/* Add Interview Modal */}
      {addInterviewModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.addModalContent}>
            <h2 style={styles.modalHeader}>Thêm Lịch Phỏng Vấn</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Recruitment ID</div>
              <input
                type="text"
                value={addRecruitmentId}
                onChange={(e) => setAddRecruitmentId(e.target.value)}
                style={styles.input}
                placeholder="Nhập Recruitment ID"
              />
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Ngày</div>
              <input
                type="date"
                value={addDate}
                onChange={(e) => setAddDate(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Thời gian</div>
              <input
                type="time"
                value={addTime}
                onChange={(e) => setAddTime(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Hình thức</div>
              <select
                value={addMode}
                onChange={(e) => setAddMode(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="ONLINE">Online</option>
                <option value="OFFLINE">Offline</option>
              </select>
            </div>
            {addMode === "ONLINE" ? (
              <div style={styles.modalSection}>
                <div style={styles.modalLabel}>Link Google Meet</div>
                <input
                  type="text"
                  value={addGoogleMeetLink}
                  onChange={(e) => setAddGoogleMeetLink(e.target.value)}
                  style={styles.input}
                  placeholder="Nhập link Google Meet"
                />
              </div>
            ) : (
              <div style={styles.modalSection}>
                <div style={styles.modalLabel}>Địa điểm</div>
                <input
                  type="text"
                  value={addAddress}
                  onChange={(e) => setAddAddress(e.target.value)}
                  style={styles.input}
                  placeholder="Nhập địa điểm"
                />
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                style={styles.saveButton}
                onClick={handleAddInterview}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#40a9ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1890ff")
                }
              >
                Thêm
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={closeAddInterviewModal}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ff7875")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ff4d4f")
                }
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Modal for Interview Details */}
      {selectedInterview && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalHeader}>Chi tiết cuộc phỏng vấn</h2>
            <div style={styles.modalButtonGroup}>
              <button
                style={styles.modalAddRoundButton}
                onClick={() => handleAddRoundClick(selectedInterview._id)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#40a9ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1890ff")
                }
              >
                Thêm vòng phỏng vấn
              </button>
              <button
                style={styles.modalConductButton}
                onClick={() => handleConductInterviewClick(selectedInterview._id)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#73d13d")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#52c41a")
                }
              >
                Tiến hành phỏng vấn
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={closeModal}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ff7875")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ff4d4f")
                }
              >
                Đóng
              </button>
            </div>

            {detailsLoading ? (
              <p style={styles.placeholderText}>Đang tải...</p>
            ) : (
              <>
                {/* Interview Details Section */}
                <div style={{ marginBottom: "30px" }}>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>Ngày phỏng vấn</div>
                    <div style={styles.modalValue}>
                      {new Date(selectedInterview.date).toLocaleDateString("vi-VN")}
                    </div>
                    <button
                      style={{ ...styles.actionButton, ...styles.editButton }}
                      onClick={openEditDateTimeModal}
                    >
                      Sửa
                    </button>
                  </div>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>Thời gian</div>
                    <div style={styles.modalValue}>{selectedInterview.time}</div>
                  </div>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>Hình thức</div>
                    <div style={styles.modalValue}>{selectedInterview.mode}</div>
                    <button
                      style={{ ...styles.actionButton, ...styles.editButton }}
                      onClick={openEditModeModal}
                    >
                      Sửa
                    </button>
                  </div>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>
                      {selectedInterview.mode === "ONLINE" ? "Link Google Meet" : "Địa điểm"}
                    </div>
                    <div style={styles.modalValue}>
                      {selectedInterview.mode === "ONLINE" ? (
                        <a
                          href={selectedInterview.google_meet_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#1890ff", textDecoration: "underline" }}
                        >
                          {selectedInterview.google_meet_link}
                        </a>
                      ) : (
                        selectedInterview.address || "N/A"
                      )}
                    </div>
                  </div>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>Trạng thái cuối cùng</div>
                    <div style={styles.modalValue}>{selectedInterview.finalStatus}</div>
                    <button
                      style={{ ...styles.actionButton, ...styles.editButton }}
                      onClick={openEditFinalStatusModal}
                    >
                      Sửa
                    </button>
                  </div>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>Ứng viên</div>
                    <div style={styles.modalValue}>
                      {candidate ? candidate.name : "Đang tải..."}
                    </div>
                  </div>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>Công việc</div>
                    <div style={styles.modalValue}>
                      {job ? job.title : "Đang tải..."}
                    </div>
                  </div>
                </div>

                {/* Interview Stages Section */}
                <div>
                  <div style={{ ...styles.modalLabel, marginBottom: "10px" }}>
                    Các vòng phỏng vấn
                  </div>
                  {selectedInterview.stages.length > 0 ? (
                    selectedInterview.stages.map((stage) => (
                      <div key={stage.round} style={styles.stageSection}>
                        <div style={styles.stageHeader}>
                          Vòng {stage.round} - {stage.type}
                        </div>
                        <div style={styles.modalSection}>
                          <div style={styles.modalLabel}>Trạng thái</div>
                          <div style={styles.modalValue}>{stage.status}</div>
                          <button
                            style={{ ...styles.actionButton, ...styles.editButton }}
                            onClick={() => openEditPassFailModal(stage)}
                          >
                            Sửa
                          </button>
                        </div>
                        <div style={styles.modalSection}>
                          <div style={styles.modalLabel}>Người phỏng vấn</div>
                          <div style={styles.modalValue}>
                            {stage.interviewerIds
                              .map((id) => interviewers[id]?.name || "Đang tải...")
                              .join(", ")}
                          </div>
                        </div>
                        <div style={styles.modalSection}>
                          <div style={styles.modalLabel}>Đánh giá</div>
                          <div style={styles.modalValue}>
                            {stage.evaluations.length > 0 ? (
                              stage.evaluations.map((evaluation, index) => (
                                <div key={index} style={{ marginBottom: "15px" }}>
                                  <div style={{ fontSize: "14px", color: "#333" }}>
                                    <strong>Người đánh giá:</strong>{" "}
                                    {interviewers[evaluation.interviewerId]?.name ||
                                      evaluation.interviewerId}
                                  </div>
                                  <div style={{ fontSize: "14px", color: "#333" }}>
                                    <strong>Điểm số:</strong>{" "}
                                    {Object.entries(evaluation.score).length > 0
                                      ? Object.entries(evaluation.score)
                                          .map(([key, value]) => `${key}: ${value}`)
                                          .join(", ")
                                      : "Chưa có điểm"}
                                  </div>
                                  <div style={{ fontSize: "14px", color: "#333" }}>
                                    <strong>Nhận xét:</strong>{" "}
                                    {evaluation.comments || "Chưa có nhận xét"}
                                  </div>
                                </div>
                              ))
                            ) : (
                              "Chưa có đánh giá"
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={styles.modalValue}>Không có vòng phỏng vấn</div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Edit Date/Time Modal */}
      {editDateTimeModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Chỉnh Sửa Thời Gian Phỏng Vấn</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Ngày</div>
              <input
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Thời gian</div>
              <input
                type="time"
                value={editTime}
                onChange={(e) => setEditTime(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button style={styles.saveButton} onClick={handleUpdateDateTime}>
                Lưu
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={() => setEditDateTimeModal(false)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Mode Modal */}
      {editModeModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Chỉnh Sửa Hình Thức Phỏng Vấn</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Hình thức</div>
              <select
                value={editMode}
                onChange={(e) => setEditMode(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="ONLINE">Online</option>
                <option value="OFFLINE">Offline</option>
              </select>
            </div>
            {editMode === "ONLINE" ? (
              <div style={styles.modalSection}>
                <div style={styles.modalLabel}>Link Google Meet</div>
                <input
                  type="text"
                  value={editGoogleMeetLink}
                  onChange={(e) => setEditGoogleMeetLink(e.target.value)}
                  style={styles.input}
                />
              </div>
            ) : (
              <div style={styles.modalSection}>
                <div style={styles.modalLabel}>Địa điểm</div>
                <input
                  type="text"
                  value={editAddress}
                  onChange={(e) => setEditAddress(e.target.value)}
                  style={styles.input}
                />
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button style={styles.saveButton} onClick={handleUpdateMode}>
                Lưu
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={() => setEditModeModal(false)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Final Status Modal */}
      {editFinalStatusModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Chỉnh Sửa Trạng Thái Cuối Cùng</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Trạng thái</div>
              <select
                value={editFinalStatus}
                onChange={(e) => setEditFinalStatus(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="PENDING">Pending</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button style={styles.saveButton} onClick={handleUpdateFinalStatus}>
                Lưu
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={() => setEditFinalStatusModal(false)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Pass/Fail Modal */}
      {editPassFailModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Chỉnh Sửa Trạng Thái Pass/Fail</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Vòng</div>
              <input
                type="number"
                value={editRound}
                onChange={(e) => setEditRound(Number(e.target.value))}
                style={styles.input}
                disabled
              />
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Trạng thái</div>
              <select
                value={editPassFailStatus}
                onChange={(e) => setEditPassFailStatus(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="PASS">Pass</option>
                <option value="FAIL">Fail</option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button style={styles.saveButton} onClick={handleUpdatePassFail}>
                Lưu
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={() => setEditPassFailModal(false)}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewSchedule;