import NavSettings from "@/components/NavSettings";

export const sideBarLinks = [
  {
    img: "/icons/house.svg",
    route: "/",
    title: "Bảng điều khiển",
  },
  {
    img: "/icons/briefcase-business.svg",
    route: "/recruitment",
    title: "Tuyển dụng",
  },
  {
    img: "/icons/calendar-days.svg",
    route: "/calendar",
    title: "Lịch phỏng vấn",
  },
  {
    img: "/icons/settings.svg",
    route: "/settings",
    title: "Cài đặt",
  },
  {
    img: "/icons/bell.svg",
    route: "/notifications",
    title: "Thông báo",
  },
];

export const navPersonalSettings = [
  {
    img: "/icons/profile.svg",
    route: "/settings/profiles",
    title: "Hồ sơ",
  },
  {
    img: "/icons/password.svg",
    route: "/settings/password",
    title: "Mật khẩu",
  },
];

export const navCompanySettings = [
  {
    img: "/icons/members.svg",
    route: "/settings/members",
    title: "Thành viên",
  },
];

export const sidebarConfig = {
  "/settings": (
    <>
      <NavSettings label="Cá nhân" items={navPersonalSettings} />
      <NavSettings label="Công ty" items={navCompanySettings} />
    </>
  ),
};
