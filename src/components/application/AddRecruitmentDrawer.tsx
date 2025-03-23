import React, { useState } from "react";
import Drawer from "../common/shared/Drawer";
import Input from "../common/shared/Input";
import Button from "../common/shared/Button";
import {
  ApplyForJobPayload,
  ApplyForJobRequest,
} from "../../types/application";
import { message } from "antd";

interface AddRecruitmentDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
  reloadApplications: () => void;
}

const AddRecruitmentDrawer: React.FC<AddRecruitmentDrawerProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<ApplyForJobRequest>({
    name: "",
    email: "",
    phone: "",
    source: "",
    cvFile: null,
    notes: "",
  });

  const handleChange = (field: keyof ApplyForJobRequest, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      cvFile: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = [
      { field: "name", value: formData.name },
      { field: "email", value: formData.email },
      { field: "phone", value: formData.phone },
      { field: "source", value: formData.source },
    ]
      .map(({ field, value }) => validateField(field, value))
      .filter((error) => error);

    if (validationErrors.length > 0) {
      message.error(validationErrors[0]);
      return;
    }

    // validate file
    if (!formData.cvFile) {
      message.error("Vui lòng chọn file CV");
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
      case "phone":
        if (!value) return "Vui lòng nhập số điện thoại";
        return null;
      case "source":
        if (!value) return "Vui lòng nhập nguồn ứng tuyển";
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
        <h2 className="text-lg font-semibold">Thêm ứng viên</h2>
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
            <Input
              label="Số điện thoại"
              type="tel"
              placeholder="Số điện thoại"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              validate={(value) => validateField("phone", value)}
            />
          </div>

          <div className="w-full mb-3">
            <Input
              label="Nguồn ứng tuyển"
              value={formData.source}
              placeholder="Nguồn ứng tuyển"
              id="source"
              onChange={(e) => handleChange("source", e.target.value)}
              validate={(value) => validateField("source", value)}
            />
          </div>

          <div className="w-full mb-3">
            <label className="block font-normal">Tải lên CV</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
            />
            {formData.cvFile && (
              <p className="text-sm">{formData.cvFile.name}</p>
            )}
          </div>

          <div className="w-full mb-3">
            <Input
              label="Ghi chú"
              placeholder="Ghi chú"
              id="notes"
              value={formData.notes}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, notes: e.target.value }))
              }
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

export default AddRecruitmentDrawer;
