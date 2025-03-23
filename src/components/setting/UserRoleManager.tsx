import React, { useEffect, useState } from "react";
import { Role, User } from "../../types/user";
import { getAllUsers } from "../../services/userService";
import { getRoles } from "../../services/roleService";
import Tag from "../common/shared/Tag";
import { USER_STATUS } from "../../constants/userStatus";
import { Select } from "antd";
import Button from "../common/shared/Button";

const UserRoleManager: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<{ value: string; label: string }[]>([]);
  const [userRoles, setUserRoles] = useState<{ [key: string]: string }>({});

  const statusVariant: Record<
    USER_STATUS,
    "success" | "light" | "danger" | "warning"
  > = {
    [USER_STATUS.ACTIVE]: "success",
    [USER_STATUS.INACTIVE]: "light",
    [USER_STATUS.DELETED]: "danger",
    [USER_STATUS.LOCKED]: "warning",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, rolesResponse] = await Promise.all([
          getAllUsers(),
          getRoles(),
        ]);

        const formattedRoles = rolesResponse.map((role: Role) => ({
          value: role._id,
          label: role.name,
        }));

        setUsers(usersResponse);
        setRoles(formattedRoles);

        const rolesMap: { [key: string]: string } = {};
        usersResponse.forEach((user: User) => {
          rolesMap[user._id] = user.roles._id;
        });

        setUserRoles(rolesMap);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const updateRole = (userId: string, roleId: string) => {
    setUserRoles((prev) => ({ ...prev, [userId]: roleId }));

    setUsers(
      users.map((user) =>
        user._id === userId
          ? {
              ...user,
              roles: {
                _id: roleId,
                name: roles.find((role) => role.value === roleId)?.label || "",
              },
            }
          : user
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Quản lý người dùng</h2>
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user._id}
            className="grid grid-cols-6 items-center border-b pb-2 gap-4"
          >
            {/* Name + Email */}
            <div className="col-span-3">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            {/* Status */}
            <div className="flex justify-center col-span-1">
              <Tag label={user.status} variant={statusVariant[user.status]} />
            </div>

            {/* Role Dropdown */}
            <div className="flex justify-center col-span-1">
              <Select
                options={roles}
                value={userRoles[user._id]}
                onChange={(value) => updateRole(user._id, value)}
                placeholder="Chọn vai trò..."
                className="w-[200px]"
              />
            </div>

            {/* Delete Button */}
            <div className="flex justify-end col-span-1">
              <Button variant="danger" icon="bi-trash" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRoleManager;
