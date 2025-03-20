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

