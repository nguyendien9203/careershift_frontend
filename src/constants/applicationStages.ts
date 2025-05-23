export enum ApplicationStage {
  REJECTED = "REJECTED",
  SCREENING = "SCREENING",
  INTERVIEWING = "INTERVIEWING",
  OFFER_SIGNING = "OFFER_SIGNING",
}

export const STAGE_ITEMS = [
  {
    id: ApplicationStage.SCREENING,
    label: "Lọc hồ sơ",
    icon: "bi-file-earmark-check",
    permission: "view_screening_stage",
  },
  {
    id: ApplicationStage.INTERVIEWING,
    label: "Phỏng vấn",
    icon: "bi-person-lines-fill",
    permission: "view_interview_stage",
  },
  {
    id: ApplicationStage.OFFER_SIGNING,
    label: "Đề nghị & Ký hợp đồng",
    icon: "bi-file-earmark",
    permission: "view_offer_signing_stage",
  },
  {
    id: ApplicationStage.REJECTED,
    label: "Ứng viên bị loại",
    icon: "bi-person-x",
    permission: "view_background_check_stage",
  },
];
