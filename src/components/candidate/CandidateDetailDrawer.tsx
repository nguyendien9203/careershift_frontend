import React, { useState } from "react";

import Drawer from "../common/shared/Drawer";
import Tag from "../common/shared/Tag";
import AppBarLayout from "../../layouts/AppBarLayout";
import CandidateDetailPanel from "./CandidateDetailPanel";
import { Application } from "../../types/application";
import {
  ApplicationStatus,
  getApplicationStatusLabel,
} from "../../constants/applicationStatus";
import { mapStatusToTagVariant } from "../../utils/mapData";
import { Job } from "../../types/job";
import Button from "../common/shared/Button";
import Tabs from "../common/shared/Tabs";
import { CANDIDATE_DETAIL_TABS } from "../../constants/tabs";
import CandidateMessageTab from "./CandidateMessageTab";

interface CandidateDetailDrawerProps {
  job: Job;
  application: Application;
  onClose: () => void;
  handleReject: (applicationId: string) => void;
  handleAccept: (applicationId: string) => void;
  moveToPreviousApplication: (currentApplicationId: string) => void;
  moveToNextApplication: (currentApplicationId: string) => void;
}

const CandidateDetailDrawer: React.FC<CandidateDetailDrawerProps> = ({
  job,
  application,
  onClose,
  handleReject,
  handleAccept,
  moveToPreviousApplication,
  moveToNextApplication,
}) => {
  const [currentStatus, setCurrentStatus] = useState(application.status);
  const translatedStatus = getApplicationStatusLabel(application.status);

  const onReject = (applicationId: string) => {
    handleReject(applicationId);
    setCurrentStatus(ApplicationStatus.REJECTED);
  };

  const onAccept = (applicationId: string) => {
    handleAccept(applicationId);
    setCurrentStatus(ApplicationStatus.INTERVIEW);
  };

  return (
    <Drawer isOpen={true} onClose={onClose} position="right" width="w-[600px]">
      <div className="flex items-center justify-between h-8 w-full border-b border-secondary-100">
        <button
          className="flex justify-start items-center border-none bg-white hover:bg-slate-100 text-primary-500 w-[50%] h-full px-4"
          onClick={() => moveToPreviousApplication(application._id)}
        >
          <i className="bi bi-arrow-left-circle mr-2"></i>
          <span>Trước</span>
        </button>
        <div className="border-l border-secondary-100 h-full"></div>
        <button
          className="flex justify-end items-center border-none bg-white hover:bg-slate-100 text-primary-500 w-[50%] h-full px-4"
          onClick={() => moveToNextApplication(application._id)}
        >
          <span>Sau</span>
          <i className="bi bi-arrow-right-circle ml-2"></i>
        </button>
      </div>

      <div className="p-4">
        <AppBarLayout
          title={application.candidate.name}
          subtitle={
            <div className="flex items-center flex-wrap gap-x-2">
              <h5 className="text-sm">
                Ứng tuyển cho{" "}
                <span className="text-primary-500">{job.title}</span>
              </h5>
              <span>-</span>
              <Tag
                label={translatedStatus}
                variant={mapStatusToTagVariant(application.status)}
              />
            </div>
          }
          actions={[
            <div className="flex items-center gap-x-2">
              <Button
                variant="light"
                icon="bi-three-dots"
                iconClassName="text-primary-500"
              />
              {currentStatus === ApplicationStatus.ON_PROGRESS ? (
                <>
                  <Button
                    variant="light"
                    icon="bi-x-circle"
                    iconClassName="text-red-500"
                    onClick={() => onReject(application._id)}
                  />

                  <Button
                    variant="light"
                    icon="bi-hand-thumbs-up"
                    iconClassName="text-success-500"
                    onClick={() => onAccept(application._id)}
                  >
                    Chấp nhận
                  </Button>
                </>
              ) : null}
            </div>,
          ]}
        />
      </div>
      <Tabs
        defaultActiveKey="candidate_details"
        tabs={CANDIDATE_DETAIL_TABS}
        tabContents={{
          candidate_details: <CandidateDetailPanel application={application} />,
          candidate_message: (
            <CandidateMessageTab
              candidateName={application.candidate.name}
              candidateEmail={application.candidate.email}
            />
          ),
        }}
      />
    </Drawer>
  );
};

export default CandidateDetailDrawer;
