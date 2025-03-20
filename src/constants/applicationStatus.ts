export enum ApplicationStatus {
  PENDING = "PENDING",
  PASSED = "PASSED",
  FAILED = "FAILED"
}

export const applicationStatusOptions = [
  { value: ApplicationStatus.PENDING, label: "Đang chờ" },
  { value: ApplicationStatus.PASSED, label: "Đã qua" },
  { value: ApplicationStatus.FAILED, label: "Đã loại" }
];

export const getApplicationStatusLabel = (value: ApplicationStatus) => {
  const option = applicationStatusOptions.find(option => option.value === value);
  return option ? option.label : "Chưa xác định";
};

