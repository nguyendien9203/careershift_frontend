export const BASE_API_URL = process.env.REACT_APP_BASE_URL;
export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const getAuthHeaders = () => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    throw new Error("Token không tồn tại");
  }
  return {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};
