import React from "react";

import Panel from "../common/shared/Panel";
import Checkbox from "../common/shared/Checkbox";
import { jobStatusOptions } from "../../constants/jobStatus";
import { JobStatusPanelProps } from "../../types/filter";

const JobStatusPanel: React.FC<JobStatusPanelProps> = ({
  selectedItems,
  onItemChange,
  statusCounts = {}
}) => {

  return (
    <Panel title="Trạng thái" showBorder>
      <div className="space-y-2">
        {jobStatusOptions.map((status) => (
          <Checkbox
            key={status.value}
            label={status.label}
            checked={selectedItems.includes(status.value)}
            onChange={(checked) => onItemChange(status.value, checked)}
            leftValue={statusCounts[status.value]?.toString() || "0"}
          />
        ))}
      </div>
    </Panel>
  );
};

export default JobStatusPanel;
