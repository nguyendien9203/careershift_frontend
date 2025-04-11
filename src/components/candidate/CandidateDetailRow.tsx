import React from "react";

interface CandidateDetailRowProps {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

const CandidateDetailRow: React.FC<CandidateDetailRowProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center justify-between border border-secondary-100 rounded-[5px] overflow-hidden h-8">
      {/* Label Section */}
      <div className="flex items-center gap-x-2 w-1/3 px-2 py-1 bg-gray-100">
        {icon && <i className={`bi ${icon} text-secondary-700`}></i>}
        <span className="text-secondary-700">{label}</span>
      </div>

      {/* Divider */}
      <div className="w-px h-full bg-secondary-100"></div>

      {/* Value Section */}
      <div className="w-2/3 px-2 py-1 text-black font-normal">{value}</div>
    </div>
  );
};

export default CandidateDetailRow;
