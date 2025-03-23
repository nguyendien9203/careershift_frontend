import React from "react";
import AppBarLayout from "../../layouts/AppBarLayout";
import PageContentLayout from "../../layouts/PageContentLayout";
import SettingNavBar from "../../components/setting/SettingNavBar";

const ChangePassword: React.FC = () => {
  return (
    <div>
      <AppBarLayout title="Cài đặt" />
      <PageContentLayout
        columnLayout="3-7"
        aside={<SettingNavBar />}
        content={
          <div>
            <h1>Đổi mật khẩu</h1>
          </div>
        }
      />
    </div>
  );
};

export default ChangePassword;
