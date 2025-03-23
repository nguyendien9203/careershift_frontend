import React, { useEffect } from "react";
import AppBarLayout from "../../layouts/AppBarLayout";
import PageContentLayout from "../../layouts/PageContentLayout";
import SettingNavBar from "../../components/setting/SettingNavBar";
import { CreateUserPayload, PermissionCategory, Role } from "../../types/user";
import { getRolesWithPermissions } from "../../services/roleService";
import { USER_ROLE_TABS } from "../../constants/tabs";
import Tabs from "../../components/common/shared/Tabs";
import RolePermission from "../../components/setting/RolePermission";
import UserRoleManager from "../../components/setting/UserRoleManager";
import Button from "../../components/common/shared/Button";
import AddUserDrawer from "../../components/setting/AddUserDrawer";
import { addUser, deleteUser } from "../../services/userService";
import { message } from "antd";

const TeamMemberPage: React.FC = () => {
  const [rolePermissions, setRolePermissions] = React.useState<Role[]>([]);
  const [allPermissions, setAllPermissions] = React.useState<
    PermissionCategory[]
  >([]);

  const [isUserDrawerOpen, setIsUserDrawerOpen] = React.useState(false);
  const [refreshUsers, setRefreshUsers] = React.useState(false);

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

  const handleAddUser = async (formData: CreateUserPayload) => {
    try {
      const response = await addUser(formData);
      setIsUserDrawerOpen(false);
      message.success(response.message);
      setRefreshUsers((prev) => !prev);
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      const response = await deleteUser(userId);
      message.success(response.message);
      setRefreshUsers((prev) => !prev);
    } catch (error: any) {
      message.error(error.message);
    }
  };
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
                  onClick={() => setIsUserDrawerOpen(true)}
                >
                  Thêm người dùng
                </Button>,
              ]}
            />
            <Tabs
              defaultActiveKey="user_role"
              tabs={USER_ROLE_TABS}
              tabContents={{
                user_role: (
                  <UserRoleManager
                    refreshUsers={refreshUsers}
                    onDeleteUser={handleDeleteUser}
                  />
                ),
                role_permission: (
                  <RolePermission
                    rolePermissions={rolePermissions}
                    allPermissions={allPermissions}
                  />
                ),
              }}
            />

            {isUserDrawerOpen && (
              <AddUserDrawer
                isOpen={isUserDrawerOpen}
                onClose={() => setIsUserDrawerOpen(false)}
                onSubmit={handleAddUser}
              />
            )}
          </div>
        }
      />
    </div>
  );
};

export default TeamMemberPage;
