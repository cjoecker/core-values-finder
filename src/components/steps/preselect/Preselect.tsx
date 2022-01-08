import * as React from "react";

import {PreselectValueButton} from "./PreselectValueButton";
import {coreValue} from "../Steps";
import {StepButton} from "../../StepButton";

export type PreselectValuesProps = {
  coreValues: coreValue[] | undefined;
  onPreselectCoreValue: (coreValue: string) => void;
  changeStep: (step:number)=>void;
};
export const Preselect = ({
  coreValues,
  onPreselectCoreValue,
    changeStep
}: PreselectValuesProps) => {
  return (
    <div>
      <h1 className="text-neon-white text-center m-auto text-3xl mt-32">
        Select the values with which you identify with
      </h1>
      <div className="mx-auto my-12 max-w-7xl flex flex-row flex-wrap justify-center">
        {coreValues?.map((coreValue) => (
          <PreselectValueButton
            label={coreValue.name}
            onClick={() => onPreselectCoreValue(coreValue.name)}
            isSelected={coreValue.isPreselected}
            key={coreValue.name}
          />
        ))}
      </div>
      <div className="my-12 flex justify-center items-center w-screen">
          <StepButton label={"next step"} onClick={() => changeStep(2)} />
      </div>
    </div>
  );
};
