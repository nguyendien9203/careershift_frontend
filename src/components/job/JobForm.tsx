import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import AppBarLayout from "../../layouts/AppBarLayout";
import PageContentLayout from "../../layouts/PageContentLayout";
import Button from "../common/shared/Button";
import Panel from "../common/shared/Panel";
import Input from "../common/shared/Input";
import TextArea from "../common/shared/TextArea";
import Select from "../common/shared/Select";
import { generateBreadcrumb } from "../common/shared/Breadcrumb";
import { JobLevel, jobLevelOptions } from "../../constants/jobLevel";
import { Department, Job, Location } from "../../types/job";
import { JobStatus } from "../../constants/jobStatus";
import { message } from "antd";

const JobForm: React.FC = () => {
  const location = useLocation();
  const breadcrumb = generateBreadcrumb(location.pathname);

  const [formData, setFormData] = useState<Job>({
    title: "",
    startDate: "",
    endDate: "",
    status: JobStatus.DRAFT,
    level: null,
    departments: [],
    locations: [],
    description: "",
    requirements: "",
    benefits: "",
    other: "",
  });

  //const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (field: string, value: string | JobStatus | JobLevel |  Department[] | Location[]) => {
    
      setFormData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = [
      { field: "title", value: formData.title },
      { field: "description", value: formData.description },
      { field: "requirements", value: formData.requirements },
      { field: "benefits", value: formData.benefits },
      { field: "startDate", value: formData.startDate },
      { field: "endDate", value: formData.endDate },
      { field: "level", value: formData.level },
      { field: "department", value: formData.departments },
      { field: "location", value: formData.locations },
    ]
      .map(({ field, value }) =>
        validateField(field, value, formData.startDate, formData.endDate)
      )
      .filter((error) => error);

    if (validationErrors.length > 0) {
      message.error(validationErrors[0]);
      return;
    }

    // Proceed with form submission if no errors
    console.log("Form submitted successfully");
  };

  const validateField = (
    field: string,
    value: string | JobStatus | JobLevel |  Department[] | Location[] | null,
    startDate?: string,
    endDate?: string
  ): string | null => {
    switch (field) {
      case "title":
        if (!value) return "Tiêu đề không được để trống";
        return null;
      case "description":
        if (!value) return "Mô tả công việc không được để trống";
        return null;
      case "requirements":
        if (!value) return "Yêu cầu ứng viên không được để trống";
        return null;
      case "benefits":
        if (!value) return "Quyền lợi không được để trống";
        return null;
      case "startDate":
        if (!value) return "Ngày bắt đầu không được để trống";
        if (Array.isArray(value)) {
          return "Ngày bắt đầu không hợp lệ";
        }
        if (endDate && new Date(value) > new Date(endDate)) {
          return "Ngày bắt đầu không được lớn hơn ngày kết thúc";
        }
        return null;
      case "endDate":
        if (!value) return "Ngày kết thúc không được để trống";
        if (Array.isArray(value)) {
          return "Ngày kết thúc không hợp lệ";
        }
        if (startDate && new Date(value) < new Date(startDate)) {
          return "Ngày kết thúc không được nhỏ hơn ngày bắt đầu";
        }
        return null;
      case "level":
        if (!value) return "Cấp bậc không được để trống";
        return null;
      case "departments":
        if (Array.isArray(value) && !value.length) return "Ban bộ phận không được để trống";
        return null;
      case "locations":
        if (Array.isArray(value) && !value.length) return "Vị trí làm việc không được để trống";
        return null;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <AppBarLayout
        title="Thêm tuyển dụng"
        breadcrumb={breadcrumb}
        actions={[<Button variant="primary">Cập nhật</Button>]}
      />

      <PageContentLayout
        coloumLayout="6-4"
        aside={
          <Panel title="Thông tin chung">
            {/* Level */}
            <div className="w-full mb-3">
              <Select
                options={jobLevelOptions}
                label="Cấp bậc"
                placeholder="Chọn cấp bậc"
                layout="vertical"
                isClose
                value={formData.level || undefined}
                onChange={(value) => handleInputChange("level", value as JobLevel)}
                validate={(value) => validateField("level", value as JobLevel)}
              />
            </div>

            {/* Departments */}
            {/* <div className="w-full mb-3">
              <Select
                options={jobLevelOptions}
                label="Ban bộ phận"
                placeholder="Chọn ban bộ phận"
                layout="vertical"
                isMulti
                isClose
                value={formData.departments?.map((dept) => dept.id.toString())}
                onChange={(value) => handleInputChange("departments", value)}
                validate={(value) => validateField("departments", value)}
              />
            </div> */}

            {/* Location field */}
            {/* <div className="w-full mb-3">
              <Select
                options={jobLevelOptions}
                label="Vị trí làm việc"
                placeholder="Chọn vị trí"
                layout="vertical"
                isMulti
                isClose
                value={formData.locations?.map((loc) => loc.id.toString())}
                onChange={(value) => handleInputChange("locations", value)}
                validate={(value) => validateField("locations", value)}
              />
            </div> */}
          </Panel>
        }
        content={
          <Panel title="Chi tiết công việc">
            {/* Title field */}
            <div className="w-full mb-3">
              <Input
                label="Tiêu đề"
                type="text"
                placeholder="Nhập tiêu đề của bạn"
                id="title"
                layout="horizontal"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                validate={(value) => validateField("title", value)}
              />
            </div>

            <div className="w-full mb-3 flex items-start">
              <label
                htmlFor=""
                className="block text-black font-normal mr-2 w-1/3"
              >
                Thời gian diễn ra
              </label>
              <div className="flex items-start justify-between w-full gap-x-2">
                {/* Start Date */}
                <Input
                  type="date"
                  id="startDate"
                  value={formData.startDate}
                  onChange={(e) =>
                    handleInputChange("startDate", e.target.value)
                  }
                  validate={(value) =>
                    validateField(
                      "startDate",
                      value,
                      formData.startDate,
                      formData.endDate
                    )
                  }
                />
                <div>Đến</div>
                {/* End Date */}
                <Input
                  type="date"
                  id="endDate"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange("endDate", e.target.value)}
                  validate={(value) =>
                    validateField(
                      "endDate",
                      value,
                      formData.startDate,
                      formData.endDate
                    )
                  }
                />
              </div>
            </div>

            {/* Description field */}
            <div className="w-full mb-3">
              <TextArea
                label="Mô tả công việc"
                placeholder="Nhập nội dung..."
                layout="horizontal"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                validate={(value) => validateField("description", value)}
              />
            </div>

            {/* Requirements field */}
            <div className="w-full mb-3">
              <TextArea
                label="Yêu cầu ứng viên"
                placeholder="Nhập nội dung..."
                layout="horizontal"
                value={formData.requirements}
                onChange={(e) =>
                  handleInputChange("requirements", e.target.value)
                }
                validate={(value) => validateField("requirements", value)}
              />
            </div>

            {/* Benefits field */}
            <div className="w-full mb-3">
              <TextArea
                label="Quyền lợi"
                placeholder="Nhập nội dung..."
                layout="horizontal"
                value={formData.benefits}
                onChange={(e) => handleInputChange("benefits", e.target.value)}
                validate={(value) => validateField("benefits", value)}
              />
            </div>

            {/* Other field */}
            <div className="w-full mb-3">
              <TextArea
                label="Thông tin khác"
                placeholder="Nhập nội dung..."
                layout="horizontal"
                value={formData.other}
                onChange={(e) => handleInputChange("other", e.target.value)}
              />
            </div>
          </Panel>
        }
      />
    </form>
  );
};

export default JobForm;
