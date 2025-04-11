import React from "react";

import Panel from "../common/shared/Panel";
import Checkbox from "../common/shared/Checkbox";
import { JobLevel, jobLevelOptions } from "../../constants/jobLevel";
import { JobLevelPanelProps } from "../../types/filter";

const JobLevelPanel: React.FC<JobLevelPanelProps> = ({
  selectedItems,
  onItemChange,
}) => {
  
  return (
    <Panel title="Cấp bậc" showBorder>
        <div className="space-y-2 mb-3">
            {jobLevelOptions.map((level: { value: JobLevel, label: string }) => (
                <Checkbox 
                    key={level.value}
                    label={level.label}
                    checked={selectedItems.includes(level.value)}
                    onChange={(checked) => onItemChange(level.value, checked)}
                />
            ))}
        </div>
    </Panel>
  );
};

export default JobLevelPanel;
