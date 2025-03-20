import React, { useMemo, useState } from "react";

import Tag from "../common/shared/Tag";
import { ApplicationStage, STAGE_ITEMS } from "../../constants/applicationStages";
import { StageData } from "../../types/application";

interface ApplicationStageNavigatorProps {
  stages: Map<ApplicationStage, StageData>; 
  selectedStage: ApplicationStage;
  onStageClick: (stage: ApplicationStage) => void;
};

const ApplicationStageNavigator: React.FC<ApplicationStageNavigatorProps> = ({
  stages,
  selectedStage, 
  onStageClick
}) => {
  const [activeStageId, setActiveStageId] = useState<ApplicationStage | null>(selectedStage);
  const stagesData = useMemo(() => {
    return STAGE_ITEMS.map((stage) => {
      const stageData = stages.get(stage.id);
      return {
        ...stage,
        activeCandidates: stageData?.activeCandidates || 0,
        passedCandidates: stageData?.pendingCandidates || 0,
      };
    });
  }, [stages]);

  console.log("Received stage in ApplicationStageNavigator:", selectedStage);

  return (
    <div className="h-[80px] flex border border-secondary-100 rounded-t-[5px] bg-white">
      {stagesData.map((stage, index) => (
        <>
          <div
            key={stage.id}
            className={`flex-1 flex items-center justify-center h-full p-2 relative ${
              activeStageId === stage.id ? "text-primary-500" : "text-black"
            }`}
            onClick={() => {
              setActiveStageId(stage.id);
              onStageClick(stage.id);
            }}
          >
            <div className="flex items-center justify-center gap-x-4">
              <span className="flex items-center justify-center w-8 h-8 p-2 border border-secondary-100 rounded-full text-primary-500">
                <i className={`bi ${stage.icon} text-sm`}></i>
              </span>
              <div className="flex flex-col gap-y-2">
                <h5 className="text-sm">{stage.label}</h5>
                <div className="flex items-center gap-x-2">
                  <Tag
                    label={stage.activeCandidates.toString()}
                    variant="light"
                    className={
                      activeStageId === stage.id
                        ? "text-primary-500"
                        : "text-black"
                    }
                  />
                  <Tag
                    label={`+ ${stage.passedCandidates.toString()}`}
                    variant="light"
                    className={
                      activeStageId === stage.id
                        ? "text-primary-500"
                        : "text-black"
                    }
                  />
                </div>
              </div>
            </div>

            {activeStageId === stage.id && (
              <div className="absolute bottom-0 left-0 w-full border-b border-primary-500"></div>
            )}
          </div>

          {index < STAGE_ITEMS.length - 1 && (
            <div className="h-full border-l border-secondary-100"></div>
          )}
        </>
      ))}
    </div>
  );
};

export default ApplicationStageNavigator;
