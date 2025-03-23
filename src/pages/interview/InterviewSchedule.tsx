// const styles = {
//   container: {
//     display: "flex",
//     padding: "20px",
//     gap: "20px",
//     height: "100vh",
//     backgroundColor: "#f0f2f5",
//   },
//   leftSection: {
//     width: "300px",
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//   },
//   rightSection: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//     overflowY: "auto" as "auto",
//   },
//   searchBar: {
//     width: "100%",
//     padding: "8px",
//     marginBottom: "20px",
//     border: "1px solid #d9d9d9",
//     borderRadius: "4px",
//     outline: "none",
//     transition: "border-color 0.3s",
//   },
//   filterSection: {
//     display: "flex",
//     flexDirection: "column" as "column",
//     gap: "20px",
//   },
//   filterLabel: {
//     fontSize: "14px",
//     fontWeight: "bold" as "bold",
//     marginBottom: "8px",
//   },
//   checkboxContainer: {
//     display: "flex",
//     flexDirection: "column" as "column",
//     gap: "8px",
//   },
//   dropdown: {
//     width: "100%",
//     padding: "8px",
//     border: "1px solid #d9d9d9",
//     borderRadius: "4px",
//     outline: "none",
//     transition: "border-color 0.3s",
//   },
//   header: {
//     fontSize: "24px",
//     marginBottom: "20px",
//   },
//   button: {
//     backgroundColor: "#1890ff",
//     color: "#fff",
//     border: "none",
//     padding: "8px 16px",
//     borderRadius: "4px",
//     cursor: "pointer",
//     marginBottom: "20px",
//     transition: "background-color 0.3s",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse" as "collapse",
//   },
//   th: {
//     border: "1px solid #d9d9d9",
//     padding: "12px",
//     textAlign: "left" as "left",
//     backgroundColor: "#fafafa",
//     fontWeight: "bold" as "bold",
//   },
//   td: {
//     border: "1px solid #d9d9d9",
//     padding: "12px",
//     textAlign: "left" as "left",
//   },
//   actionButton: {
//     padding: "4px 8px",
//     borderRadius: "4px",
//     border: "none",
//     cursor: "pointer",
//     marginRight: "8px",
//   },
//   detailButton: {
//     backgroundColor: "#1890ff",
//     color: "#fff",
//   },
//   cancelButton: {
//     backgroundColor: "#ff4d4f",
//     color: "#fff",
//   },
//   placeholderText: {
//     color: "#999",
//     textAlign: "center" as "center",
//     marginTop: "20px",
//   },
//   modalOverlay: {
//     position: "fixed" as "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 1000,
//   },
//   modalContent: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     width: "700px",
//     maxHeight: "80vh",
//     overflowY: "auto" as "auto",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//   },
//   addModalContent: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     width: "500px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//   },
//   addStageModalContent: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     width: "500px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//   },
//   conductModalContent: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     width: "800px", // Tăng chiều rộng từ 600px lên 800px
//     maxHeight: "80vh",
//     overflowY: "auto" as "auto",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//   },
//   editModalContent: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     width: "400px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//   },
//   modalHeader: {
//     fontSize: "20px",
//     marginBottom: "20px",
//   },
//   modalButtonGroup: {
//     display: "flex",
//     gap: "10px",
//     marginBottom: "20px",
//   },
//   modalAddRoundButton: {
//     backgroundColor: "#1890ff",
//     color: "#fff",
//     border: "none",
//     padding: "8px 16px",
//     borderRadius: "4px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   modalSendEmailButton: {
//     backgroundColor: "#fa8c16",
//     color: "#fff",
//     border: "none",
//     padding: "8px 16px",
//     borderRadius: "4px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   modalConductButton: {
//     backgroundColor: "#52c41a",
//     color: "#fff",
//     border: "none",
//     padding: "8px 16px",
//     borderRadius: "4px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   modalCloseButton: {
//     backgroundColor: "#ff4d4f",
//     color: "#fff",
//     border: "none",
//     padding: "8px 16px",
//     borderRadius: "4px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   modalSection: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "15px",
//     gap: "10px",
//   },
//   modalLabel: {
//     fontSize: "14px",
//     fontWeight: "bold" as "bold",
//     width: "150px",
//   },
//   modalValue: {
//     fontSize: "14px",
//     color: "#333",
//     flex: 1,
//   },
//   stageSection: {
//     border: "1px solid #d9d9d9",
//     padding: "15px",
//     borderRadius: "4px",
//     marginBottom: "15px",
//   },
//   stageHeader: {
//     fontSize: "16px",
//     fontWeight: "bold" as "bold",
//     marginBottom: "10px",
//   },
//   input: {
//     padding: "8px",
//     border: "1px solid #d9d9d9",
//     borderRadius: "4px",
//     width: "100%",
//     outline: "none",
//     transition: "border-color 0.3s",
//   },
//   editDropdown: {
//     padding: "8px",
//     border: "1px solid #d9d9d9",
//     borderRadius: "4px",
//     width: "100%",
//     outline: "none",
//     transition: "border-color 0.3s",
//   },
//   saveButton: {
//     backgroundColor: "#1890ff",
//     color: "#fff",
//     border: "none",
//     padding: "8px 16px",
//     borderRadius: "4px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
// };







// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Define types for the interview data
// export interface Evaluation {
//   interviewerId: string;
//   score: { [key: string]: number };
//   comments: string;
// }

// export interface Stage {
//   round: number;
//   interviewerIds: string[];
//   type: string;
//   status: string;
//   evaluations: Evaluation[];
//   date: string;
//   time: string;
// }

// export interface Interview {
//   _id: string;
//   recruitmentId: string;
//   stages: Stage[];
//   finalStatus: string;
//   date: string;
//   time: string;
//   mode: string;
//   address?: string;
//   google_meet_link?: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// export interface Candidate {
//   _id: string;
//   name: string;
// }

// export interface Job {
//   _id: string;
//   title: string;
// }

// export interface User {
//   _id: string;
//   email: string;
//   name?: string;
// }

// export interface RecruitmentOption {
//   recruitmentId: string;
//   label: string;
// }

// const InterviewSchedule: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [statusFilter, setStatusFilter] = useState({ completed: false, canceled: false });
//   const [dateFilter, setDateFilter] = useState("");
//   const [interviews, setInterviews] = useState<Interview[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null);
//   const [candidate, setCandidate] = useState<Candidate | null>(null);
//   const [job, setJob] = useState<Job | null>(null);
//   const [interviewers, setInterviewers] = useState<{ [key: string]: User }>({});
//   const [detailsLoading, setDetailsLoading] = useState(false);

//   // State for add interview modal
//   const [addInterviewModal, setAddInterviewModal] = useState(false);
//   const [addRecruitmentId, setAddRecruitmentId] = useState("");
//   const [addDate, setAddDate] = useState("");
//   const [addTime, setAddTime] = useState("");
//   const [addMode, setAddMode] = useState("ONLINE");
//   const [addGoogleMeetLink, setAddGoogleMeetLink] = useState("");
//   const [addAddress, setAddAddress] = useState("");
//   const [recruitmentOptions, setRecruitmentOptions] = useState<RecruitmentOption[]>([]);
  
//   // State for edit modals
//   const [editDateTimeModal, setEditDateTimeModal] = useState(false);
//   const [editModeModal, setEditModeModal] = useState(false);
//   const [editFinalStatusModal, setEditFinalStatusModal] = useState(false);
//   const [editPassFailModal, setEditPassFailModal] = useState(false);

//   // State for conduct stage modal
//   const [conductStageModal, setConductStageModal] = useState(false);
//   const [currentRound, setCurrentRound] = useState<number | null>(null);
//   const [selectedInterviewerId, setSelectedInterviewerId] = useState<string>("");
//   const [scoreEntries, setScoreEntries] = useState<{ key: string; value: string }[]>([{ key: "", value: "" }]);
//   const [comments, setComments] = useState("");

//   // State for add stage modal
//   const [addStageModal, setAddStageModal] = useState(false);
//   const [newStageType, setNewStageType] = useState("TECHNICAL_INTERVIEW");
//   const [newStageInterviewerIds, setNewStageInterviewerIds] = useState<string[]>([]);
//   const [availableInterviewers, setAvailableInterviewers] = useState<User[]>([]);

//   // State for form inputs in edit modals
//   const [editDate, setEditDate] = useState("");
//   const [editTime, setEditTime] = useState("");
//   const [editMode, setEditMode] = useState("ONLINE");
//   const [editGoogleMeetLink, setEditGoogleMeetLink] = useState("");
//   const [editAddress, setEditAddress] = useState("");
//   const [editFinalStatus, setEditFinalStatus] = useState("");
//   const [editRound, setEditRound] = useState(1);
//   const [editPassFailStatus, setEditPassFailStatus] = useState("PASSED");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [interviewResponse, recruitmentResponse, usersResponse] = await Promise.all([
//           axios.get("http://localhost:5000/api/interviews"),
//           axios.get("http://localhost:5000/api/recruitment-options"),
//           axios.get("http://localhost:5000/api/userss"),
//         ]);

//         if (interviewResponse.data.success) setInterviews(interviewResponse.data.data);
//         else setError("Failed to fetch interviews");

//         if (recruitmentResponse.data.success) setRecruitmentOptions(recruitmentResponse.data.data);
//         else setError("Failed to fetch recruitment options");

//         setAvailableInterviewers(usersResponse.data);
//       } catch (err) {
//         setError("Error fetching initial data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const fetchInterviewById = async (id: string) => {
//     setDetailsLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:5000/api/interviews/${id}`);
//       if (response.data.success) {
//         setSelectedInterview(response.data.data);
//         fetchAdditionalDetails(response.data.data);
//       } else {
//         setError("Failed to fetch interview details");
//       }
//     } catch (err) {
//       setError("Error fetching interview details");
//     } finally {
//       setDetailsLoading(false);
//     }
//   };

//   const fetchAdditionalDetails = async (interview: Interview) => {
//     try {
//       const recruitmentResponse = await axios.get(`http://localhost:5000/api/recruitments/${interview.recruitmentId}`);
//       const recruitment = recruitmentResponse.data;
//       if (!recruitment) throw new Error("Recruitment not found");

//       const [candidateResponse, jobResponse] = await Promise.all([
//         axios.get(`http://localhost:5000/api/candidates/${recruitment.candidateId}`),
//         axios.get(`http://localhost:5000/api/jobs/${recruitment.jobId}`),
//       ]);

//       setCandidate(candidateResponse.data || { _id: "unknown", name: "Không xác định" });
//       setJob(jobResponse.data || { _id: "unknown", title: "Không xác định" });

//       const allInterviewerIds = Array.from(new Set(interview.stages.flatMap((stage) => stage.interviewerIds)));
//       if (allInterviewerIds.length > 0) {
//         const interviewerResponses = await Promise.all(
//           allInterviewerIds.map((id) => axios.get(`http://localhost:5000/api/userss/${id}`))
//         );
//         const interviewerMap = interviewerResponses.reduce((acc, res) => {
//           acc[res.data._id] = res.data || { name: "Không xác định", email: "N/A" };
//           return acc;
//         }, {} as { [key: string]: User });
//         setInterviewers(interviewerMap);
//       } else {
//         setInterviewers({});
//       }
//     } catch (err) {
//       console.error("Error fetching additional details:", err);
//       setCandidate({ _id: "error", name: "Lỗi tải dữ liệu" });
//       setJob({ _id: "error", title: "Lỗi tải dữ liệu" });
//       setInterviewers({});
//     }
//   };

//   const handleDetailClick = (interview: Interview) => fetchInterviewById(interview._id);

//   const handleAddRoundClick = () => setAddStageModal(true);

//   const handleCreateStage = async () => {
//     if (!selectedInterview || !newStageType || newStageInterviewerIds.length === 0) {
//       alert("Vui lòng chọn loại phỏng vấn và ít nhất một người phỏng vấn!");
//       return;
//     }
//     try {
//       const response = await axios.post("http://localhost:5000/api/createInterviewStage", {
//         interviewId: selectedInterview._id,
//         round: selectedInterview.stages.length + 1,
//         type: newStageType,
//         interviewerIds: newStageInterviewerIds,
//       });
//       if (response.data.success) {
//         alert("Thêm vòng phỏng vấn thành công!");
//         fetchInterviewById(selectedInterview._id);
//         setAddStageModal(false);
//         setNewStageType("TECHNICAL_INTERVIEW");
//         setNewStageInterviewerIds([]);
//       } else {
//         alert("Thêm vòng phỏng vấn thất bại: " + response.data.message);
//       }
//     } catch (err) {
//       console.error("Error adding stage:", err);
//       alert("Đã có lỗi xảy ra khi thêm vòng phỏng vấn!");
//     }
//   };

//   const handleSendEmailClick = async (id: string) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/send-interview-invitation", { interviewId: id });
//       if (response.data.success) alert("Gửi thư mời phỏng vấn thành công!");
//       else alert("Gửi thư mời thất bại: " + response.data.message);
//     } catch (err) {
//       console.error("Error sending email:", err);
//       alert("Đã có lỗi xảy ra khi gửi thư mời!");
//     }
//   };

//   const handleConductInterviewClick = async (id: string) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/updateFinalStatus", { interviewId: id });
//       if (response.data.success) {
//         alert("Cập nhật trạng thái phỏng vấn thành công!");
//         fetchInterviewById(id);
//       } else {
//         alert("Cập nhật trạng thái thất bại: " + response.data.message);
//       }
//     } catch (err) {
//       console.error("Error updating final status:", err);
//       alert("Đã có lỗi xảy ra khi cập nhật trạng thái!");
//     }
//   };

//   const handleConductStageClick = async () => {
//     if (!selectedInterview || !currentRound || !selectedInterviewerId) {
//       alert("Vui lòng chọn vòng phỏng vấn và người phỏng vấn!");
//       return;
//     }

//     const stage = selectedInterview.stages.find((s) => s.round === currentRound);
//     if (!stage) {
//       alert("Không tìm thấy vòng phỏng vấn!");
//       return;
//     }

//     const score = scoreEntries.reduce((acc, entry) => {
//       if (entry.key && entry.value) acc[entry.key] = Number(entry.value);
//       return acc;
//     }, {} as { [key: string]: number });

//     if (Object.keys(score).length === 0) {
//       alert("Vui lòng nhập ít nhất một tiêu chí đánh giá!");
//       return;
//     }

//     const invalidScore = Object.values(score).some((value) => isNaN(value) || value < 0 || value > 10);
//     if (invalidScore) {
//       alert("Điểm số phải từ 0 đến 10!");
//       return;
//     }

//     try {
//       const response = await axios.put("http://localhost:5000/api/interviews/update-stage", {
//         interviewId: selectedInterview._id,
//         round: currentRound,
//         interviewerId: selectedInterviewerId,
//         score,
//         comments,
//       });
//       if (response.data.success) {
//         alert("Cập nhật vòng phỏng vấn thành công!");
//         fetchInterviewById(selectedInterview._id);
//         setConductStageModal(false);
//         setScoreEntries([{ key: "", value: "" }]);
//         setComments("");
//         setSelectedInterviewerId("");
//       } else {
//         alert("Cập nhật thất bại: " + response.data.message);
//       }
//     } catch (err) {
//       console.error("Error updating stage:", err);
//       alert("Đã có lỗi xảy ra khi cập nhật vòng phỏng vấn!");
//     }
//   };

//   const handleAddScoreEntry = () => setScoreEntries([...scoreEntries, { key: "", value: "" }]);
//   const handleRemoveScoreEntry = (index: number) => setScoreEntries(scoreEntries.filter((_, i) => i !== index));
//   const handleScoreEntryChange = (index: number, field: "key" | "value", value: string) => {
//     const updatedEntries = [...scoreEntries];
//     updatedEntries[index][field] = value;
//     setScoreEntries(updatedEntries);
//   };

//   const handleCancelInterview = async (id: string) => {
//     try {
//       const response = await axios.put(`http://localhost:5000/api/cancel/${id}`);
//       if (response.data.success) {
//         alert("Hủy phỏng vấn thành công!");
//         fetchInterviewById(id);
//       } else {
//         alert("Hủy thất bại: " + response.data.message);
//       }
//     } catch (err) {
//       console.error("Error canceling interview:", err);
//       alert("Đã có lỗi xảy ra khi hủy phỏng vấn!");
//     }
//   };

//   const closeModal = () => {
//     setSelectedInterview(null);
//     setCandidate(null);
//     setJob(null);
//     setInterviewers({});
//   };

//   const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = e.target;
//     setStatusFilter((prev) => ({ ...prev, [name]: checked }));
//   };

//   const filteredInterviews = interviews.filter((interview) => {
//     const formattedDate = new Date(interview.date).toLocaleDateString("vi-VN");
//     const matchesSearch =
//       searchQuery === "" ||
//       interview.mode.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       formattedDate.includes(searchQuery);

//     const matchesStatus =
//       (statusFilter.completed && interview.finalStatus === "COMPLETED") ||
//       (statusFilter.canceled && interview.finalStatus === "CANCELLED") ||
//       (!statusFilter.completed && !statusFilter.canceled);

//     const matchesDate =
//       dateFilter === "" ||
//       new Date(interview.date).toISOString().split("T")[0] === new Date(dateFilter).toISOString().split("T")[0];

//     return matchesSearch && matchesStatus && matchesDate;
//   });

//   const completedCount = interviews.filter((i) => i.finalStatus === "COMPLETED").length;
//   const canceledCount = interviews.filter((i) => i.finalStatus === "CANCELLED").length;

//   const openAddInterviewModal = () => setAddInterviewModal(true);
//   const closeAddInterviewModal = () => {
//     setAddInterviewModal(false);
//     setAddRecruitmentId("");
//     setAddDate("");
//     setAddTime("");
//     setAddMode("ONLINE");
//     setAddGoogleMeetLink("");
//     setAddAddress("");
//   };

//   const handleAddInterview = async () => {
//     if (!addRecruitmentId || !addDate || !addTime) {
//       alert("Vui lòng điền đầy đủ các trường bắt buộc!");
//       return;
//     }
//     try {
//       const interviewData = {
//         recruitmentId: addRecruitmentId,
//         date: new Date(addDate).toISOString(),
//         time: addTime,
//         mode: addMode,
//         ...(addMode === "ONLINE" ? { google_meet_link: addGoogleMeetLink } : { address: addAddress }),
//       };
//       const response = await axios.post("http://localhost:5000/api/createInterviews", interviewData);
//       if (response.data.success) {
//         alert("Thêm lịch phỏng vấn thành công!");
//         setInterviews([...interviews, response.data.data]);
//         closeAddInterviewModal();
//       } else {
//         alert("Thêm thất bại: " + response.data.message);
//       }
//     } catch (err) {
//       console.error("Error adding interview:", err);
//       alert("Đã có lỗi xảy ra khi thêm lịch phỏng vấn!");
//     }
//   };

//   const openEditDateTimeModal = () => {
//     if (selectedInterview) {
//       setEditDate(selectedInterview.date.split("T")[0]);
//       setEditTime(selectedInterview.time);
//       setEditDateTimeModal(true);
//     }
//   };

//   const openEditModeModal = () => {
//     if (selectedInterview) {
//       setEditMode(selectedInterview.mode);
//       setEditGoogleMeetLink(selectedInterview.google_meet_link || "");
//       setEditAddress(selectedInterview.address || "");
//       setEditModeModal(true);
//     }
//   };

//   const openEditFinalStatusModal = () => {
//     if (selectedInterview) {
//       setEditFinalStatus(selectedInterview.finalStatus);
//       setEditFinalStatusModal(true);
//     }
//   };

//   const openEditPassFailModal = (stage: Stage) => {
//     setEditRound(stage.round);
//     setEditPassFailStatus(stage.status);
//     setEditPassFailModal(true);
//   };

//   const handleUpdateDateTime = async () => {
//     if (!selectedInterview) return;
//     try {
//       const response = await axios.post("http://localhost:5000/api/updateInterviewDateTime", {
//         interviewId: selectedInterview._id,
//         date: editDate,
//         time: editTime,
//       });
//       if (response.data.success) {
//         alert("Cập nhật thời gian thành công!");
//         fetchInterviewById(selectedInterview._id);
//         setEditDateTimeModal(false);
//       } else {
//         alert("Cập nhật thất bại: " + response.data.message);
//       }
//     } catch (err) {
//       console.error("Error updating date/time:", err);
//       alert("Đã có lỗi xảy ra khi cập nhật thời gian!");
//     }
//   };

//   const handleUpdateMode = async () => {
//     if (!selectedInterview) return;
//     try {
//       const response = await axios.put(`http://localhost:5000/api/update-mode/${selectedInterview._id}`, {
//         mode: editMode,
//         ...(editMode === "ONLINE" ? { google_meet_link: editGoogleMeetLink } : { address: editAddress }),
//       });
//       if (response.data.success) {
//         alert("Cập nhật hình thức thành công!");
//         fetchInterviewById(selectedInterview._id);
//         setEditModeModal(false);
//       } else {
//         alert("Cập nhật thất bại: " + response.data.message);
//       }
//     } catch (err) {
//       console.error("Error updating mode:", err);
//       alert("Đã có lỗi xảy ra khi cập nhật hình thức!");
//     }
//   };

//   const handleUpdateFinalStatus = async () => {
//     if (!selectedInterview) return;
//     try {
//       const response = await axios.post("http://localhost:5000/api/updateFinalStatus", {
//         interviewId: selectedInterview._id,
//         finalStatus: editFinalStatus,
//       });
//       if (response.data.success) {
//         alert("Cập nhật trạng thái cuối cùng thành công!");
//         fetchInterviewById(selectedInterview._id);
//         setEditFinalStatusModal(false);
//       } else {
//         alert("Cập nhật thất bại: " + response.data.message);
//       }
//     } catch (err) {
//       console.error("Error updating final status:", err);
//       alert("Đã có lỗi xảy ra khi cập nhật trạng thái!");
//     }
//   };

//   const handleUpdatePassFail = async () => {
//     if (!selectedInterview) return;
//     try {
//       const response = await axios.put("http://localhost:5000/api/update-pass-fail", {
//         interviewId: selectedInterview._id,
//         round: editRound,
//         status: editPassFailStatus,
//       });
//       if (response.data.success) {
//         alert("Cập nhật trạng thái pass/fail thành công!");
//         fetchInterviewById(selectedInterview._id);
//         setEditPassFailModal(false);
//       } else {
//         alert("Cập nhật thất bại: " + response.data.message);
//       }
//     } catch (err) {
//       console.error("Error updating pass/fail:", err);
//       alert("Đã có lỗi xảy ra khi cập nhật trạng thái!");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.leftSection}>
//         <input
//           type="text"
//           placeholder="Tìm kiếm"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           style={styles.searchBar}
//           onFocus={(e) => (e.target.style.borderColor = "#1890ff")}
//           onBlur={(e) => (e.target.style.borderColor = "#d9d9d9")}
//         />
//         <div style={styles.filterSection}>
//           <div>
//             <div style={styles.filterLabel}>Trạng thái phỏng vấn</div>
//             <div style={styles.checkboxContainer}>
//               <label>
//                 <input
//                   type="checkbox"
//                   name="completed"
//                   checked={statusFilter.completed}
//                   onChange={handleStatusChange}
//                 />
//                 Đã hoàn thành ({completedCount})
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   name="canceled"
//                   checked={statusFilter.canceled}
//                   onChange={handleStatusChange}
//                 />
//                 Đã hủy ({canceledCount})
//               </label>
//             </div>
//           </div>
//           <div>
//             <div style={styles.filterLabel}>Thời gian</div>
//             <select
//               value={dateFilter}
//               onChange={(e) => setDateFilter(e.target.value)}
//               style={styles.dropdown}
//               onFocus={(e) => (e.target.style.borderColor = "#1890ff")}
//               onBlur={(e) => (e.target.style.borderColor = "#d9d9d9")}
//             >
//               <option value="">Hôm nay</option>
//               <option value="yesterday">Hôm qua</option>
//               <option value="this-week">Tuần này</option>
//               <option value="this-month">Tháng này</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div style={styles.rightSection}>
//         <h1 style={styles.header}>Lên lịch phỏng vấn</h1>
//         <button
//           style={styles.button}
//           onClick={openAddInterviewModal}
//           onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#40a9ff")}
//           onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1890ff")}
//         >
//           Thêm lịch phỏng vấn
//         </button>
//         {loading ? (
//           <p style={styles.placeholderText}>Đang tải...</p>
//         ) : error ? (
//           <p style={styles.placeholderText}>{error}</p>
//         ) : filteredInterviews.length > 0 ? (
//           <table style={styles.table}>
//             <thead>
//               <tr>
//                 <th style={styles.th}>Ngày</th>
//                 <th style={styles.th}>Thời gian</th>
//                 <th style={styles.th}>Hình thức</th>
//                 <th style={styles.th}>Địa điểm/Link</th>
//                 <th style={styles.th}>Trạng thái</th>
//                 <th style={styles.th}>Hành động</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredInterviews.map((interview) => (
//                 <tr
//                   key={interview._id}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#fafafa")}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
//                 >
//                   <td style={styles.td}>{new Date(interview.date).toLocaleDateString("vi-VN")}</td>
//                   <td style={styles.td}>{interview.time}</td>
//                   <td style={styles.td}>{interview.mode}</td>
//                   <td style={styles.td}>
//                     {interview.mode === "ONLINE" ? (
//                       <a href={interview.google_meet_link} target="_blank" rel="noopener noreferrer">
//                         {interview.google_meet_link}
//                       </a>
//                     ) : (
//                       interview.address || "N/A"
//                     )}
//                   </td>
//                   <td style={styles.td}>{interview.finalStatus}</td>
//                   <td style={styles.td}>
//                     <button
//                       style={{ ...styles.actionButton, ...styles.detailButton }}
//                       onClick={() => handleDetailClick(interview)}
//                     >
//                       Chi tiết
//                     </button>
//                     <button
//                       style={{ ...styles.actionButton, ...styles.cancelButton }}
//                       onClick={() => handleCancelInterview(interview._id)}
//                     >
//                       Hủy
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p style={styles.placeholderText}>Không tìm thấy lịch phỏng vấn nào.</p>
//         )}
//       </div>

//       {/* Add Interview Modal */}
//       {addInterviewModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.addModalContent}>
//             <h2 style={styles.modalHeader}>Thêm Lịch Phỏng Vấn</h2>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Recruitment</div>
//               <select
//                 value={addRecruitmentId}
//                 onChange={(e) => setAddRecruitmentId(e.target.value)}
//                 style={styles.editDropdown}
//               >
//                 <option value="">Chọn Recruitment</option>
//                 {recruitmentOptions.map((option) => (
//                   <option key={option.recruitmentId} value={option.recruitmentId}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Ngày</div>
//               <input
//                 type="date"
//                 value={addDate}
//                 onChange={(e) => setAddDate(e.target.value)}
//                 style={styles.input}
//               />
//             </div>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Thời gian</div>
//               <input
//                 type="time"
//                 value={addTime}
//                 onChange={(e) => setAddTime(e.target.value)}
//                 style={styles.input}
//               />
//             </div>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Hình thức</div>
//               <select
//                 value={addMode}
//                 onChange={(e) => setAddMode(e.target.value)}
//                 style={styles.editDropdown}
//               >
//                 <option value="ONLINE">Online</option>
//                 <option value="OFFLINE">Offline</option>
//               </select>
//             </div>
//             {addMode === "ONLINE" ? (
//               <div style={styles.modalSection}>
//                 <div style={styles.modalLabel}>Link Google Meet</div>
//                 <input
//                   type="text"
//                   value={addGoogleMeetLink}
//                   onChange={(e) => setAddGoogleMeetLink(e.target.value)}
//                   style={styles.input}
//                   placeholder="Nhập link Google Meet"
//                 />
//               </div>
//             ) : (
//               <div style={styles.modalSection}>
//                 <div style={styles.modalLabel}>Địa điểm</div>
//                 <input
//                   type="text"
//                   value={addAddress}
//                   onChange={(e) => setAddAddress(e.target.value)}
//                   style={styles.input}
//                   placeholder="Nhập địa điểm"
//                 />
//               </div>
//             )}
//             <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
//               <button
//                 style={styles.saveButton}
//                 onClick={handleAddInterview}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#40a9ff")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1890ff")}
//               >
//                 Thêm
//               </button>
//               <button
//                 style={styles.modalCloseButton}
//                 onClick={closeAddInterviewModal}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
//               >
//                 Đóng
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Modal for Interview Details */}
//       {selectedInterview && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <h2 style={styles.modalHeader}>Chi tiết cuộc phỏng vấn</h2>
//             <div style={styles.modalButtonGroup}>
//               <button
//                 style={styles.modalAddRoundButton}
//                 onClick={handleAddRoundClick}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#40a9ff")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1890ff")}
//               >
//                 Thêm vòng phỏng vấn
//               </button>
//               <button
//                 style={styles.modalSendEmailButton}
//                 onClick={() => handleSendEmailClick(selectedInterview._id)}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5a623")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fa8c16")}
//               >
//                 Gửi Email
//               </button>
//               <button
//                 style={styles.modalConductButton}
//                 onClick={() => handleConductInterviewClick(selectedInterview._id)}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#73d13d")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#52c41a")}
//               >
//                 Tiến hành phỏng vấn
//               </button>
//               <button
//                 style={styles.modalCloseButton}
//                 onClick={closeModal}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
//               >
//                 Đóng
//               </button>
//             </div>
//             {detailsLoading ? (
//               <p style={styles.placeholderText}>Đang tải...</p>
//             ) : (
//               <>
//                 <div style={{ marginBottom: "30px" }}>
//                   <div style={styles.modalSection}>
//                     <div style={styles.modalLabel}>Ngày phỏng vấn</div>
//                     <div style={styles.modalValue}>{new Date(selectedInterview.date).toLocaleDateString("vi-VN")}</div>
//                     <button style={{ ...styles.actionButton, ...styles.detailButton }} onClick={openEditDateTimeModal}>
//                       Sửa
//                     </button>
//                   </div>
//                   <div style={styles.modalSection}>
//                     <div style={styles.modalLabel}>Thời gian</div>
//                     <div style={styles.modalValue}>{selectedInterview.time}</div>
//                   </div>
//                   <div style={styles.modalSection}>
//                     <div style={styles.modalLabel}>Hình thức</div>
//                     <div style={styles.modalValue}>{selectedInterview.mode}</div>
//                     <button style={{ ...styles.actionButton, ...styles.detailButton }} onClick={openEditModeModal}>
//                       Sửa
//                     </button>
//                   </div>
//                   <div style={styles.modalSection}>
//                     <div style={styles.modalLabel}>{selectedInterview.mode === "ONLINE" ? "Link Google Meet" : "Địa điểm"}</div>
//                     <div style={styles.modalValue}>
//                       {selectedInterview.mode === "ONLINE" ? (
//                         <a href={selectedInterview.google_meet_link} target="_blank" rel="noopener noreferrer" style={{ color: "#1890ff" }}>
//                           {selectedInterview.google_meet_link}
//                         </a>
//                       ) : (
//                         selectedInterview.address || "N/A"
//                       )}
//                     </div>
//                   </div>
//                   <div style={styles.modalSection}>
//                     <div style={styles.modalLabel}>Trạng thái cuối cùng</div>
//                     <div style={styles.modalValue}>{selectedInterview.finalStatus}</div>
//                     <button style={{ ...styles.actionButton, ...styles.detailButton }} onClick={openEditFinalStatusModal}>
//                       Sửa
//                     </button>
//                   </div>
//                   <div style={styles.modalSection}>
//                     <div style={styles.modalLabel}>Ứng viên</div>
//                     <div style={styles.modalValue}>{candidate?.name || "Không xác định"}</div>
//                   </div>
//                   <div style={styles.modalSection}>
//                     <div style={styles.modalLabel}>Công việc</div>
//                     <div style={styles.modalValue}>{job?.title || "Không xác định"}</div>
//                   </div>
//                 </div>
//                 <div>
//                   <div style={{ ...styles.modalLabel, marginBottom: "10px" }}>Các vòng phỏng vấn</div>
//                   {selectedInterview.stages.length > 0 ? (
//                     selectedInterview.stages.map((stage) => (
//                       <div key={stage.round} style={styles.stageSection}>
//                         <div style={styles.stageHeader}>Vòng {stage.round} - {stage.type}</div>
//                         <div style={styles.modalSection}>
//                           <div style={styles.modalLabel}>Trạng thái</div>
//                           <div style={styles.modalValue}>{stage.status}</div>
//                           <button
//                             style={{ ...styles.actionButton, ...styles.detailButton }}
//                             onClick={() => openEditPassFailModal(stage)}
//                           >
//                             Sửa
//                           </button>
//                         </div>
//                         <div style={styles.modalSection}>
//                           <div style={styles.modalLabel}>Người phỏng vấn</div>
//                           <div style={styles.modalValue}>
//                             {stage.interviewerIds.map((id) => interviewers[id]?.name || "Không xác định").join(", ")}
//                           </div>
//                         </div>
//                         <div style={styles.modalSection}>
//                           <div style={styles.modalLabel}>Đánh giá</div>
//                           <div style={styles.modalValue}>
//                             {stage.evaluations.length > 0 ? (
//                               stage.evaluations.map((evaluation, index) => (
//                                 <div key={index} style={{ marginBottom: "15px" }}>
//                                   <div style={{ fontSize: "14px", color: "#333" }}>
//                                     <strong>Người đánh giá:</strong>{" "}
//                                     {interviewers[evaluation.interviewerId]?.name || evaluation.interviewerId}
//                                   </div>
//                                   <div style={{ fontSize: "14px", color: "#333" }}>
//                                     <strong>Điểm số:</strong>{" "}
//                                     {Object.entries(evaluation.score).length > 0
//                                       ? Object.entries(evaluation.score)
//                                           .map(([key, value]) => `${key}: ${value}`)
//                                           .join(", ")
//                                       : "Chưa có điểm"}
//                                   </div>
//                                   <div style={{ fontSize: "14px", color: "#333" }}>
//                                     <strong>Nhận xét:</strong> {evaluation.comments || "Chưa có nhận xét"}
//                                   </div>
//                                 </div>
//                               ))
//                             ) : (
//                               "Chưa có đánh giá"
//                             )}
//                           </div>
//                         </div>
//                         <div style={{ display: "flex", justifyContent: "flex-end" }}>
//                           <button
//                             style={styles.modalConductButton}
//                             onClick={() => {
//                               setCurrentRound(stage.round);
//                               setConductStageModal(true);
//                             }}
//                             onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#73d13d")}
//                             onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#52c41a")}
//                           >
//                             Tiến hành phỏng vấn
//                           </button>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <div style={styles.modalValue}>Không có vòng phỏng vấn</div>
//                   )}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Add Stage Modal */}
//       {addStageModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.addStageModalContent}>
//             <h2 style={styles.modalHeader}>Thêm Vòng Phỏng Vấn</h2>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Loại phỏng vấn</div>
//               <select
//                 value={newStageType}
//                 onChange={(e) => setNewStageType(e.target.value)}
//                 style={styles.editDropdown}
//               >
//                 <option value="HR_SCREENING">Sàng lọc HR</option>
//                 <option value="TECHNICAL_INTERVIEW">Phỏng vấn kỹ thuật</option>
//                 <option value="FINAL_INTERVIEW">Phỏng vấn cuối</option>
//               </select>
//             </div>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Người phỏng vấn</div>
//               {availableInterviewers.length > 0 ? (
//                 <select
//                   multiple
//                   value={newStageInterviewerIds}
//                   onChange={(e) =>
//                     setNewStageInterviewerIds(Array.from(e.target.selectedOptions, (option) => option.value))
//                   }
//                   style={{ ...styles.editDropdown, height: "100px" }}
//                 >
//                   {availableInterviewers.map((interviewer) => (
//                     <option key={interviewer._id} value={interviewer._id}>
//                       {interviewer.email}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <div style={styles.modalValue}>Không có người phỏng vấn nào</div>
//               )}
//             </div>
//             <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
//               <button
//                 style={styles.saveButton}
//                 onClick={handleCreateStage}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#40a9ff")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1890ff")}
//               >
//                 Thêm
//               </button>
//               <button
//                 style={styles.modalCloseButton}
//                 onClick={() => {
//                   setAddStageModal(false);
//                   setNewStageType("TECHNICAL_INTERVIEW");
//                   setNewStageInterviewerIds([]);
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
//               >
//                 Đóng
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Conduct Stage Modal */}
//       {conductStageModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.conductModalContent}>
//             <h2 style={styles.modalHeader}>Tiến hành phỏng vấn - Vòng {currentRound}</h2>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Người phỏng vấn</div>
//               <select
//                 value={selectedInterviewerId}
//                 onChange={(e) => setSelectedInterviewerId(e.target.value)}
//                 style={styles.editDropdown}
//               >
//                 <option value="">Chọn người phỏng vấn</option>
//                 {selectedInterview?.stages
//                   .find((s) => s.round === currentRound)
//                   ?.interviewerIds.map((id) => (
//                     <option key={id} value={id}>
//                       {interviewers[id]?.name || id}
//                     </option>
//                   ))}
//               </select>
//             </div>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Điểm số</div>
//               <div style={{ flex: 1 }}>
//                 <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                   <thead>
//                     <tr>
//                       <th style={{ ...styles.th, width: "50%" }}>Tiêu chí</th>
//                       <th style={{ ...styles.th, width: "30%" }}>Điểm (0-10)</th>
//                       <th style={{ ...styles.th, width: "20%" }}>Hành động</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {scoreEntries.map((entry, index) => (
//                       <tr key={index}>
//                         <td style={styles.td}>
//                           <input
//                             type="text"
//                             value={entry.key}
//                             onChange={(e) => handleScoreEntryChange(index, "key", e.target.value)}
//                             style={{ ...styles.input, width: "300px" }}
//                             placeholder="Nhập tiêu chí (VD: Technical)"
//                           />
//                         </td>
//                         <td style={styles.td}>
//                           <input
//                             type="number"
//                             value={entry.value}
//                             onChange={(e) => handleScoreEntryChange(index, "value", e.target.value)}
//                             style={{ ...styles.input, width: "100px" }}
//                             min="0"
//                             max="10"
//                             placeholder="Nhập điểm (0-10)"
//                           />
//                         </td>
//                         <td style={styles.td}>
//                           <button
//                             style={styles.cancelButton}
//                             onClick={() => handleRemoveScoreEntry(index)}
//                             disabled={scoreEntries.length === 1}
//                           >
//                             Xóa
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 <button style={{ ...styles.button, marginTop: "10px" }} onClick={handleAddScoreEntry}>
//                   Thêm tiêu chí
//                 </button>
//               </div>
//             </div>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Nhận xét</div>
//               <textarea
//                 value={comments}
//                 onChange={(e) => setComments(e.target.value)}
//                 style={{ ...styles.input, height: "100px", resize: "none" }}
//                 placeholder="Nhập nhận xét"
//               />
//             </div>
//             <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
//               <button
//                 style={styles.saveButton}
//                 onClick={handleConductStageClick}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#40a9ff")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1890ff")}
//               >
//                 Lưu
//               </button>
//               <button
//                 style={styles.modalCloseButton}
//                 onClick={() => {
//                   setConductStageModal(false);
//                   setScoreEntries([{ key: "", value: "" }]);
//                   setComments("");
//                   setSelectedInterviewerId("");
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
//               >
//                 Đóng
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Date/Time Modal */}
//       {editDateTimeModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.editModalContent}>
//             <h2 style={styles.modalHeader}>Chỉnh Sửa Thời Gian Phỏng Vấn</h2>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Ngày</div>
//               <input
//                 type="date"
//                 value={editDate}
//                 onChange={(e) => setEditDate(e.target.value)}
//                 style={styles.input}
//               />
//             </div>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Thời gian</div>
//               <input
//                 type="time"
//                 value={editTime}
//                 onChange={(e) => setEditTime(e.target.value)}
//                 style={styles.input}
//               />
//             </div>
//             <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
//               <button style={styles.saveButton} onClick={handleUpdateDateTime}>
//                 Lưu
//               </button>
//               <button
//                 style={styles.modalCloseButton}
//                 onClick={() => setEditDateTimeModal(false)}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
//               >
//                 Đóng
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Mode Modal */}
//       {editModeModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.editModalContent}>
//             <h2 style={styles.modalHeader}>Chỉnh Sửa Hình Thức Phỏng Vấn</h2>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Hình thức</div>
//               <select
//                 value={editMode}
//                 onChange={(e) => setEditMode(e.target.value)}
//                 style={styles.editDropdown}
//               >
//                 <option value="ONLINE">Online</option>
//                 <option value="OFFLINE">Offline</option>
//               </select>
//             </div>
//             {editMode === "ONLINE" ? (
//               <div style={styles.modalSection}>
//                 <div style={styles.modalLabel}>Link Google Meet</div>
//                 <input
//                   type="text"
//                   value={editGoogleMeetLink}
//                   onChange={(e) => setEditGoogleMeetLink(e.target.value)}
//                   style={styles.input}
//                 />
//               </div>
//             ) : (
//               <div style={styles.modalSection}>
//                 <div style={styles.modalLabel}>Địa điểm</div>
//                 <input
//                   type="text"
//                   value={editAddress}
//                   onChange={(e) => setEditAddress(e.target.value)}
//                   style={styles.input}
//                 />
//               </div>
//             )}
//             <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
//               <button style={styles.saveButton} onClick={handleUpdateMode}>
//                 Lưu
//               </button>
//               <button
//                 style={styles.modalCloseButton}
//                 onClick={() => setEditModeModal(false)}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
//               >
//                 Đóng
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Final Status Modal */}
//       {editFinalStatusModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.editModalContent}>
//             <h2 style={styles.modalHeader}>Chỉnh Sửa Trạng Thái Cuối Cùng</h2>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Trạng thái</div>
//               <select
//                 value={editFinalStatus}
//                 onChange={(e) => setEditFinalStatus(e.target.value)}
//                 style={styles.editDropdown}
//               >
//                 <option value="IN_PROGRESS">Đang tiến hành</option>
//                 <option value="COMPLETED">Hoàn thành</option>
//                 <option value="CANCELLED">Đã hủy</option>
//               </select>
//             </div>
//             <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
//               <button style={styles.saveButton} onClick={handleUpdateFinalStatus}>
//                 Lưu
//               </button>
//               <button
//                 style={styles.modalCloseButton}
//                 onClick={() => setEditFinalStatusModal(false)}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
//               >
//                 Đóng
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Pass/Fail Modal */}
//       {editPassFailModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.editModalContent}>
//             <h2 style={styles.modalHeader}>Chỉnh Sửa Trạng Thái Pass/Fail</h2>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Vòng</div>
//               <input
//                 type="number"
//                 value={editRound}
//                 onChange={(e) => setEditRound(Number(e.target.value))}
//                 style={styles.input}
//                 disabled
//               />
//             </div>
//             <div style={styles.modalSection}>
//               <div style={styles.modalLabel}>Trạng thái</div>
//               <select
//                 value={editPassFailStatus}
//                 onChange={(e) => setEditPassFailStatus(e.target.value)}
//                 style={styles.editDropdown}
//               >
//                 <option value="PASSED">Đạt</option>
//                 <option value="FAILED">Không đạt</option>
//               </select>
//             </div>
//             <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
//               <button style={styles.saveButton} onClick={handleUpdatePassFail}>
//                 Lưu
//               </button>
//               <button
//                 style={styles.modalCloseButton}
//                 onClick={() => setEditPassFailModal(false)}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff7875")}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4d4f")}
//               >
//                 Đóng
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InterviewSchedule;


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
    width: "800px", // Tăng chiều rộng từ 600px lên 800px
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

const InterviewSchedule: React.FC = () => {
  // State for filters and search
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState({ completed: false, canceled: false });
  const [dateFilter, setDateFilter] = useState("");

  // State for interviews and details
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null);
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [job, setJob] = useState<Job | null>(null);
  const [interviewers, setInterviewers] = useState<{ [key: string]: User }>({});
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false); // Added for loading state during updates

  // State for modals
  const [addInterviewModal, setAddInterviewModal] = useState(false);
  const [editDateTimeModal, setEditDateTimeModal] = useState(false);
  const [editModeModal, setEditModeModal] = useState(false);
  const [editFinalStatusModal, setEditFinalStatusModal] = useState(false);
  const [editPassFailModal, setEditPassFailModal] = useState(false);
  const [addStageModal, setAddStageModal] = useState(false);
  const [conductStageModal, setConductStageModal] = useState(false);

  // State for form inputs
  const [addRecruitmentId, setAddRecruitmentId] = useState("");
  const [addDate, setAddDate] = useState("");
  const [addTime, setAddTime] = useState("");
  const [addMode, setAddMode] = useState("ONLINE");
  const [addGoogleMeetLink, setAddGoogleMeetLink] = useState("");
  const [addAddress, setAddAddress] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editMode, setEditMode] = useState("ONLINE");
  const [editGoogleMeetLink, setEditGoogleMeetLink] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editFinalStatus, setEditFinalStatus] = useState("");
  const [editRound, setEditRound] = useState<number | null>(null);
  const [editPassFailStatus, setEditPassFailStatus] = useState("PASSED");

  // State for recruitment options and interviewers
  const [recruitmentOptions, setRecruitmentOptions] = useState<RecruitmentOption[]>([]);
  const [availableInterviewers, setAvailableInterviewers] = useState<User[]>([]);

  // State for stage creation and evaluation
  const [newStageType, setNewStageType] = useState("TECHNICAL_INTERVIEW");
  const [newStageInterviewerIds, setNewStageInterviewerIds] = useState<string[]>([]);
  const [currentRound, setCurrentRound] = useState<number | null>(null);
  const [selectedInterviewerId, setSelectedInterviewerId] = useState<string>("");
  const [scoreEntries, setScoreEntries] = useState<{ key: string; value: string }[]>([
    { key: "", value: "" },
  ]);
  const [comments, setComments] = useState("");

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [interviewRes, recruitmentRes, usersRes] = await Promise.all([
          axios.get("http://localhost:5000/api/interviews"),
          axios.get("http://localhost:5000/api/recruitment-options"),
          axios.get("http://localhost:5000/api/userss"),
        ]);

        if (interviewRes.data.success) setInterviews(interviewRes.data.data);
        if (recruitmentRes.data.success) setRecruitmentOptions(recruitmentRes.data.data);
        setAvailableInterviewers(usersRes.data);
      } catch (err) {
        setError("Lỗi khi tải dữ liệu ban đầu");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch interview details
  const fetchInterviewDetails = async (id: string) => {
    setDetailsLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/interviews/${id}`);
      if (response.data.success) {
        setSelectedInterview(response.data.data);
        await fetchAdditionalDetails(response.data.data);
      }
    } catch (err) {
      console.error("Lỗi khi tải chi tiết phỏng vấn:", err);
    } finally {
      setDetailsLoading(false);
    }
  };

  // Fetch additional details (candidate, job, interviewers)
  const fetchAdditionalDetails = async (interview: Interview) => {
    try {
      const recruitmentRes = await axios.get(
        `http://localhost:5000/api/recruitments/${interview.recruitmentId}`
      );
      const recruitment = recruitmentRes.data;

      const [candidateRes, jobRes] = await Promise.all([
        axios.get(`http://localhost:5000/api/candidates/${recruitment.candidateId}`),
        axios.get(`http://localhost:5000/api/jobs/${recruitment.jobId}`),
      ]);

      setCandidate(candidateRes.data);
      setJob(jobRes.data);

      const interviewerIds = Array.from(new Set(interview.stages.flatMap((s) => s.interviewerIds)));
      if (interviewerIds.length) {
        const interviewerResponses = await Promise.all(
          interviewerIds.map((id) => axios.get(`http://localhost:5000/api/users/${id}`))
        );
        setInterviewers(
          interviewerResponses.reduce((acc, res) => {
            acc[res.data._id] = res.data;
            return acc;
          }, {} as { [key: string]: User })
        );
      }
    } catch (err) {
      console.error("Lỗi khi tải thông tin bổ sung:", err);
    }
  };

  // Handle actions
  const handleAddInterview = async () => {
    if (!addRecruitmentId || !addDate || !addTime) {
      alert("Vui lòng điền đầy đủ các trường bắt buộc!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/createInterviews", {
        recruitmentId: addRecruitmentId,
        date: new Date(addDate).toISOString(),
        time: addTime,
        mode: addMode,
        ...(addMode === "ONLINE" ? { google_meet_link: addGoogleMeetLink } : { address: addAddress }),
      });
      if (response.data.success) {
        setInterviews([...interviews, response.data.data]);
        setAddInterviewModal(false);
        resetAddInterviewForm();
        alert("Thêm lịch phỏng vấn thành công!");
      }
    } catch (err) {
      console.error("Lỗi khi thêm phỏng vấn:", err);
      alert("Không thể thêm lịch phỏng vấn!");
    }
  };

  const handleCreateStage = async () => {
    if (!selectedInterview || !newStageType || !newStageInterviewerIds.length) {
      alert("Vui lòng chọn loại vòng và ít nhất một người phỏng vấn!");
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
        fetchInterviewDetails(selectedInterview._id);
        setAddStageModal(false);
        resetStageForm();
        alert("Thêm vòng phỏng vấn thành công!");
      }
    } catch (err) {
      console.error("Lỗi khi tạo vòng phỏng vấn:", err);
      alert("Không thể thêm vòng phỏng vấn!");
    }
  };

  const handleConductStage = async () => {
    if (!selectedInterview || !currentRound || !selectedInterviewerId) {
      alert("Vui lòng chọn người đánh giá và vòng phỏng vấn!");
      return;
    }
    const score = scoreEntries.reduce((acc, entry) => {
      if (entry.key && entry.value) acc[entry.key] = Number(entry.value);
      return acc;
    }, {} as { [key: string]: number });

    if (!Object.keys(score).length) {
      alert("Vui lòng thêm ít nhất một tiêu chí đánh giá!");
      return;
    }

    if (Object.values(score).some((v) => v < 0 || v > 10)) {
      alert("Điểm số phải từ 0 đến 10!");
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
        fetchInterviewDetails(selectedInterview._id);
        setConductStageModal(false);
        resetConductForm();
        alert("Cập nhật vòng phỏng vấn thành công!");
      }
    } catch (err) {
      console.error("Lỗi khi tiến hành vòng phỏng vấn:", err);
      alert("Không thể cập nhật vòng phỏng vấn!");
    }
  };

  const handleUpdateField = async (url: string, data: any) => {
    setIsUpdating(true);
    try {
      const response = await axios.post(url, data); // Changed to POST to match backend
      if (response.data.success) {
        fetchInterviewDetails(selectedInterview!._id);
        alert(response.data.message || "Cập nhật thành công!");
        return true;
      }
      alert(response.data.message || "Không thể cập nhật!");
      return false;
    } catch (err: any) {
      console.error("Lỗi khi cập nhật:", err);
      alert(err.response?.data?.message || "Không thể cập nhật!");
      return false;
    } finally {
      setIsUpdating(false);
    }
  };

  // Reset forms
  const resetAddInterviewForm = () => {
    setAddRecruitmentId("");
    setAddDate("");
    setAddTime("");
    setAddMode("ONLINE");
    setAddGoogleMeetLink("");
    setAddAddress("");
  };

  const resetStageForm = () => {
    setNewStageType("TECHNICAL_INTERVIEW");
    setNewStageInterviewerIds([]);
  };

  const resetConductForm = () => {
    setScoreEntries([{ key: "", value: "" }]);
    setComments("");
    setSelectedInterviewerId("");
    setCurrentRound(null);
  };

  // Filter interviews
  const filteredInterviews = interviews.filter((interview) => {
    const formattedDate = new Date(interview.date).toLocaleDateString("vi-VN");
    const matchesSearch =
      !searchQuery ||
      interview.mode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formattedDate.includes(searchQuery);
    const matchesStatus =
      (statusFilter.completed && interview.finalStatus === "COMPLETED") ||
      (statusFilter.canceled && interview.finalStatus === "CANCELLED") ||
      (!statusFilter.completed && !statusFilter.canceled);
    const matchesDate =
      !dateFilter ||
      new Date(interview.date).toISOString().split("T")[0] === new Date(dateFilter).toISOString().split("T")[0];
    return matchesSearch && matchesStatus && matchesDate;
  });

  const completedCount = interviews.filter((i) => i.finalStatus === "COMPLETED").length;
  const canceledCount = interviews.filter((i) => i.finalStatus === "CANCELLED").length;

  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <input
          type="text"
          placeholder="Tìm kiếm"
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
                  onChange={(e) => setStatusFilter({ ...statusFilter, completed: e.target.checked })}
                />
                Hoàn thành ({completedCount})
              </label>
              <label>
                <input
                  type="checkbox"
                  name="canceled"
                  checked={statusFilter.canceled}
                  onChange={(e) => setStatusFilter({ ...statusFilter, canceled: e.target.checked })}
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

      {/* Right Section */}
      <div style={styles.rightSection}>
        <h1 style={styles.header}>Lịch Phỏng Vấn</h1>
        <button style={styles.button} onClick={() => setAddInterviewModal(true)}>
          Thêm Lịch Phỏng Vấn
        </button>
        {loading ? (
          <p style={styles.placeholderText}>Đang tải...</p>
        ) : error ? (
          <p style={styles.placeholderText}>{error}</p>
        ) : filteredInterviews.length ? (
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
                <tr key={interview._id}>
                  <td style={styles.td}>{new Date(interview.date).toLocaleDateString("vi-VN")}</td>
                  <td style={styles.td}>{interview.time}</td>
                  <td style={styles.td}>{interview.mode === "ONLINE" ? "Trực tuyến" : "Trực tiếp"}</td>
                  <td style={styles.td}>
                    {interview.mode === "ONLINE" ? (
                      <a href={interview.google_meet_link} target="_blank" rel="noopener noreferrer">
                        {interview.google_meet_link}
                      </a>
                    ) : (
                      interview.address || "N/A"
                    )}
                  </td>
                  <td style={styles.td}>
                    {interview.finalStatus === "IN_PROGRESS" ? "Đang tiến hành" : 
                     interview.finalStatus === "COMPLETED" ? "Hoàn thành" : "Đã hủy"}
                  </td>
                  <td style={styles.td}>
                    <button
                      style={{ ...styles.actionButton, ...styles.detailButton }}
                      onClick={() => fetchInterviewDetails(interview._id)}
                    >
                      Chi tiết
                    </button>
                    <button
                      style={{ ...styles.actionButton, ...styles.cancelButton }}
                      onClick={() =>
                        handleUpdateField(`http://localhost:5000/api/cancel/${interview._id}`, {})
                      }
                    >
                      Hủy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={styles.placeholderText}>Không tìm thấy lịch phỏng vấn nào.</p>
        )}
      </div>

      {/* Add Interview Modal */}
      {addInterviewModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.addModalContent}>
            <h2 style={styles.modalHeader}>Thêm Lịch Phỏng Vấn</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Tuyển dụng</div>
              <select
                value={addRecruitmentId}
                onChange={(e) => setAddRecruitmentId(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="">Chọn Tuyển dụng</option>
                {recruitmentOptions.map((opt) => (
                  <option key={opt.recruitmentId} value={opt.recruitmentId}>
                    {opt.label}
                  </option>
                ))}
              </select>
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
                <option value="ONLINE">Trực tuyến</option>
                <option value="OFFLINE">Trực tiếp</option>
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
                />
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button style={styles.saveButton} onClick={handleAddInterview}>
                Lưu
              </button>
              <button style={styles.modalCloseButton} onClick={() => setAddInterviewModal(false)}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interview Details Modal */}
      {selectedInterview && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalHeader}>Chi tiết Phỏng vấn</h2>
            <div style={styles.modalButtonGroup}>
              <button style={styles.modalAddRoundButton} onClick={() => setAddStageModal(true)}>
                Thêm Vòng Phỏng Vấn
              </button>
              <button
                style={styles.modalSendEmailButton}
                onClick={() =>
                  axios
                    .post("http://localhost:5000/api/send-interview-invitation", {
                      interviewId: selectedInterview._id,
                    })
                    .then((res) => res.data.success && alert("Gửi email thành công!"))
                }
              >
                Gửi Email
              </button>
              <button
                style={styles.modalConductButton}
                onClick={() =>
                  handleUpdateField("http://localhost:5000/api/updateFinalStatus", {
                    interviewId: selectedInterview._id,
                    finalStatus: "COMPLETED",
                  })
                }
                disabled={isUpdating}
              >
                {isUpdating ? "Đang cập nhật..." : "Tiến hành Phỏng vấn"}
              </button>
              <button style={styles.modalCloseButton} onClick={() => setSelectedInterview(null)}>
                Đóng
              </button>
            </div>
            {detailsLoading ? (
              <p style={styles.placeholderText}>Đang tải...</p>
            ) : (
              <>
                <div style={styles.modalSection}>
                  <div style={styles.modalLabel}>Ngày</div>
                  <div style={styles.modalValue}>
                    {new Date(selectedInterview.date).toLocaleDateString("vi-VN")}
                  </div>
                  <button
                    style={{ ...styles.actionButton, ...styles.detailButton }}
                    onClick={() => {
                      setEditDate(selectedInterview.date.split("T")[0]);
                      setEditTime(selectedInterview.time);
                      setEditDateTimeModal(true);
                    }}
                  >
                    Sửa
                  </button>
                </div>
                <div style={styles.modalSection}>
                  <div style={styles.modalLabel}>Hình thức</div>
                  <div style={styles.modalValue}>
                    {selectedInterview.mode === "ONLINE" ? "Trực tuyến" : "Trực tiếp"}
                  </div>
                  <button
                    style={{ ...styles.actionButton, ...styles.detailButton }}
                    onClick={() => {
                      setEditMode(selectedInterview.mode);
                      setEditGoogleMeetLink(selectedInterview.google_meet_link || "");
                      setEditAddress(selectedInterview.address || "");
                      setEditModeModal(true);
                    }}
                  >
                    Sửa
                  </button>
                </div>
                <div style={styles.modalSection}>
                  <div style={styles.modalLabel}>Trạng thái cuối cùng</div>
                  <div style={styles.modalValue}>
                    {selectedInterview.finalStatus === "IN_PROGRESS" ? "Đang tiến hành" : 
                     selectedInterview.finalStatus === "COMPLETED" ? "Hoàn thành" : "Đã hủy"}
                  </div>
                  <button
                    style={{ ...styles.actionButton, ...styles.detailButton }}
                    onClick={() => {
                      setEditFinalStatus(selectedInterview.finalStatus);
                      setEditFinalStatusModal(true);
                    }}
                  >
                    Sửa
                  </button>
                </div>
                <div style={styles.modalSection}>
                  <div style={styles.modalLabel}>Ứng viên</div>
                  <div style={styles.modalValue}>{candidate?.name || "Đang tải..."}</div>
                </div>
                <div style={styles.modalSection}>
                  <div style={styles.modalLabel}>Công việc</div>
                  <div style={styles.modalValue}>{job?.title || "Đang tải..."}</div>
                </div>
                <div>
                  <div style={styles.modalLabel}>Các vòng phỏng vấn</div>
                  {selectedInterview.stages.map((stage) => (
                    <div key={stage.round} style={styles.stageSection}>
                      <div style={styles.stageHeader}>
                        Vòng {stage.round} - {stage.type === "HR_SCREENING" ? "Sàng lọc HR" : 
                         stage.type === "TECHNICAL_INTERVIEW" ? "Phỏng vấn Kỹ thuật" : "Phỏng vấn Cuối"}
                      </div>
                      <div style={styles.modalSection}>
                        <div style={styles.modalLabel}>Trạng thái</div>
                        <div style={styles.modalValue}>
                          {stage.status === "SCHEDULED" ? "Đã lên lịch" : 
                           stage.status === "PASSED" ? "Đạt" : 
                           stage.status === "FAILED" ? "Không đạt" : "Đang chờ"}
                        </div>
                        <button
                          style={{ ...styles.actionButton, ...styles.detailButton }}
                          onClick={() => {
                            setEditRound(stage.round);
                            setEditPassFailStatus(stage.status);
                            setEditPassFailModal(true);
                          }}
                        >
                          Sửa
                        </button>
                      </div>
                      <div style={styles.modalSection}>
                        <div style={styles.modalLabel}>Người phỏng vấn</div>
                        <div style={styles.modalValue}>
                          {stage.interviewerIds.map((id) => interviewers[id]?.email || id).join(", ")}
                        </div>
                      </div>
                      <div style={styles.modalSection}>
                        <div style={styles.modalLabel}>Đánh giá</div>
                        <div style={styles.modalValue}>
                          {stage.evaluations.length ? (
                            stage.evaluations.map((e, i) => (
                              <div key={i}>
                                <div>Người đánh giá: {interviewers[e.interviewerId]?.email || e.interviewerId}</div>
                                <div>
                                  Điểm số:{" "}
                                  {Object.entries(e.score)
                                    .map(([k, v]) => `${k}: ${v}`)
                                    .join(", ") || "Chưa có"}
                                </div>
                                <div>Nhận xét: {e.comments || "Chưa có"}</div>
                              </div>
                            ))
                          ) : (
                            "Chưa có đánh giá"
                          )}
                        </div>
                      </div>
                      <button
                        style={styles.modalConductButton}
                        onClick={() => {
                          setCurrentRound(stage.round);
                          setConductStageModal(true);
                        }}
                      >
                        Tiến hành Vòng
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Add Stage Modal */}
      {addStageModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.addStageModalContent}>
            <h2 style={styles.modalHeader}>Thêm Vòng Phỏng Vấn</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Loại vòng</div>
              <select
                value={newStageType}
                onChange={(e) => setNewStageType(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="HR_SCREENING">Sàng lọc HR</option>
                <option value="TECHNICAL_INTERVIEW">Phỏng vấn Kỹ thuật</option>
                <option value="FINAL_INTERVIEW">Phỏng vấn Cuối</option>
              </select>
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Người phỏng vấn</div>
              <select
                multiple
                value={newStageInterviewerIds}
                onChange={(e) =>
                  setNewStageInterviewerIds(
                    Array.from(e.target.selectedOptions, (opt) => opt.value)
                  )
                }
                style={{ ...styles.editDropdown, height: "100px" }}
              >
                {availableInterviewers.map((int) => (
                  <option key={int._id} value={int._id}>
                    {int.email}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button style={styles.saveButton} onClick={handleCreateStage}>
                Lưu
              </button>
              <button style={styles.modalCloseButton} onClick={() => setAddStageModal(false)}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Conduct Stage Modal */}
      {conductStageModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.conductModalContent}>
            <h2 style={styles.modalHeader}>Conduct Stage - Round {currentRound}</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Evaluator</div>
              <select
                value={selectedInterviewerId}
                onChange={(e) => setSelectedInterviewerId(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="">Select Evaluator</option>
                {availableInterviewers.map((int) => (
                  <option key={int._id} value={int._id}>
                    {int.email}
                  </option>
                ))}
              </select>
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Scores</div>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Criterion</th>
                    <th style={styles.th}>Score (0-10)</th>
                    <th style={styles.th}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreEntries.map((entry, index) => (
                    <tr key={index}>
                      <td style={styles.td}>
                        <input
                          type="text"
                          value={entry.key}
                          onChange={(e) =>
                            setScoreEntries(
                              scoreEntries.map((s, i) =>
                                i === index ? { ...s, key: e.target.value } : s
                              )
                            )
                          }
                          style={styles.input}
                        />
                      </td>
                      <td style={styles.td}>
                        <input
                          type="number"
                          value={entry.value}
                          onChange={(e) =>
                            setScoreEntries(
                              scoreEntries.map((s, i) =>
                                i === index ? { ...s, value: e.target.value } : s
                              )
                            )
                          }
                          style={styles.input}
                          min="0"
                          max="10"
                        />
                      </td>
                      <td style={styles.td}>
                        <button
                          style={styles.cancelButton}
                          onClick={() => setScoreEntries(scoreEntries.filter((_, i) => i !== index))}
                          disabled={scoreEntries.length === 1}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                style={styles.button}
                onClick={() => setScoreEntries([...scoreEntries, { key: "", value: "" }])}
              >
                Add Criterion
              </button>
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Comments</div>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                style={{ ...styles.input, height: "100px" }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button style={styles.saveButton} onClick={handleConductStage}>
                Save
              </button>
              <button style={styles.modalCloseButton} onClick={() => setConductStageModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modals */}
      {editDateTimeModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Sửa Ngày/Giờ</h2>
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
              <button
                style={styles.saveButton}
                onClick={() =>
                  handleUpdateField("http://localhost:5000/api/updateInterviewDateTime", {
                    interviewId: selectedInterview!._id,
                    date: editDate,
                    time: editTime,
                  }).then(() => setEditDateTimeModal(false))
                }
                disabled={isUpdating}
              >
                {isUpdating ? "Đang cập nhật..." : "Lưu"}
              </button>
              <button style={styles.modalCloseButton} onClick={() => setEditDateTimeModal(false)}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {editModeModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Sửa Hình thức</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Hình thức</div>
              <select
                value={editMode}
                onChange={(e) => setEditMode(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="ONLINE">Trực tuyến</option>
                <option value="OFFLINE">Trực tiếp</option>
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
              <button
                style={styles.saveButton}
                onClick={() =>
                  handleUpdateField(`http://localhost:5000/api/update-mode/${selectedInterview!._id}`, {
                    mode: editMode,
                    ...(editMode === "ONLINE" ? { google_meet_link: editGoogleMeetLink } : { address: editAddress }),
                  }).then(() => setEditModeModal(false))
                }
                disabled={isUpdating}
              >
                {isUpdating ? "Đang cập nhật..." : "Lưu"}
              </button>
              <button style={styles.modalCloseButton} onClick={() => setEditModeModal(false)}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {editFinalStatusModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Sửa Trạng thái Cuối cùng</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Trạng thái</div>
              <select
                value={editFinalStatus}
                onChange={(e) => setEditFinalStatus(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="IN_PROGRESS">Đang tiến hành</option>
                <option value="COMPLETED">Hoàn thành</option>
                <option value="CANCELLED">Đã hủy</option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                style={styles.saveButton}
                onClick={() =>
                  handleUpdateField("http://localhost:5000/api/updateFinalStatus", {
                    interviewId: selectedInterview!._id,
                    finalStatus: editFinalStatus,
                  }).then(() => setEditFinalStatusModal(false))
                }
                disabled={isUpdating}
              >
                {isUpdating ? "Đang cập nhật..." : "Lưu"}
              </button>
              <button style={styles.modalCloseButton} onClick={() => setEditFinalStatusModal(false)}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {editPassFailModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.editModalContent}>
            <h2 style={styles.modalHeader}>Sửa Trạng thái Đạt/Không đạt</h2>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Vòng</div>
              <input type="number" value={editRound || ""} disabled style={styles.input} />
            </div>
            <div style={styles.modalSection}>
              <div style={styles.modalLabel}>Trạng thái</div>
              <select
                value={editPassFailStatus}
                onChange={(e) => setEditPassFailStatus(e.target.value)}
                style={styles.editDropdown}
              >
                <option value="PASSED">Đạt</option>
                <option value="FAILED">Không đạt</option>
              </select>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                style={styles.saveButton}
                onClick={() =>
                  handleUpdateField("http://localhost:5000/api/update-pass-fail", {
                    interviewId: selectedInterview!._id,
                    round: editRound,
                    status: editPassFailStatus,
                  }).then(() => setEditPassFailModal(false))
                }
                disabled={isUpdating}
              >
                {isUpdating ? "Đang cập nhật..." : "Lưu"}
              </button>
              <button style={styles.modalCloseButton} onClick={() => setEditPassFailModal(false)}>
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