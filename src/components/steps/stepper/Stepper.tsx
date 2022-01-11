import * as React from "react";
import { Step } from "./Step";

export type StepperProps = {
  activeStep: number;
};
export const Stepper = ({ activeStep }: StepperProps) => {
  return (
    <div className={"flex-row mx-auto max-w-lg my-4"}>
      <div className={"flex w-full"}>
        <Step isFirstStep isSelected={activeStep === 1} text={"Preselection"} />
        <Step isSelected={activeStep === 2} text={"Priorization"} />
        <Step isLastStep isSelected={activeStep === 3} text={"Results"} />
      </div>
    </div>
  );
};
