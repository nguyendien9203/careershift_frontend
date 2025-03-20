export enum JobStatus {
  DRAFT = "DRAFT",
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export const jobStatusOptions: { value: JobStatus, label: string }[] = [
  { value: JobStatus.DRAFT, label: "Bản nháp" },
  { value: JobStatus.OPEN, label: "Đang tuyển dụng" },
  { value: JobStatus.CLOSED, label: "Đóng tuyển dụng" },
];

export const getJobLevelLabel = (value: JobStatus) => {
  const option = jobStatusOptions.find(option => option.value === value);
  return option ? option.label : "Chưa xác định";
};
