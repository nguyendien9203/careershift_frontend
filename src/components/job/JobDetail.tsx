import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { message, Switch } from "antd";

import AppBarLayout from "../../layouts/AppBarLayout";
import PageContentLayout from "../../layouts/PageContentLayout";
import Tag from "../common/shared/Tag";
import Button from "../common/shared/Button";
import ApplicationStageNavigator from "../application/ApplicationStageNavigator";
import SearchBar from "../common/shared/SearchBar";
import ApplicationTable from "../application/ApplicationTable";
import DropdownMenu from "../common/shared/DropdownMenu";
//import { getJobLevelLabel } from "../../constants/jobLevel";
import { getJobById } from "../../services/jobServices";
import { Job } from "../../types/job";
import { JobStatus } from "../../constants/jobStatus";
import { ApplicationStage } from "../../constants/applicationStages";
import {
  Application,
  ApplyForJobPayload,
  ApplyForJobRequest,
  StageData,
} from "../../types/application";
import {
  ApplicationStatus,
  applicationStatusOptions,
} from "../../constants/applicationStatus";
import { SubItem } from "../../types/item";
import {
  getApplicationsByStage,
  uploadCandidateCV,
  applyForJob,
} from "../../services/applicationService";
import { PageResponse } from "../../types/page";
import AddRecruitmentDrawer from "../application/AddRecruitmentDrawer";

