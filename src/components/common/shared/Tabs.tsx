import React, { useState } from "react";

import { SubItem } from "../../../types/item";

interface TabProps {
  item: SubItem;
  isActive: boolean;
  onClick: (id: string) => void;
}

const Tab: React.FC<TabProps> = ({ item, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(item.id)}
      className={`py-2 text-sm focus:outline-none relative ${
        isActive ? "text-primary-500" : "text-black"
      }`}
    >
      {item.icon && (
        <i
          className={`bi ${item.icon} mr-2 ${
            isActive ? "text-primary-500" : "text-secondary-700"
          }`}
        ></i>
      )}
      {item.label}

      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"></div>
      )}
    </button>
  );
};

interface TabsProps {
  defaultActiveKey?: string;
  tabs: SubItem[];
  tabContents: Record<string, React.ReactNode>;
}

const Tabs: React.FC<TabsProps> = ({ defaultActiveKey, tabs, tabContents }) => {
  const [activeKey, setActiveKey] = useState<string>(
    defaultActiveKey || tabs[0]?.id
  );

  const handleTabClick = (id: string) => {
    setActiveKey(id);
  };

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex justify-evenly gap-x-4 relative border-b border-secondary-100 px-4">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            item={tab}
            isActive={activeKey === tab.id}
            onClick={handleTabClick}
          />
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">{tabContents[activeKey]}</div>
    </div>
  );
};

export default Tabs;
