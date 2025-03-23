import React, { useEffect } from "react";
import AppBarLayout from "../../layouts/AppBarLayout";
import PageContentLayout from "../../layouts/PageContentLayout";
import SettingNavBar from "../../components/setting/SettingNavBar";
import { PermissionCategory, Role } from "../../types/user";
import { getRolesWithPermissions } from "../../services/roleService";
import { USER_ROLE_TABS } from "../../constants/tabs";
import Tabs from "../../components/common/shared/Tabs";
import RolePermission from "../../components/setting/RolePermission";
import UserRoleManager from "../../components/setting/UserRoleManager";
import Button from "../../components/common/shared/Button";

const TeamMemberPage: React.FC = () => {
  const [rolePermissions, setRolePermissions] = React.useState<Role[]>([]);
  const [allPermissions, setAllPermissions] = React.useState<
    PermissionCategory[]
  >([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRolesWithPermissions();

        const { roles, allPermissions } = response;

        setRolePermissions(roles);
        setAllPermissions(allPermissions);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchRoles();
  }, []);

  return (
    <div>
      <AppBarLayout title="Cài đặt" />
      <PageContentLayout
        columnLayout="3-7"
        aside={<SettingNavBar />}
        content={
          <div className="p-4">
            <AppBarLayout
              title="Thành viên"
              actions={[
                <Button
                  variant="primary"
                  icon="bi-plus-lg"
                  //onClick={handleAddClick}
                >
                  Thêm người dùng
                </Button>,
              ]}
            />
            <Tabs
              defaultActiveKey="user_role"
              tabs={USER_ROLE_TABS}
              tabContents={{
                user_role: <UserRoleManager />,
                role_permission: (
                  <RolePermission
                    rolePermissions={rolePermissions}
                    allPermissions={allPermissions}
                  />
                ),
              }}
            />
          </div>
        }
      />
    </div>
  );
};

export default TeamMemberPage;
