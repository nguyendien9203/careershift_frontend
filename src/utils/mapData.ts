export const mapStatusToTagVariant = (
  status: string
): "primary" | "success" | "warning" | "purple" | "light" | "danger" => {
  switch (status.toLowerCase()) {
    case "passed":
    case "đã qua":
      return "success";
    case "pending":
    case "đang chờ":
      return "warning";
    case "failed":
    case "đã loại":
      return "danger";
    default:
      return "primary";
  }
};
