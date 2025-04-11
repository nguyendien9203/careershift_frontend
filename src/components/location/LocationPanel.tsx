import React, { useEffect, useState } from "react";
import { message } from "antd";

import Panel from "../common/shared/Panel";
import Checkbox from "../common/shared/Checkbox";
import Button from "../common/shared/Button";
import { LocationPanelProps } from "../../types/filter";
import { getAllLocations } from "../../services/locationService";
import { Location } from "../../types/job";

const LocationPanel: React.FC<LocationPanelProps> = ({
  selectedItems,
  onItemChange,
}) => {
  const [locations, setLocations] = useState<Location[]>([]);

  // useEffect(() => {
  //   getAllLocations()
  //     .then((response) => {
  //       setLocations(response.data);
  //     })
  //     .catch((err: any) => {
  //       message.error(err.message || "Không thể tải danh sách vị trí.");
  //     });
  // }, []);

  return (
    <>
      <Panel title="Nơi làm việc" showBorder>
        <div className="space-y-2 mb-3">
          {locations.map((location: Location) => (
            <Checkbox
              key={location.id}
              label={location.name}
              checked={selectedItems.includes(location.name)}
              onChange={(checked) => onItemChange(location.name, checked)}
              showRemoveButton
            />
          ))}
        </div>
        <Button icon="bi-plus-lg" variant="light" size="small">
          Thêm nơi làm việc
        </Button>
      </Panel>
    </>
  );
};

export default LocationPanel;
