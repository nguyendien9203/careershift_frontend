import React, { useState, useEffect } from "react";
import axios from "axios";

// Define types (unchanged)
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
  date: string;
  time: string;
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
  email: string;
  name?: string;
}

export interface RecruitmentOption {
  recruitmentId: string;
  label: string;
}

// Styles (unchanged)
const styles = {
  container: {
    display: "flex",
    padding: "20px",
    gap: "20px",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  leftSection: {
    width: "300px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  rightSection: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    overflowY: "auto" as "auto",
  },
  searchBar: {
    width: "100%",
    padding: "8px",
    marginBottom: "20px",
    border: "1px solid #d9d9d9",
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  filterSection: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "20px",
  },
  filterLabel: {
    fontSize: "14px",
    fontWeight: "bold" as "bold",
    marginBottom: "8px",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "8px",
  },
  dropdown: {
    width: "100%",
    padding: "8px",
    border: "1px solid #d9d9d9",
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#1890ff",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "20px",
    transition: "background-color 0.3s",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as "collapse",
  },
  th: {
    border: "1px solid #d9d9d9",
    padding: "12px",
    textAlign: "left" as "left",
    backgroundColor: "#fafafa",
    fontWeight: "bold" as "bold",
  },
  td: {
    border: "1px solid #d9d9d9",
    padding: "12px",
    textAlign: "left" as "left",
  },
  actionButton: {
    padding: "4px 8px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    marginRight: "8px",
  },
  detailButton: {
    backgroundColor: "#1890ff",
    color: "#fff",
  },
  cancelButton: {
    backgroundColor: "#ff4d4f",
    color: "#fff",
  },
  placeholderText: {
    color: "#999",
    textAlign: "center" as "center",
    marginTop: "20px",
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
    padding: "20px",
    borderRadius: "8px",
    width: "700px",
    maxHeight: "80vh",
    overflowY: "auto" as "auto",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  addModalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "500px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  addStageModalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "500px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  conductModalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "800px",
    maxHeight: "80vh",
    overflowY: "auto" as "auto",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  editModalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
  modalHeader: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  modalButtonGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  modalAddRoundButton: {
    backgroundColor: "#1890ff",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  modalSendEmailButton: {
    backgroundColor: "#fa8c16",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  modalConductButton: {
    backgroundColor: "#52c41a",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  modalCloseButton: {
    backgroundColor: "#ff4d4f",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  modalSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    gap: "10px",
  },
  modalLabel: {
    fontSize: "14px",
    fontWeight: "bold" as "bold",
    width: "150px",
  },
  modalValue: {
    fontSize: "14px",
    color: "#333",
    flex: 1,
  },
  stageSection: {
    border: "1px solid #d9d9d9",
    padding: "15px",
    borderRadius: "4px",
    marginBottom: "15px",
  },
  stageHeader: {
    fontSize: "16px",
    fontWeight: "bold" as "bold",
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    border: "1px solid #d9d9d9",
    borderRadius: "4px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s",
  },
  editDropdown: {
    padding: "8px",
    border: "1px solid #d9d9d9",
    borderRadius: "4px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s",
  },
  saveButton: {
    backgroundColor: "#1890ff",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

const InterviewSchedule: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState({ completed: false, canceled: false });
  const [dateFilter, setDateFilter] = useState("");
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null);
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [job, setJob] = useState<Job | null>(null);
  const [interviewers, setInterviewers] = useState<{ [key: string]: User }>({});
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [addInterviewModal, setAddInterviewModal] = useState(false);
  const [addRecruitmentId, setAddRecruitmentId] = useState("");
  const [addDate, setAddDate] = useState("");
  const [addTime, setAddTime] = useState("");
  const [addMode, setAddMode] = useState("ONLINE");
  const [addGoogleMeetLink, setAddGoogleMeetLink] = useState("");
  const [addAddress, setAddAddress] = useState("");
  const [recruitmentOptions, setRecruitmentOptions] = useState<RecruitmentOption[]>([]);
  const [editDateTimeModal, setEditDateTimeModal] = useState(false);
  const [editModeModal, setEditModeModal] = useState(false);
  const [editFinalStatusModal, setEditFinalStatusModal] = useState(false);
  const [editPassFailModal, setEditPassFailModal] = useState(false);
  const [conductStageModal, setConductStageModal] = useState(false);
  const [currentRound, setCurrentRound] = useState<number | null>(null);
  const [scoreEntries, setScoreEntries] = useState<{ key: string; value: string }[]>([{ key: "", value: "" }]);
  const [comments, setComments] = useState("");
  const [addStageModal, setAddStageModal] = useState(false);
  const [newStageType, setNewStageType] = useState("TECHNICAL_INTERVIEW");
  const [newStageInterviewerIds, setNewStageInterviewerIds] = useState<string[]>([]);
  const [availableInterviewers, setAvailableInterviewers] = useState<User[]>([]);
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editMode, setEditMode] = useState("ONLINE");
  const [editGoogleMeetLink, setEditGoogleMeetLink] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editFinalStatus, setEditFinalStatus] = useState("");
  const [editRound, setEditRound] = useState(1);
  const [editPassFailStatus, setEditPassFailStatus] = useState("PASSED");
  const [selectedInterviewerId, setSelectedInterviewerId] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const interviewResponse = await axios.get("http://localhost:5000/api/interviews");
        if (interviewResponse.data.success) setInterviews(interviewResponse.data.data);
        else setError("Failed to fetch interviews");

        const recruitmentResponse = await axios.get("http://localhost:5000/api/recruitment-options");
        if (recruitmentResponse.data.success) setRecruitmentOptions(recruitmentResponse.data.data);
        else setError("Failed to fetch recruitment options");

        const usersResponse = await axios.get("http://localhost:5000/api/userss");
        console.log("Available Interviewers:", usersResponse.data); // Debug log
        setAvailableInterviewers(usersResponse.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
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
      const recruitmentResponse = await axios.get(`http://localhost:5000/api/recruitments/${interview.recruitmentId}`);
      const recruitment = recruitmentResponse.data;

      const candidateResponse = await axios.get(`http://localhost:5000/api/candidates/${recruitment.candidateId}`);
      setCandidate(candidateResponse.data);

      const jobResponse = await axios.get(`http://localhost:5000/api/jobs/${recruitment.jobId}`);
      setJob(jobResponse.data);

      const allInterviewerIds: string[] = Array.from(new Set(interview.stages.flatMap((stage: Stage) => stage.interviewerIds)));
      if (allInterviewerIds.length > 0) {
        const interviewerPromises = allInterviewerIds.map((id: string) => axios.get(`http://localhost:5000/api/userss/${id}`));
        const interviewerResponses = await Promise.all(interviewerPromises);
        const interviewerMap = interviewerResponses.reduce((acc: { [key: string]: User }, res: any) => {
          acc[res.data._id] = res.data;
          return acc;
        }, {});
        console.log("Interviewers Map:", interviewerMap); // Debug log
        setInterviewers(interviewerMap);
      }
    } catch (err) {
      console.error("Error fetching additional details:", err);
    }
  };

  const handleDetailClick = (interview: Interview) => fetchInterviewById(interview._id);
  const handleAddRoundClick = () => setAddStageModal(true);

  const handleCreateStage = async () => {
    if (!selectedInterview || !newStageType || newStageInterviewerIds.length === 0) {
      alert("Please select an interview type and at least one interviewer!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/createInterviewStage", {
        interviewId: selectedInterview._id,
        round: selectedInterview.stages.length + 1,
        type: newStageType,
        interviewerIds: newStageInterviewerIds,
      });
      if (response.data.success) {
        alert("Interview stage added successfully!");
        fetchInterviewById(selectedInterview._id);
        setAddStageModal(false);
        setNewStageType("TECHNICAL_INTERVIEW");
        setNewStageInterviewerIds([]);
      } else {
        alert("Failed to add interview stage: " + response.data.message);
      }
    } catch (err) {
      console.error("Error adding interview round:", err);
      alert("An error occurred while adding the interview stage!");
    }
  };

  const handleSendEmailClick = async (id: string) => {
    try {
      const response = await axios.post("http://localhost:5000/api/send-interview-invitation", { interviewId: id });
      if (response.data.success) alert("Interview invitation sent successfully!");
      else alert("Failed to send interview invitation: " + response.data.message);
    } catch (err) {
      console.error("Error sending email:", err);
      alert("An error occurred while sending the interview invitation!");
    }
  };

  const handleConductInterviewClick = async (id: string) => {
    try {
      const response = await axios.post("http://localhost:5000/api/updateFinalStatus", {
        interviewId: id,
        finalStatus: "COMPLETED",
      });
      if (response.data.success) {
        alert("Interview status updated successfully!");
        fetchInterviewById(id);
      }
    } catch (err) {
      console.error("Error updating final status:", err);
      alert("Failed to update final status");
    }
  };

  const handleConductStageClick = async () => {
    if (!selectedInterview || !currentRound || !selectedInterviewerId) {
      alert("Please select an interviewer and ensure a round is selected!");
      return;
    }

    const stage = selectedInterview.stages.find((s) => s.round === currentRound);
    if (!stage) {
      alert("Stage not found!");
      return;
    }

    const score = scoreEntries.reduce((acc, entry) => {
      if (entry.key && entry.value) acc[entry.key] = Number(entry.value);
      return acc;
    }, {} as { [key: string]: number });

    if (Object.keys(score).length === 0) {
      alert("Please enter at least one evaluation criterion!");
      return;
    }

    const invalidScore = Object.values(score).some((value) => isNaN(value) || value < 0 || value > 10);
    if (invalidScore) {
      alert("Scores must be between 0 and 10!");
      return;
    }

    try {
      const response = await axios.put("http://localhost:5000/api/interviews/update-stage", {
        interviewId: selectedInterview._id,
        round: currentRound,
        interviewerId: selectedInterviewerId,
        score,
        comments,
      });

      if (response.data.success) {
        alert("Stage updated successfully!");
        fetchInterviewById(selectedInterview._id);
        setConductStageModal(false);
        setScoreEntries([{ key: "", value: "" }]);
        setComments("");
        setSelectedInterviewerId("");
      } else {
        alert("Failed to update stage: " + response.data.message);
      }
    } catch (err) {
      console.error("Error updating stage:", err);
      alert("An error occurred while updating the stage!");
    }
  };

  const handleAddScoreEntry = () => setScoreEntries([...scoreEntries, { key: "", value: "" }]);
  const handleRemoveScoreEntry = (index: number) => setScoreEntries(scoreEntries.filter((_, i) => i !== index));
  const handleScoreEntryChange = (index: number, field: "key" | "value", value: string) => {
    const updatedEntries = [...scoreEntries];
    updatedEntries[index][field] = value;
    setScoreEntries(updatedEntries);
  };

  const handleCancelInterview = async (id: string) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/cancel/${id}`);
      if (response.data.success) {
        alert("Interview canceled successfully!");
        fetchInterviewById(id);
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
    const formattedDate = new Date(interview.date).toLocaleDateString("en-US");
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
      new Date(interview.date).toISOString().split("T")[0] === new Date(dateFilter).toISOString().split("T")[0];

    return matchesSearch && matchesStatus && matchesDate;
  });

  const completedCount = interviews.filter((i) => i.finalStatus === "COMPLETED").length;
  const canceledCount = interviews.filter((i) => i.finalStatus === "CANCELLED").length;

  const openAddInterviewModal = () => setAddInterviewModal(true);
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
      alert("Please fill in all required fields!");
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
        alert("Interview schedule added successfully!");
        setInterviews([...interviews, response.data.data]);
        closeAddInterviewModal();
      } else {
        alert("Failed to add interview schedule!");
      }
    } catch (err) {
      console.error("Error adding interview:", err);
      alert("An error occurred while adding the interview schedule!");
    }
  };

  const openEditDateTimeModal = () => {
    if (selectedInterview) {
      setEditDate(selectedInterview.date.split("T")[0]);
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
        alert("Interview date/time updated successfully!");
        fetchInterviewById(selectedInterview._id);
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
      const response = await axios.put(`http://localhost:5000/api/update-mode/${selectedInterview._id}`, {
        mode: editMode,
        ...(editMode === "ONLINE" ? { google_meet_link: editGoogleMeetLink } : { address: editAddress }),
      });
      if (response.data.success) {
        alert("Interview mode updated successfully!");
        fetchInterviewById(selectedInterview._id);
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
        alert("Final status updated successfully!");
        fetchInterviewById(selectedInterview._id);
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
        alert("Pass/fail status updated successfully!");
        fetchInterviewById(selectedInterview._id);
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
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchBar}
          onFocus={(e) => (e.target.style.borderColor = "#1890ff")}
          onBlur={(e) => (e.target.style.borderColor = "#d9d9d9")}
        />
        <div style={styles.filterSection}>
          <div>
            <div style={styles.filterLabel}>Interview Status</div>
            <div style={styles.checkboxContainer}>
              <label>
                <input
                  type="checkbox"
                  name="completed"
                  checked={statusFilter.completed}
                  onChange={handleStatusChange}
                />
                Completed ({completedCount})
              </label>
              <label>
                <input
                  type="checkbox"
                  name="canceled"
                  checked={statusFilter.canceled}
                  onChange={handleStatusChange}
                />
                Canceled ({canceledCount})
              </label>
            </div>
          </div>
          <div>
            <div style={styles.filterLabel}>Time</div>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              style={styles.dropdown}
              onFocus={(e) => (e.target.style.borderColor = "#1890ff")}
              onBlur={(e) => (e.target.style.borderColor = "#d9d9d9")}
            >
              <option value="">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
            </select>
          </div>
        </div>
      </div>

      <div style={styles.rightSection}>
        <h1 style={styles.header}>Interview Schedule</h1>
        <button
          style={styles.button}
          onClick={openAddInterviewModal}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#40a9ff")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1890ff")}
        >
          Add Interview Schedule
        </button>
        {loading ? (
          <p style={styles.placeholderText}>Loading...</p>
        ) : error ? (
          <p style={styles.placeholderText}>{error}</p>
        ) : filteredInterviews.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Time</th>
                <th style={styles.th}>Mode</th>
                <th style={styles.th}>Location/Link</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInterviews.map((interview) => (
                <tr
                  key={interview._id}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#fafafa")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <td style={styles.td}>{new Date(interview.date).toLocaleDateString("en-US")}</td>
                  <td style={styles.td}>{interview.time}</td>
                  <td style={styles.td}>{interview.mode}</td>
                  <td style={styles.td}>
                    {interview.mode === "ONLINE" ? (
                      <a href={interview.google_meet_link} target="_blank" rel="noopener noreferrer">
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
                      Details
                    </button>
                    <button
                      style={{ ...styles.actionButton, ...styles.cancelButton }}
                      onClick={() => handleCancelInterview(interview._id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={styles.placeholderText}>No interview schedules match your criteria.</p>
        )}
      </div>

      {addInterviewModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.addModalContent}>
            <h2 style={styles.modalHeader}>Add Interview Schedule</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Recruitment</div>
              <select
                value={addRecruitmentId}
                onChange={(e) => setAddRecruitmentId(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="">Select Recruitment</option>
                {recruitmentOptions.map((option) => (
                  <option key={option.recruitmentId} value={option.recruitmentId}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Date</div>
              <input
                type="date"
                value={addDate}
                onChange={(e) => setAddDate(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Time</div>
              <input
                type="time"
                value={addTime}
                onChange={(e) => setAddTime(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Mode</div>
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
                <div style={styles.modalLabel}>Google Meet Link</div>
                <input
                  type="text"
                  value={addGoogleMeetLink}
                  onChange={(e) => setAddGoogleMeetLink(e.target.value)}
                  style={styles.input}
                  placeholder="Enter Google Meet link"
                />
              </div>
            ) : (
              <div style={styles.modalSection}>
                <div style={styles.modalLabel}>Location</div>
                <input
                  type="text"
                  value={addAddress}
                  onChange={(e) => setAddAddress(e.target.value)}
                  style={styles.input}
                  placeholder="Enter location"
                />
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                style={styles.saveButton}
                onClick={handleAddInterview}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#40a9ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1890ff")}
              >
                Add
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={closeAddInterviewModal}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedInterview && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalHeader}>Interview Details</h2>
            <div style={styles.modalButtonGroup}>
              <button
                style={styles.modalAddRoundButton}
                onClick={handleAddRoundClick}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#40a9ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1890ff")}
              >
                Add Interview Stage
              </button>
              <button
                style={styles.modalSendEmailButton}
                onClick={() => handleSendEmailClick(selectedInterview._id)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5a623")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fa8c16")}
              >
                Send Email
              </button>
              <button
                style={styles.modalConductButton}
                onClick={() => handleConductInterviewClick(selectedInterview._id)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#73d13d")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#52c41a")}
              >
                Conduct Interview
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={closeModal}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
              >
                Close
              </button>
            </div>

            {detailsLoading ? (
              <p style={styles.placeholderText}>Loading...</p>
            ) : (
              <>
                <div style={{ marginBottom: "30px" }}>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>Interview Date</div>
                    <div style={styles.modalValue}>
                      {new Date(selectedInterview.date).toLocaleDateString("en-US")}
                    </div>
                    <button
                      style={{ ...styles.actionButton, ...styles.detailButton }}
                      onClick={openEditDateTimeModal}
                    >
                      Edit
                    </button>
                  </div>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>Time</div>
                    <div style={styles.modalValue}>{selectedInterview.time}</div>
                  </div>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>Mode</div>
                    <div style={styles.modalValue}>{selectedInterview.mode}</div>
                    <button
                      style={{ ...styles.actionButton, ...styles.detailButton }}
                      onClick={openEditModeModal}
                    >
                      Edit
                    </button>
                  </div>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>
                      {selectedInterview.mode === "ONLINE" ? "Google Meet Link" : "Location"}
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
                    <div style={styles.modalLabel}>Final Status</div>
                    <div style={styles.modalValue}>{selectedInterview.finalStatus}</div>
                    <button
                      style={{ ...styles.actionButton, ...styles.detailButton }}
                      onClick={openEditFinalStatusModal}
                    >
                      Edit
                    </button>
                  </div>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>Candidate</div>
                    <div style={styles.modalValue}>{candidate ? candidate.name : "Loading..."}</div>
                  </div>
                  <div style={styles.modalSection}>
                    <div style={styles.modalLabel}>Job</div>
                    <div style={styles.modalValue}>{job ? job.title : "Loading..."}</div>
                  </div>
                </div>

                <div>
                  <div style={{ ...styles.modalLabel, marginBottom: "10px" }}>Interview Stages</div>
                  {selectedInterview.stages.length > 0 ? (
                    selectedInterview.stages.map((stage) => (
                      <div key={stage.round} style={styles.stageSection}>
                        <div style={styles.stageHeader}>
                          Stage {stage.round} - {stage.type}
                        </div>
                        <div style={styles.modalSection}>
                          <div style={styles.modalLabel}>Status</div>
                          <div style={styles.modalValue}>{stage.status}</div>
                          <button
                            style={{ ...styles.actionButton, ...styles.detailButton }}
                            onClick={() => openEditPassFailModal(stage)}
                          >
                            Edit
                          </button>
                        </div>
                        <div style={styles.modalSection}>
                          <div style={styles.modalLabel}>Interviewers</div>
                          <div style={styles.modalValue}>
                            {stage.interviewerIds.length > 0
                              ? stage.interviewerIds
                                  .map((id) => {
                                    console.log(`Interviewer ID ${id}:`, interviewers[id]); // Debug log
                                    return interviewers[id]?.name || interviewers[id]?.email || id || "Loading...";
                                  })
                                  .join(", ")
                              : "No interviewers assigned"}
                          </div>
                        </div>
                        <div style={styles.modalSection}>
                          <div style={styles.modalLabel}>Evaluations</div>
                          <div style={styles.modalValue}>
                            {stage.evaluations.length > 0 ? (
                              stage.evaluations.map((evaluation, index) => (
                                <div key={index} style={{ marginBottom: "15px" }}>
                                  <div style={{ fontSize: "14px", color: "#333" }}>
                                    <strong>Evaluator:</strong>{" "}
                                    {interviewers[evaluation.interviewerId]?.name ||
                                      interviewers[evaluation.interviewerId]?.email ||
                                      evaluation.interviewerId ||
                                      "Unknown"}
                                  </div>
                                  <div style={{ fontSize: "14px", color: "#333" }}>
                                    <strong>Scores:</strong>{" "}
                                    {Object.entries(evaluation.score).length > 0
                                      ? Object.entries(evaluation.score)
                                          .map(([key, value]) => `${key}: ${value}`)
                                          .join(", ")
                                      : "No scores yet"}
                                  </div>
                                  <div style={{ fontSize: "14px", color: "#333" }}>
                                    <strong>Comments:</strong>{" "}
                                    {evaluation.comments || "No comments yet"}
                                  </div>
                                </div>
                              ))
                            ) : (
                              "No evaluations yet"
                            )}
                          </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                          <button
                            style={styles.modalConductButton}
                            onClick={() => {
                              setCurrentRound(stage.round);
                              setConductStageModal(true);
                              setSelectedInterviewerId(stage.interviewerIds[0] || "");
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#73d13d")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#52c41a")}
                          >
                            Conduct Stage
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={styles.modalValue}>No interview stages</div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {addStageModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.addStageModalContent}>
            <h2 style={styles.modalHeader}>Add Interview Stage</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Interview Type</div>
              <select
                value={newStageType}
                onChange={(e) => setNewStageType(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="HR_SCREENING">HR Screening</option>
                <option value="TECHNICAL_INTERVIEW">Technical Interview</option>
                <option value="FINAL_INTERVIEW">Final Interview</option>
              </select>
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Interviewers</div>
              {availableInterviewers.length > 0 ? (
                <select
                  multiple
                  value={newStageInterviewerIds}
                  onChange={(e) =>
                    setNewStageInterviewerIds(Array.from(e.target.selectedOptions, (option) => option.value))
                  }
                  style={{ ...styles.editDropdown, height: "100px" }}
                >
                  {availableInterviewers.map((interviewer) => {
                    console.log("Available Interviewer:", interviewer); // Debug log
                    return (
                      <option key={interviewer._id} value={interviewer._id}>
                        {interviewer.name || interviewer.email || interviewer._id || "Unnamed Interviewer"}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <div style={styles.modalValue}>No interviewers available</div>
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                style={styles.saveButton}
                onClick={handleCreateStage}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#40a9ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1890ff")}
              >
                Add
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={() => {
                  setAddStageModal(false);
                  setNewStageType("TECHNICAL_INTERVIEW");
                  setNewStageInterviewerIds([]);
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {conductStageModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.conductModalContent}>
            <h2 style={styles.modalHeader}>Conduct Interview - Stage {currentRound}</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Interviewer</div>
              <select
                value={selectedInterviewerId}
                onChange={(e) => setSelectedInterviewerId(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="">Select Interviewer</option>
                {selectedInterview?.stages
                  .find((s) => s.round === currentRound)
                  ?.interviewerIds.map((id) => {
                    console.log(`Conduct Stage Interviewer ID ${id}:`, interviewers[id]); // Debug log
                    return (
                      <option key={id} value={id}>
                        {interviewers[id]?.name || interviewers[id]?.email || id || "Unknown"}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Scores</div>
              <div style={{ flex: 1 }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={{ ...styles.th, width: "50%" }}>Criterion</th>
                      <th style={{ ...styles.th, width: "30%" }}>Score (0-10)</th>
                      <th style={{ ...styles.th, width: "20%" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scoreEntries.map((entry, index) => (
                      <tr key={index}>
                        <td style={styles.td}>
                          <input
                            type="text"
                            value={entry.key}
                            onChange={(e) => handleScoreEntryChange(index, "key", e.target.value)}
                            style={{ ...styles.input, width: "300px" }}
                            placeholder="Enter criterion (e.g., Technical)"
                          />
                        </td>
                        <td style={styles.td}>
                          <input
                            type="number"
                            value={entry.value}
                            onChange={(e) => handleScoreEntryChange(index, "value", e.target.value)}
                            style={{ ...styles.input, width: "100px" }}
                            min="0"
                            max="10"
                            placeholder="Enter score (0-10)"
                          />
                        </td>
                        <td style={styles.td}>
                          <button
                            style={styles.cancelButton}
                            onClick={() => handleRemoveScoreEntry(index)}
                            disabled={scoreEntries.length === 1}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  style={{ ...styles.button, marginTop: "10px" }}
                  onClick={handleAddScoreEntry}
                >
                  Add Criterion
                </button>
              </div>
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Comments</div>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                style={{ ...styles.input, height: "100px", resize: "none" }}
                placeholder="Enter comments"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                style={styles.saveButton}
                onClick={handleConductStageClick}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#40a9ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1890ff")}
              >
                Save
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={() => {
                  setConductStageModal(false);
                  setScoreEntries([{ key: "", value: "" }]);
                  setComments("");
                  setSelectedInterviewerId("");
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {editDateTimeModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Edit Interview Date/Time</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Date</div>
              <input
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Time</div>
              <input
                type="time"
                value={editTime}
                onChange={(e) => setEditTime(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button style={styles.saveButton} onClick={handleUpdateDateTime}>
                Save
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={() => setEditDateTimeModal(false)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {editModeModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Edit Interview Mode</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Mode</div>
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
                <div style={styles.modalLabel}>Google Meet Link</div>
                <input
                  type="text"
                  value={editGoogleMeetLink}
                  onChange={(e) => setEditGoogleMeetLink(e.target.value)}
                  style={styles.input}
                />
              </div>
            ) : (
              <div style={styles.modalSection}>
                <div style={styles.modalLabel}>Location</div>
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
                Save
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={() => setEditModeModal(false)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {editFinalStatusModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Edit Final Status</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Status</div>
              <select
                value={editFinalStatus}
                onChange={(e) => setEditFinalStatus(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button style={styles.saveButton} onClick={handleUpdateFinalStatus}>
                Save
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={() => setEditFinalStatusModal(false)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {editPassFailModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Edit Pass/Fail Status</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Stage</div>
              <input
                type="number"
                value={editRound}
                onChange={(e) => setEditRound(Number(e.target.value))}
                style={styles.input}
                disabled
              />
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Status</div>
              <select
                value={editPassFailStatus}
                onChange={(e) => setEditPassFailStatus(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="PASSED">Passed</option>
                <option value="FAILED">Failed</option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button style={styles.saveButton} onClick={handleUpdatePassFail}>
                Save
              </button>
              <button
                style={styles.modalCloseButton}
                onClick={() => setEditPassFailModal(false)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewSchedule;