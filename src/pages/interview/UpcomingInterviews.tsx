import React, { useState, useEffect } from "react";
import axios from "axios";
import { Interview } from "./InterviewSchedule"; // Import the Interview type

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  header: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333",
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
  placeholderText: {
    color: "#888",
    fontSize: "14px",
    textAlign: "center" as "center",
    marginTop: "20px",
  },
};

const UpcomingInterviews: React.FC = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUpcomingInterviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/upcoming");
        if (response.data.success) {
          setInterviews(response.data.data);
        } else {
          setError("Failed to fetch upcoming interviews");
        }
      } catch (err) {
        setError("Error fetching upcoming interviews");
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingInterviews();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Lịch Phỏng Vấn Sắp Tới</h1>
      {loading ? (
        <p style={styles.placeholderText}>Đang tải...</p>
      ) : error ? (
        <p style={styles.placeholderText}>{error}</p>
      ) : interviews.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Ngày</th>
              <th style={styles.th}>Thời gian</th>
              <th style={styles.th}>Hình thức</th>
              <th style={styles.th}>Địa điểm/Link</th>
              <th style={styles.th}>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview) => (
              <tr key={interview._id}>
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
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={styles.placeholderText}>Không có lịch phỏng vấn sắp tới.</p>
      )}
    </div>
  );
};

export default UpcomingInterviews;