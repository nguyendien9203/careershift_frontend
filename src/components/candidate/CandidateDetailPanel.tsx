import React from "react";

import Panel from "../common/shared/Panel";
import CandidateDetailRow from "./CandidateDetailRow";
import { Application } from "../../types/application";
import Button from "../common/shared/Button";
import { downloadCV, previewCV } from "../../services/applicationService";

interface CandidateDetailPanelProps {
  application: Application;
}

const CandidateDetailPanel: React.FC<CandidateDetailPanelProps> = ({
  application,
}) => {
  return (
    <Panel title="Thông tin ứng viên" className="w-full">
      <div className="flex flex-col gap-y-2">
        <CandidateDetailRow
          icon="bi-person-circle"
          label="Họ và Tên"
          value={application.candidate.name}
        />
        <CandidateDetailRow
          icon="bi-envelope"
          label="Email"
          value={application.candidate.email}
        />
        <CandidateDetailRow
          icon="bi-telephone"
          label="Số điện thoại"
          value={application.candidate.phone}
        />
        <CandidateDetailRow
          icon="bi-file-earmark"
          label="CV"
          value={
            <div className="flex items-center gap-x-4">
              <Button
                variant="primary-link"
                icon="bi-eye"
                //onClick={() => previewCV(application.candidate.cvUrl)}
              >
                Xem trước
              </Button>
              <Button
                variant="primary-link"
                icon="bi-download"
                //onClick={() => downloadCV(application.candidate.cvUrl)}
              >
                Tải xuống
              </Button>
            </div>
          }
        />
        <CandidateDetailRow
          icon="bi bi-calendar"
          label="Ngày ứng tuyển"
          value={
            application.createdAt
              ? new Date(application.createdAt).toLocaleDateString()
              : "Không xác định"
          }
        />
      </div>
    </Panel>
  );
};

export default CandidateDetailPanel;
