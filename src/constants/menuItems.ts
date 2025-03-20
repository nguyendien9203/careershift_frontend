import { Item } from "../types/item";

export const MENU_ITEMS: Item[] = [
  {
    id: "dashboard",
    label: "Bảng điều khiển",
    icon: "bi bi-columns-gap",
    path: "/",
    permission: "view_dashboard",
    subItems: [],
  },
  {
    id: "recruitment",
    label: "Tuyển dụng",
    icon: "bi bi-briefcase",
    path: "/recruitment/jobs",
    permission: "view_recruitments",
    subItems: [
      {
        id: "job-list",
        label: "Danh sách",
        path: "/recruitment/jobs",
        permission: "view_jobs",
      },
      {
        id: "add-job",
        label: "Thêm công việc",
        path: "/recruitment/jobs/add",
        permission: "create_job",
      },
      {
        id: "department",
        label: "Ban bộ phận",
        path: "/recruitment/departments",
        permission: "view_departments",
      },
    ],
  },
  {
    id: "interview",
    label: "Phỏng vấn",
    icon: "bi bi-calendar",
    path: "/interview/schedule",
    permission: "view_interviews",
    subItems: [
      {
        id: "schedule",
        label: "Lịch phỏng vấn",
        path: "/interview/schedule",
        permission: "view_schedules",
      },
    ],
  },
  {
    id: "settings",
    label: "Cài đặt",
    icon: "bi bi-gear",
    path: "/settings",
    permission: "manage_settings",
    subItems: [],
  },
];
