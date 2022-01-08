import * as React from "react";

import { PrioritizeValueButton } from "./PrioritizeValuesButton";
import {prioritizeOption} from "../Steps";
import {StepButton} from "../../StepButton";

export type PreselectValuesProps = {
  prioritizeOptions: prioritizeOption[] | undefined;
  onSelectOption: (coreValuesPrioritizeOption: prioritizeOption) => void;
  changeStep: (step: number) => void;
};
export const Prioritize = ({
  prioritizeOptions,
  onSelectOption,
  changeStep,
}: PreselectValuesProps) => {
  return (
    <div>
      <h1 className="text-neon-white text-center m-auto text-3xl mt-32">
        Select the values with which you identify with
      </h1>
      <div className="mx-auto my-12 max-w-7xl flex flex-row flex-wrap justify-center">
        <div className="grid grid-cols-3 gap-x-32 gap-y-3">
          {prioritizeOptions?.map((coreValue) => (
            <PrioritizeValueButton
              option={coreValue}
              onClick={onSelectOption}
              key={`${coreValue.first}${coreValue.second}`}
            />
          ))}
        </div>
      </div>
      <div className="my-12 flex justify-center items-center w-screen">
        <div className={" inline-grid grid-cols-2"}>
          <StepButton label={"previous step"} onClick={() => changeStep(1)} />
          <StepButton label={"next step"} onClick={() => changeStep(3)} />
        </div>
      </div>
    </div>
  );
};
