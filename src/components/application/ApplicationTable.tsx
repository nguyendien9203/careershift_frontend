import React, { useState } from "react";

import { calculateTimeDifference } from "../../utils/calculate";
import Table from "../common/shared/Table";
import Button from "../common/shared/Button";
import { Column } from "../../types/column";
import Tag from "../common/shared/Tag";
import { mapStatusToTagVariant } from "../../utils/mapData";
import {
  ApplicationStatus,
  getApplicationStatusLabel,
} from "../../constants/applicationStatus";
import { Application } from "../../types/application";
import CandidateDetailDrawer from "../candidate/CandidateDetailDrawer";
import { Job } from "../../types/job";
import {
  rejectApplication,
  acceptApplication,
} from "../../services/applicationService";
import { message } from "antd";

const columns: Column[] = [
  {
    title: "Tên ứng viên",
    key: "name",
    classes: "w-[30%]",
  },
  {
    title: "Trạng thái",
    key: "status",
  },
  {
    title: "Thời gian ứng tuyển",
    key: "daysInStage",
  },
  { title: "Hành động", key: "actions" },
  { title: "Đơn ứng tuyển", key: "formReplies" },
  { title: "", key: "otherActions" },
];

interface ApplicationTableProps {
  job: Job;
  applications: Application[];
  totalPages: number;
  totalRows: number;
  rowsPerPage: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  handleRowsPerPageChange: (rowsPage: number) => void;
  reloadApplications: () => void;
}

const ApplicationTable: React.FC<ApplicationTableProps> = ({
  job,
  applications,
  totalPages,
  totalRows,
  rowsPerPage,
  currentPage,
  handlePageChange,
  handleRowsPerPageChange,
  reloadApplications,
}) => {
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleViewDetails = (application: Application) => {
    setSelectedApplication(application);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setSelectedApplication(null);
    setIsDrawerOpen(false);
  };

  const handleReject = (applicationId: number) => {
    rejectApplication(applicationId)
      .then((res) => {
        if (res.status === 200) {
          message.success(res.message);
          reloadApplications();
        }
      })
      .catch((error) => {
        message.error(error.message || "Lỗi từ chối ứng tuyển");
      });
  };

  const handleAccept = (applicationId: number) => {
    acceptApplication(applicationId)
      .then((res) => {
        if (res.status === 200) {
          message.success(res.message);
          reloadApplications();
          moveToNextApplication(applicationId);
        }
      })
      .catch((error) => {
        message.error(error.message || "Lỗi chấp nhận ứng tuyển");
      });
  };

  const moveToPreviousApplication = (currentApplicationId: number) => {
    const currentIndex = applications.findIndex((app) => app.id === currentApplicationId);
    const prevIndex = currentIndex - 1;
  
    if (prevIndex >= 0) {
      setSelectedApplication(applications[prevIndex]);
    } else {
      message.info("Không còn ứng viên nào trước đó");
    }
  };

  const moveToNextApplication = (currentApplicationId: number) => {
    const currentIndex = applications.findIndex(
      (app) => app.id === currentApplicationId
    );
  
    const nextIndex = currentIndex + 1;
  
    if (nextIndex < applications.length) {
      setSelectedApplication(applications[nextIndex]);
    } else {
      message.info("Không còn ứng viên nào tiếp theo");
      handleCloseDrawer();
    }
  };
  

  const data = applications.map((application) => {
    const translatedStatus = getApplicationStatusLabel(application.status);
    const isFailed = application.status === ApplicationStatus.FAILED;

    return {
      ...application.candidate,
      status: (
        <Tag
          label={translatedStatus}
          variant={mapStatusToTagVariant(application.status)}
        />
      ),
      daysInStage: calculateTimeDifference(application.createdAt || ""),
      actions: !isFailed ? (
        <div className="flex items-center gap-x-2">
          <Button
            variant="light"
            size="small"
            icon="bi-x-circle"
            iconClassName="text-red-500"
            onClick={() => handleReject(application.id)}
          >
            Từ chối
          </Button>

          <Button
            variant="light"
            size="small"
            icon="bi-hand-thumbs-up"
            iconClassName="text-success-500"
            onClick={() => handleAccept(application.id)}
          >
            Chấp nhận
          </Button>
        </div>
      ) : null,
      formReplies: (
        <Button
          variant="light"
          size="small"
          onClick={() => handleViewDetails(application)}
        >
          Xem
        </Button>
      ),
      otherActions: (
        <Button
          variant="light-link"
          size="small"
          icon="bi-three-dots"
          iconClassName="text-primary-500"
        />
      ),
    };
  });

  return (
    <div className="border border-secondary-100 rounded-b-[5px]">
      {applications.length === 0 ? (
        <p className="text-center py-4 text-secondary-500">Không có ứng viên</p>
      ) : (
        <Table
          columns={columns}
          data={data}
          totalPages={totalPages || 1}
          totalRows={totalRows || 0}
          rowsPerPageOptions={[5, 10, 15]}
          rowsPerPage={rowsPerPage || 5}
          currentPage={currentPage || 1}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
        />
      )}

      {/* Candidate Detail Drawer */}
      {isDrawerOpen && selectedApplication && (
        <CandidateDetailDrawer
          job={job}
          application={selectedApplication}
          onClose={handleCloseDrawer}
          handleReject={handleReject}
          handleAccept={handleAccept}
          moveToPreviousApplication={moveToPreviousApplication}
          moveToNextApplication={moveToNextApplication}
        />
      )}
    </div>
  );
};

export default ApplicationTable;
