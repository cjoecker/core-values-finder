import * as React from "react";

import { PreselectValueButton } from "./PreselectValueButton";
import { coreValue } from "../Steps";
import { StepButton } from "../shared/StepButton";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../shared/ErrorMessage";

export type PreselectValuesProps = {
  coreValues: coreValue[] | undefined;
  onPreselectCoreValue: (coreValue: string) => void;
  changeStep: (step: number) => void;
};
export const Preselect = ({
  coreValues,
  onPreselectCoreValue,
  changeStep,
}: PreselectValuesProps) => {
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [preselectedNumber, setPreselectedNumber] = useState(0);
  useEffect(() => {
    if (coreValues) {
      const newPreselectedNumber = coreValues.filter(
        (coreValue) => coreValue.isPreselected
      ).length;
      setPreselectedNumber(newPreselectedNumber);
      if (isErrorVisible) {
        setIsErrorVisible(newPreselectedNumber < 3);
      }
    }
  }, [coreValues]);
  const errorMessage = "Please select at least 3 core values";
  const onChangeStep = () => {
    if (preselectedNumber < 3) {
      setIsErrorVisible(true);
    } else {
      changeStep(2);
    }
  };
  return (
    <div className={"my-12"}>
      <h1 className="text-neon-white text-center mx-auto text-3xl">
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
      {isErrorVisible && <ErrorMessage errorMessage={errorMessage} />}
      <div className="mt-4 flex justify-center items-center w-screen">
        <StepButton label={"next step"} onClick={onChangeStep} />
      </div>
    </div>
  );
};

