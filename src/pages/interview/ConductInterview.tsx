import React, { useState } from "react";
import { Link } from "react-router-dom";

// Define styles using inline CSS or a CSS-in-JS solution to match the screenshot
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  searchBar: {
    width: "100%",
    padding: "10px",
    border: "1px solid #d9d9d9",
    borderRadius: "4px",
    marginBottom: "20px",
    fontSize: "14px",
  },
  filterSection: {
    marginBottom: "20px",
  },
  filterLabel: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "10px",
  },
  dropdown: {
    width: "100%",
    padding: "10px",
    border: "1px solid #d9d9d9",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#1890ff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    float: "right" as "right",
    marginBottom: "20px",
  },
};

const ConductInterview: React.FC = () => {
  // State for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState({
    scheduled: false,
    completed: false,
  });
  const [dateFilter, setDateFilter] = useState("");
  const [candidateFilter, setCandidateFilter] = useState("");

  // Handle checkbox changes
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setStatusFilter((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div style={styles.container}>
      {/* Page Header */}
      <h1 style={styles.header}>Tiến hành phỏng vấn</h1>

      {/* Add Interview Button */}
      <Link to="/interview/conduct/add">
        <button style={styles.button}>Bắt đầu phỏng vấn</button>
      </Link>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Tìm kiếm phỏng vấn..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchBar}
      />

      {/* Filter Section */}
      <div style={styles.filterSection}>
        {/* Status Filter */}
        <div style={{ marginBottom: "20px" }}>
          <div style={styles.filterLabel}>Trạng thái phỏng vấn</div>
          <div style={styles.checkboxContainer}>
            <label>
              <input
                type="checkbox"
                name="scheduled"
                checked={statusFilter.scheduled}
                onChange={handleStatusChange}
              />
              Đã lên lịch ({0})
            </label>
            <label>
              <input
                type="checkbox"
                name="completed"
                checked={statusFilter.completed}
                onChange={handleStatusChange}
              />
              Đã hoàn thành ({0})
            </label>
          </div>
        </div>

        {/* Date Filter */}
        <div style={{ marginBottom: "20px" }}>
          <div style={styles.filterLabel}>Thời gian</div>
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            style={styles.dropdown}
          >
            <option value="">Hôm nay</option>
            <option value="yesterday">Hôm qua</option>
            <option value="this-week">Tuần này</option>
            <option value="this-month">Tháng này</option>
          </select>
        </div>

        {/* Candidate Filter */}
        <div>
          <div style={styles.filterLabel}>Ứng viên liên quan</div>
          <select
            value={candidateFilter}
            onChange={(e) => setCandidateFilter(e.target.value)}
            style={styles.dropdown}
          >
            <option value="">Ứng viên liên quan</option>
            <option value="candidate1">Nguyễn Văn A</option>
            <option value="candidate2">Trần Thị B</option>
            <option value="candidate3">Lê Văn C</option>
          </select>
        </div>
      </div>

      {/* Placeholder for Interview List/Table */}
      <div>
        <p style={{ color: "#888" }}>
          Không tìm thấy phỏng vấn nào phù hợp với tiêu chí của bạn.
        </p>
      </div>
    </div>
  );
};

export default ConductInterview;