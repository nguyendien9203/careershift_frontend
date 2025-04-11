import React from "react";

import SearchBar from "../common/shared/SearchBar";
import JobStatusPanel from "../job/JobStatusPanel";
import DepartmentPanel from "../department/DepartmentPanel";
import JobLevelPanel from "../job/JobLevelPanel";
import LocationPanel from "../location/LocationPanel";
import { JobStatus } from "../../constants/jobStatus";
import { JobLevel } from "../../constants/jobLevel";
import { FilterProps } from "../../types/filter";

interface JobFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  statusFilter: FilterProps<JobStatus>;
  departmentFilter: FilterProps<string>;
  levelFilter: FilterProps<JobLevel>;
  locationFilter: FilterProps<string>;
  statusCounts: { [key: string]: number };
}

const JobFilter: React.FC<JobFilterProps> = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  departmentFilter,
  levelFilter,
  locationFilter,
  statusCounts
}) => {
  return (
    <div className="flex flex-col space-y-3">
      {/* Search Bar */}
      <SearchBar
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Tìm kiếm vị trí tuyển dụng..."
      />

      {/* Recruitment Filters */}
      <JobStatusPanel
        selectedItems={statusFilter.selectedItems}
        onItemChange={statusFilter.onItemChange}
        statusCounts={statusCounts}
      />
      <JobLevelPanel
        selectedItems={levelFilter.selectedItems}
        onItemChange={levelFilter.onItemChange}
      />
      <DepartmentPanel
        selectedItems={departmentFilter.selectedItems}
        onItemChange={departmentFilter.onItemChange}
      />
      <LocationPanel
        selectedItems={locationFilter.selectedItems}
        onItemChange={locationFilter.onItemChange}
      />
    </div>
  );
};

export default JobFilter;
