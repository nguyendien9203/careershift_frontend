import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
//import queryString from "query-string";

import AppBarLayout from "../../layouts/AppBarLayout";
import PageContentLayout from "../../layouts/PageContentLayout";
import Button from "../common/shared/Button";
// import Pagination from "../common/shared/Pagination";
import JobCard from "./JobCard";
// import JobFilter from "./JobFilter";
// import { JobStatus } from "../../constants/jobStatus";
// import { JobLevel, getJobLevelLabel } from "../../constants/jobLevel";
import { getJobs } from "../../services/jobServices";
import { Job } from "../../types/job";

const JobList: React.FC = () => {
  const navigate = useNavigate();
  //const location = useLocation();

  const [jobs, setJobs] = useState<Job[]>([]);
  // const [searchQuery, setSearchQuery] = useState<string>("");
  // const [selectedLevels, setSelectedLevels] = useState<JobLevel[]>([]);
  // const [selectedStatuses, setSelectedStatuses] = useState<JobStatus[]>([]);
  // const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  // const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  // const [statusCounts, setStatusCounts] = useState<{ [key: string]: number }>(
  //   {}
  // );

  // Pagination states
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  // const [totalRows, setTotalRows] = useState<number>(0);
  // const [totalPages, setTotalPages] = useState<number>(0);

  // const fetchJobs = useCallback(() => {
  //   getJobs(
  //     currentPage,
  //     rowsPerPage,
  //     searchQuery,
  //     selectedLevels,
  //     selectedStatuses,
  //     selectedLocations,
  //     selectedDepartments
  //   )
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setJobs(res.data.data);
  //         setTotalRows(res.data.totalElements);
  //         setTotalPages(res.data.totalPages);
  //         setCurrentPage(res.data.currentPage);
  //         setStatusCounts(res.data.additionalData.jobCounts || {});
  //       }
  //     })
  //     .catch((err) =>
  //       message.error(err.message || "Không thể tải danh sách công việc")
  //     );
  // }, [
  //   currentPage,
  //   rowsPerPage,
  //   searchQuery,
  //   selectedLevels,
  //   selectedStatuses,
  //   selectedLocations,
  //   selectedDepartments,
  // ]);

  const fetchJobs = useCallback(async () => {
    try {
      const res = await getJobs();
      if (res.status === 200) {
        setJobs(res.data);
      } else {
        message.error(res.message);
      }
    } catch (error: any) {
      message.error(error.message || "Không thể tải danh sách công việc");
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  console.log(jobs);

  // const handleSearchChange = (query: string) => {
  //   setSearchQuery(query);
  // };

  // const handleLevelChange = (level: JobLevel, checked: boolean) => {
  //   setSelectedLevels((prev) =>
  //     checked ? [...prev, level] : prev.filter((item) => item !== level)
  //   );
  // };

  // const handleStatusChange = (status: JobStatus, checked: boolean) => {
  //   setSelectedStatuses((prev) =>
  //     checked ? [...prev, status] : prev.filter((item) => item !== status)
  //   );
  // };

  // const handleDepartmentChange = (department: string, checked: boolean) => {
  //   setSelectedDepartments((prev) =>
  //     checked
  //       ? [...prev, department]
  //       : prev.filter((item) => item !== department)
  //   );
  // };

  // const handleLocationChange = (location: string, checked: boolean) => {
  //   setSelectedLocations((prev) =>
  //     checked ? [...prev, location] : prev.filter((item) => item !== location)
  //   );
  // };

  // const handlePageChange = (newPage: number) => {
  //   setCurrentPage(newPage);
  // };

  // const handleRowsPerPageChange = (rowsPerPage: number) => {
  //   setRowsPerPage(rowsPerPage);
  //   setCurrentPage(1);
  // };

  const handleDetailClick = (id: number) => {
    navigate(`/recruitment/jobs/${id}`, { state: { id } });
  };

  const handleAddClick = () => {
    navigate("/recruitment/jobs/add");
  };

  return (
    <div>
      <AppBarLayout
        title="Tuyển dụng"
        actions={[
          <Button variant="primary" icon="bi-plus-lg" onClick={handleAddClick}>
            Thêm tuyển dụng
          </Button>,
        ]}
      />

      <PageContentLayout
        columnLayout="full"
        // aside={
        //   <JobFilter
        //     searchQuery={searchQuery}
        //     onSearchChange={handleSearchChange}
        //     statusFilter={{
        //       selectedItems: selectedStatuses,
        //       onItemChange: handleStatusChange,
        //     }}
        //     departmentFilter={{
        //       selectedItems: selectedDepartments,
        //       onItemChange: handleDepartmentChange,
        //     }}
        //     levelFilter={{
        //       selectedItems: selectedLevels,
        //       onItemChange: handleLevelChange,
        //     }}
        //     locationFilter={{
        //       selectedItems: selectedLocations,
        //       onItemChange: handleLocationChange,
        //     }}
        //     statusCounts={statusCounts}
        //   />
        // }
        content={
          <div>
            {jobs.length > 0 ? (
              jobs.map((item) => (
                <JobCard
                  key={item._id}
                  title={item.title}
                  // subTitle={`Từ ${new Date(
                  //   item.startDate
                  // ).toLocaleDateString()} đến ${new Date(
                  //   item.endDate
                  // ).toLocaleDateString()}`}
                  // locations={item.locations}
                  // level={getJobLevelLabel(item.level)}
                  // departments={item.departments}
                  onDetailClick={() => handleDetailClick(item._id ?? 0)}
                />
              ))
            ) : (
              <p className="text-secondary-700">
                Không tìm thấy tuyển dụng nào phù hợp với tiêu chí của bạn.
              </p>
            )}

            {/* <Pagination
              totalPages={totalPages}
              totalRows={totalRows}
              rowsPerPageOptions={[5, 10]}
              currentRowsPerPage={rowsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            /> */}
          </div>
        }
      />
    </div>
  );
};

export default JobList;
