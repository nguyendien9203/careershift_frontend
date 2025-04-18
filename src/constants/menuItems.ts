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
      // {
      //   id: "department",
      //   label: "Offer Lương",
      //   path: "/offersalary",
      //   permission: "view_departments",
      // },
      {
        id: "offer-salary",
        label: "Offer Lương",
        path: "/offersalary",
        permission: "view_offersalary",
      },
      {
        id: "offer-status",
        label: "Offer Status",
        path: "/offerstatus",
        permission: "view_offerstatus",
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
      {
        id: "conduct-interview",
        label: "Tiến hành phỏng vấn",
        path: "/interview/conduct",
        permission: "conduct_interviews",
      },
      {
        id: "user-schedule",
        label: "Lịch phỏng vấn của User", // Đổi từ "Lịch công việc của User"
        path: "/interview/user-schedule",
        permission: "view_user_schedule",
      },
    ],
  },
  {
    id: "settings",
    label: "Cài đặt",
    icon: "bi bi-gear",
    path: "/profile",
    permission: "manage_settings",
    subItems: [],
  },
];

export const MENU_SETTINGS: Item[] = [
  {
    id: "personal",
    label: "Cá nhân",
    permission: "view_profile",
    subItems: [
      {
        id: "profile",
        label: "Hồ sơ",
        icon: "bi-person-circle",
        path: "/profile",
        permission: "view_profile",
      },
      {
        id: "change-password",
        label: "Đổi mật khẩu",
        icon: "bi-key",
        path: "/change-password",
        permission: "change_password",
      },
    ],
  },
  {
    id: "company",
    label: "Công ty",
    permission: "logout",
    subItems: [
      {
        id: "team-members",
        label: "Thành viên",
        icon: "bi-people",
        path: "/team-members",
        permission: "view_team_members",
      },
    ],
  },
];
