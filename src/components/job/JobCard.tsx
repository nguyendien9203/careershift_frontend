import React from "react";

import Tag from "../common/shared/Tag";
import Card from "../common/shared/Card";
import Button from "../common/shared/Button";
import { Location, Department } from "../../types/job";

interface JobCardProps {
  title: string;
  subTitle?: string;
  locations: Location[];
  level: string;
  departments: Department[];
  onDetailClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  subTitle,
  locations,
  level,
  departments,
  onDetailClick,
}) => {
  return (
    <Card
      className="mb-3 shadow-md"
      header={
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-y-1 flex-[2]">
            <h3 className="text-base font-semibold text-black">{title}</h3>
            {subTitle && <p className="text-xs text-gray-500">{subTitle}</p>}
          </div>
          <div className="flex-[1] flex justify-end">
            <Button variant="light" size="small" onClick={onDetailClick} className="w-fit">
              Xem chi tiết
            </Button>
          </div>
        </div>
      }
      content={
        <div className="flex items-center flex-wrap gap-x-2">
          {locations.map((loc) => (
            <Tag
              key={loc.id}
              label={loc.name}
              icon="bi-geo"
              variant="success"
            />
          ))}

          {departments.map((dept) => (
            <Tag key={dept.id} label={dept.name} variant="purple" />
          ))}

          <Tag label={level} variant="light" />
        </div>
      }
    />
  );
};

export default JobCard;
