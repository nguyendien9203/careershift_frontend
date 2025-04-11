import React, { useState, useEffect } from "react";
import Drawer from "../common/shared/Drawer";
import Input from "../common/shared/Input";
import Button from "../common/shared/Button";
import Select from "../common/shared/Select";
import { message } from "antd";
import { getRoles } from "../../services/roleService";
import { CreateUserPayload, Role } from "../../types/user";

interface AddUserDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: CreateUserPayload) => void;
}

const AddUserDrawer: React.FC<AddUserDrawerProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<CreateUserPayload>({
    name: "",
    email: "",
    roles: "",
  });
  const [roles, setRoles] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const rolesResponse = await getRoles();
        const formattedRoles = rolesResponse.map((role: Role) => ({
          value: role._id,
          label: role.name,
        }));
        setRoles(formattedRoles);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const handleChange = (field: keyof CreateUserPayload, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = [
      { field: "name", value: formData.name },
      { field: "email", value: formData.email },
      { field: "roles", value: formData.roles },
    ]
      .map(({ field, value }) => validateField(field, value))
      .filter((error) => error);

    if (validationErrors.length > 0) {
      message.error(validationErrors[0]);
      return;
    }

    onSubmit(formData);
  };

  const validateField = (field: string, value: string): string | null => {
    switch (field) {
      case "name":
        if (!value) return "Vui lòng nhập họ tên";
        return null;
      case "email":
        if (!value) return "Vui lòng nhập email";
        if (!/\S+@\S+\.\S+/.test(value)) return "Email không hợp lệ";
        return null;
      case "roles":
        if (!value) return "Vui lòng chọn vai trò";
        return null;
      default:
        return null;
    }
  };

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      position="right"
      width="w-[500px]"
    >
      <div className="p-4 space-y-4">
        <h2 className="text-lg font-semibold">Thêm người dùng</h2>
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-3">
            <Input
              label="Họ và tên"
              type="text"
              placeholder="Họ và tên"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              validate={(value) => validateField("name", value)}
            />
          </div>

          <div className="w-full mb-3">
            <Input
              label="Email"
              type="email"
              placeholder="Email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              validate={(value) => validateField("email", value)}
            />
          </div>

          <div className="w-full mb-3">
            <Select
              label="Vai trò"
              options={roles}
              value={formData.roles}
              onChange={(value) => handleChange("roles", value as string)}
              placeholder="Chọn vai trò..."
              className="w-full"
              validate={(value) => validateField("roles", value as string)}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="light" onClick={onClose}>
              Hủy
            </Button>
            <Button variant="primary" type="submit">
              Lưu
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  );
};

export default AddUserDrawer;
