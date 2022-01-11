import * as React from "react";

import { PrioritizeValueButton } from "./PrioritizeValuesButton";
import { prioritizeOption } from "../Steps";
import { StepButton } from "../shared/StepButton";
import { useState } from "react";
import { ErrorMessage } from "../shared/ErrorMessage";
import { errorMessageNotEnoughSelected } from "../../../constants/errorMessages";
import { useEffectUnsafe } from "../../../utils/unsafeHooks";

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
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  useEffectUnsafe(() => {
    if (prioritizeOptions) {
      const newSelectedNumber = prioritizeOptions.filter(
        (coreValue) => coreValue.selected
      ).length;
      setSelectedNumber(newSelectedNumber);
      if (isErrorVisible) {
        setIsErrorVisible(newSelectedNumber < 3);
      }
    }
  }, [prioritizeOptions]);
  const onChangeNextStep = () => {
    if (selectedNumber < 3) {
      setIsErrorVisible(true);
    } else {
      changeStep(3);
    }
  };
  return (
    <div className={"my-12"}>
      <h1 className="text-lg-neon-white text-center m-auto text-3xl">
        Select the core value of the two, with which you identify yourself the
        most
      </h1>
      <div className="mx-auto my-12 max-w-7xl flex flex-row flex-wrap justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:grid-cols-3 lg:gap-x-32 gap-y-3">
          {prioritizeOptions?.map((coreValue) => (
            <PrioritizeValueButton
              option={coreValue}
              onClick={onSelectOption}
              key={`${coreValue.first}${coreValue.second}`}
            />
          ))}
        </div>
      </div>
      {isErrorVisible && (
        <ErrorMessage errorMessage={errorMessageNotEnoughSelected} />
      )}
      <div className="mt-4 flex justify-center items-center w-screen">
        <div className={" inline-grid grid-cols-2"}>
          <StepButton label={"previous step"} onClick={() => changeStep(1)} />
          <StepButton label={"next step"} onClick={onChangeNextStep} />
        </div>
      </div>
    </div>
  );
};
