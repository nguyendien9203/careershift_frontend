import { SubItem } from "../types/item";

export const CANDIDATE_DETAIL_TABS: SubItem[] = [
  {
    id: "candidate_details",
    label: "Chi tiết",
    icon: "bi-file-earmark-text",
    path: "/candidate-details",
    permission: "view_candidate_details",
  },
  {
    id: "candidate_message",
    label: "Lời nhắn",
    icon: "bi-envelope",
    path: "/candidate-message",
    permission: "candidate_message",
  },
];

export const USER_ROLE_TABS: SubItem[] = [
  {
    id: "user_role",
    label: "Người dùng",
    path: "/user-role",
    permission: "view_user_role",
  },
  {
    id: "role_permission",
    label: "Quyền",
    path: "/role-permission",
    permission: "view_permission",
  },
];
