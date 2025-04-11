import React, { useEffect, useState } from "react";

import Panel from "../common/shared/Panel";
import Checkbox from "../common/shared/Checkbox";
import Button from "../common/shared/Button";
import { DepartmentPanelProps } from "../../types/filter";
import { getAllDepartments } from "../../services/deparmentServices";
import { Department } from "../../types/job";
import { message } from "antd";

const DepartmentPanel: React.FC<DepartmentPanelProps> = ({
  selectedItems,
  onItemChange,
}) => {
  const [departments, setDepartments] = useState<Department[]>([]);

  // useEffect(() => {
  //   getAllDepartments()
  //     .then((response) => setDepartments(response.data))
  //     .catch((err: any) => {
  //       message.error(err.message || "Không thể tải danh sách ban bộ phận.");
  //     });
  // }, []);

  return (
    <Panel title="Ban bộ phận" showBorder>
      <div className="space-y-2 mb-3">
        {departments.length > 0 ? (
          departments.map((department) => (
            <Checkbox
              key={department.id}
              label={department.name}
              checked={selectedItems.includes(department.name)}
              onChange={(checked) => onItemChange(department.name, checked)}
              showRemoveButton
            />
          ))
        ) : (
          <div>Không có ban bộ phận</div>
        )}
      </div>
      <Button icon="bi-plus-lg" variant="light" size="small">
        Thêm ban bộ phận
      </Button>
    </Panel>
  );
};

export default DepartmentPanel;
