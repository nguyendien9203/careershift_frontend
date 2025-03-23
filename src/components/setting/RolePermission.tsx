import React, { useState } from "react";
import { PermissionCategory, Role } from "../../types/user";
import {
  assignPermissionsToRole,
  revokePermissionsFromRole,
} from "../../services/roleService";
import { message } from "antd";

type RolePermissionProps = {
  rolePermissions: Role[];
  allPermissions: PermissionCategory[];
};

const RolePermission: React.FC<RolePermissionProps> = ({
  rolePermissions: initialRolePermissions,
  allPermissions,
}) => {
  const [rolePermissions, setRolePermissions] = useState<Role[]>(
    initialRolePermissions
  );
  console.log(rolePermissions);

  const togglePermission = async (roleId: string, permissionId: string) => {
    try {
      let updatedRolePermissions: Role[] = rolePermissions.map((r) =>
        r._id === roleId
          ? {
              ...r,
              permissions: r.permissions?.some((p) => p._id === permissionId)
                ? r.permissions.filter((p) => p._id !== permissionId) // Thu hồi quyền
                : [...(r.permissions || []), { _id: permissionId, name: "" }], // Cấp quyền mới
            }
          : r
      );

      setRolePermissions(updatedRolePermissions);

      const role = rolePermissions.find((r) => r._id === roleId);
      const hadPermission = role?.permissions?.some(
        (p) => p._id === permissionId
      );

      if (hadPermission) {
        const response = await revokePermissionsFromRole(roleId, [
          permissionId,
        ]);
        message.success(response.message);
      } else {
        const response = await assignPermissionsToRole(roleId, [permissionId]);
        message.success(response.message);
      }
    } catch (error: any) {
      message.error(error.response?.data?.message || "Không thể cập nhật");
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Quản lý quyền người dùng</h2>

      <div className="grid grid-cols-4 gap-4 border-b pb-3 mb-3">
        <div className="font-semibold text-gray-700">Quyền</div>
        {rolePermissions.map((role) => (
          <div
            key={role._id}
            className="text-center font-semibold text-gray-700"
          >
            {role.name}
          </div>
        ))}
      </div>

      {/* Hàng thứ hai: Danh sách quyền và checkbox */}
      {allPermissions.map((category) => (
        <div key={category.category} className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {category.category}
          </h3>
          {category.permissions.map((permission) => (
            <div
              key={permission._id}
              className="grid grid-cols-4 gap-4 items-center mb-2"
            >
              <span className="text-gray-700">{permission.description}</span>
              {rolePermissions.map((role) => (
                <div
                  key={`${role._id}-${permission._id}`}
                  className="flex justify-center"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600 h-5 w-5"
                    checked={role.permissions?.some(
                      (p) => p._id === permission._id
                    )}
                    onChange={() => togglePermission(role._id, permission._id)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RolePermission;
