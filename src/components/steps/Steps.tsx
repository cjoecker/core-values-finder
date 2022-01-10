import * as React from "react";
import { useEffect, useState } from "react";
import { Results } from "./results/Results";
import { Prioritize } from "./prioritize/Prioritize";
import { Preselect } from "./preselect/Preselect";
import { AnimatePresence } from "framer-motion";
import { StepAnimation } from "./shared/StepAnimation";
import {coreValuesList} from "../../constants/coreValues";

export const Steps = () => {
  const [coreValues, setCoreValues] = useState<coreValue[]>([]);
  const [prioritizeOptions, setPrioritizeOptions] = useState<
    prioritizeOption[]
  >([]);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    setCoreValues(
        shuffle(coreValuesList).map((coreValue) => ({
        name: coreValue,
        isPreselected: false,
        isSelected: false,
      }))
    );
  }, []);

  useEffect(() => {
    setPrioritizeOptions(getPrioritizeOptions(coreValues));
  }, [coreValues]);

  const onChangeStep = (targetStep: number) => {
    setActiveStep(targetStep);
  };

  const onPreselectCoreValue = (name: string) => {
    setCoreValues((coreValues) =>
      coreValues?.map((coreValue) =>
        coreValue.name === name
          ? { ...coreValue, isPreselected: !coreValue.isPreselected }
          : coreValue
      )
    );
  };

  const onPrioritizeCoreValue = (selectedOption: prioritizeOption) => {
    setPrioritizeOptions((options) =>
      options?.map((option) =>
        option.first === selectedOption.first &&
        option.second === selectedOption.second
          ? { ...selectedOption }
          : option
      )
    );
  };
  return (
    <div className={"flex justify-center m-auto"}>
      <AnimatePresence exitBeforeEnter>
        {activeStep === 1 && (
          <StepAnimation animationKey={"step-1"}>
            <Preselect
              key={"step1"}
              coreValues={coreValues}
              onPreselectCoreValue={onPreselectCoreValue}
              changeStep={(newStep) => {
                onChangeStep(newStep);
              }}
            />
          </StepAnimation>
        )}
        {activeStep === 2 && (
          <StepAnimation animationKey={"step-2"}>
            <Prioritize
              key={"step2"}
              prioritizeOptions={prioritizeOptions}
              onSelectOption={onPrioritizeCoreValue}
              changeStep={(newStep) => {
                onChangeStep(newStep);
              }}
            />
          </StepAnimation>
        )}
        {activeStep === 3 && (
          <StepAnimation animationKey={"step-3"}>
            <Results
              key={"step3"}
              prioritizeOptions={prioritizeOptions}
              changeStep={(newStep) => {
                onChangeStep(newStep);
              }}
            />
          </StepAnimation>
        )}
      </AnimatePresence>
    </div>
  );
};

export type coreValue = {
  name: string;
  isPreselected: boolean;
};
export interface prioritizeOption {
  first: string;
  second: string;
  selected: string | undefined;
}

function getPrioritizeOptions(
  coreValues: coreValue[]
): prioritizeOption[] {
  const preselectedValues = coreValues.filter(coreValue => coreValue.isPreselected)
  const coreValuesOptions: prioritizeOption[] = [];
  for (let i = 0; i < preselectedValues.length; i += 1) {
    for (let j = i + 1; j < preselectedValues.length; j += 1) {
      coreValuesOptions.push({
        first: preselectedValues[i].name,
        second: preselectedValues[j].name,
        selected: "",
      });
    }
  }
  return coreValuesOptions;
}

function shuffle(array: string[]) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
