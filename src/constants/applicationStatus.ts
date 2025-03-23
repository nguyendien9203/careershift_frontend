export enum ApplicationStatus {
  ON_PROGRESS = "ON_PROGRESS",
  INTERVIEW = "INTERVIEW",
  REJECTED = "REJECTED",
  HIRED = "HIRED",
}

export const applicationStatusOptions = [
  { value: ApplicationStatus.ON_PROGRESS, label: "Đang xử lý" },
  { value: ApplicationStatus.INTERVIEW, label: "Phỏng vấn" },
  { value: ApplicationStatus.REJECTED, label: "Bị từ chối" },
  { value: ApplicationStatus.HIRED, label: "Được tuyển" },
];

export const getApplicationStatusLabel = (value: ApplicationStatus) => {
  const option = applicationStatusOptions.find(
    (option) => option.value === value
  );
  return option ? option.label : "Chưa xác định";
};