const JobDetail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};

  const [job, setJob] = useState<Job | null>(null);
  //const [isPublicJob, setIsPublicJob] = useState<boolean>(false);
  const [selectedStage, setSelectedStage] = useState<ApplicationStage>(
    ApplicationStage.SCREENING
  );
  const [stages, setStages] = useState<Map<ApplicationStage, StageData>>(
    new Map()
  );
  const [applications, setApplications] = useState<Application[]>([]);
  //const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStatuses, setSelectedStatuses] = useState<ApplicationStatus[]>(
    []
  );
  const [isRecruitmentDrawerOpen, setIsRecruitmentDrawerOpen] = useState(false);

  // Pagination states
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  // const [totalRows, setTotalRows] = useState<number>(0);
  // const [totalPages, setTotalPages] = useState<number>(0);

  const getJobDetails = useCallback(async () => {
    try {
      const res = await getJobById(id);
      const fetchedJob = res.data;
      setJob(fetchedJob);
    } catch (error: any) {
      message.error(error.message || " Không thể tải công việc");
    }
  }, [id]);

  useEffect(() => {
    getJobDetails();
  }, [getJobDetails]);

  const fetchApplications = useCallback(async () => {
    try {
      const res = await getApplicationsByStage(
        // currentPage,
        // rowsPerPage,
        // searchQuery,
        // selectedStatuses,
        // selectedStage,
        id
      );
      const stagesData: Map<ApplicationStage, StageData> = new Map(
        Object.entries(res).map(([key, value]) => [
          key as ApplicationStage,
          value as StageData,
        ])
      );
      setStages(stagesData);

      const currentStageData = stagesData.get(selectedStage);

      if (Array.isArray(currentStageData)) {
        setApplications(currentStageData);
      } else {
        setApplications([]);
      }
    } catch (error: any) {
      message.error(error.message || "không thể tải dữ liệu thành công");
    }
  }, [
    // currentPage,
    // rowsPerPage,
    // searchQuery,
    // selectedStatuses,
    selectedStage,
    id,
  ]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications, selectedStage]);

  //const breadcrumbItems = findMenuPath(MENU_ITEMS, location.pathname);

  if (!job) {
    return <div>Không tìm thấy công việc này</div>;
  }

  // const handleSearchChange = (query: string) => {
  //   setSearchQuery(query);
  // };

  // const handleApplicationStatusChange = (
  //   status: ApplicationStatus,
  //   checked: boolean
  // ) => {
  //   setSelectedStatuses((prev) =>
  //     checked ? [...prev, status] : prev.filter((s) => s !== status)
  //   );
  // };

  // const handlePageChange = (newPage: number) => {
  //   setCurrentPage(newPage);
  // };

  // const handleRowsPerPageChange = (rowsPerPage: number) => {
  //   setRowsPerPage(rowsPerPage);
  //   setCurrentPage(1);
  // };

  // const handleJobStatusChange = (checked: boolean) => {
  //   if (job) {
  //     const updatedStatus = checked ? JobStatus.OPEN : JobStatus.DRAFT;
  //     setIsPublicJob(checked);
  //     updateJobStatus(job._id ?? 0, updatedStatus)
  //       .then(() => {
  //         setJob({ ...job, status: updatedStatus });
  //       })
  //       .catch((error: any) => {
  //         message.error(
  //           error.message || "Không thể cập nhật trạng thái công việc"
  //         );
  //         setIsPublicJob(!checked);
  //       });
  //   }
  // };

  const handleStageClick = (stage: ApplicationStage) => {
    setSelectedStage(stage);
  };

  const handleRecruitmentSubmit = async (formData: ApplyForJobRequest) => {
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("source", formData.source);

      if (formData.cvFile) {
        data.append("cvFile", formData.cvFile);
      }

      data.append("notes", formData.notes);

      const uploadResponse = await uploadCandidateCV(id, formData);
      console.log(uploadResponse);
      if (uploadResponse.continued) {
        const applyResponse = await applyForJob(id, uploadResponse);
        console.log(applyResponse);
        message.success("Ứng tuyển thành công");
      }
    } catch (error: any) {
      message.error(error.message || "Lỗi tuyển dụng");
    }
    setIsRecruitmentDrawerOpen(false);
  };

  // const statusItems: SubItem[] = applicationStatusOptions.map((status) => ({
  //   id: status.value,
  //   label: status.label,
  //   isCheckbox: true,
  //   checked: selectedStatuses.includes(status.value),
  //   onChange: (checked) => handleApplicationStatusChange(status.value, checked),
  // }));

  return (
    <div>
      <AppBarLayout
        title={job.title}
        // subtitle={
        //   <div className="flex items-center flex-wrap gap-x-2">
        //     <Tag label={`Tổng: ${job.totalApplicants}`} variant="light" />
        //     <Tag
        //       label={`Đang tiến hành: ${job.inProgressApplicants}`}
        //       variant="light"
        //     />
        //     <Tag label={`${getJobLevelLabel(job.level)}`} variant="light" />
        //     {job.locations.map((loc) => (
        //       <Tag
        //         key={loc.id}
        //         label={loc.name}
        //         icon="bi-geo"
        //         variant="success"
        //       />
        //     ))}
        //   </div>
        // }
        actions={[
          <div className="flex items-center gap-x-2">
            <Button
              variant="light"
              icon="bi-three-dots"
              iconClassName="text-primary-500"
            />
            <Button
              variant="light"
              icon="bi-eyedropper"
              iconClassName="text-primary-500"
            >
              Sửa
            </Button>

            <Button
              variant="light"
              icon="bi-person-add"
              iconClassName="text-primary-500"
              onClick={() => setIsRecruitmentDrawerOpen(true)}
            >
              Thêm ứng tuyển
            </Button>
            {/* <div
              className={`flex items-center gap-x-2 border rounded-[5px] h-8 px-2 w-auto ${
                isPublicJob ? "border-primary-500" : "border-secondary-100"
              }`}
            >
              <Switch
                checked={isPublicJob}
                onChange={handleJobStatusChange}
                size="small"
                defaultChecked
              />
              <span
                className={`text-sm ${
                  isPublicJob ? "text-primary-500" : "text-secondary-700"
                } flex-shrink-0 min-w-max`}
              >
                {isPublicJob ? "Công khai" : "Riêng tư"}
              </span>
            </div> */}
          </div>,
        ]}
        onBack={() => navigate(-1)}
        showBorder
      />

      <PageContentLayout
        columnLayout="full"
        content={
          <div>
            <ApplicationStageNavigator
              stages={stages}
              selectedStage={selectedStage}
              onStageClick={handleStageClick}
            />
            {/* <div className="p-2 border-x border-secondary-100 flex items-center justify-between">
              <div className="w-1/4 flex items-center gap-x-2">
                <DropdownMenu
                  icon="bi-funnel"
                  buttonVariant="light"
                  items={statusItems}
                  size="medium"
                />

                <SearchBar
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Tìm kiếm ứng viên..."
                />
              </div>
            </div> */}
            <ApplicationTable
              job={job}
              // totalPages={totalPages}
              // totalRows={totalRows}
              // rowsPerPage={rowsPerPage}
              // currentPage={currentPage}
              applications={applications}
              // handlePageChange={handlePageChange}
              // handleRowsPerPageChange={handleRowsPerPageChange}
              reloadApplications={fetchApplications}
            />
          </div>
        }
      />

      {/* Recruitment Drawer */}
      {isRecruitmentDrawerOpen && (
        <AddRecruitmentDrawer
          isOpen={isRecruitmentDrawerOpen}
          onClose={() => setIsRecruitmentDrawerOpen(false)}
          onSubmit={handleRecruitmentSubmit}
          reloadApplications={fetchApplications}
        />
      )}
    </div>
  );
};

export default JobDetail;
