export enum JobLevel {
  EXPERT = "EXPERT",
  SPECIALIST = "SPECIALIST",
  STAFF = "STAFF",
  MANAGER = "MANAGER",
  INTERN = "INTERN",
}

export const jobLevelOptions: { value: JobLevel, label: string }[] = [
  { value: JobLevel.EXPERT, label: "Chuyên gia" },
  { value: JobLevel.SPECIALIST, label: "Chuyên viên" },
  { value: JobLevel.STAFF, label: "Nhân viên" },
  { value: JobLevel.MANAGER, label: "Quản lý" },
  { value: JobLevel.INTERN, label: "Thực tập sinh" },
];

export const getJobLevelLabel = (value: JobLevel | null) => {
  const option = jobLevelOptions.find(option => option.value === value);
  return option ? option.label : "Chưa xác định";
};
