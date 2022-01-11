import * as React from "react";

export type StepProps = {
  isFirstStep?: boolean;
  isLastStep?: boolean;
  isSelected: boolean;
  text: string;
};
export const Step = ({
  isFirstStep,
  isLastStep,
  isSelected,
  text,
}: StepProps) => {
  return (
    <div className={"flex-1"}>
      <div className={"w-full flex"}>
        <div className={"flex-1 flex items-center"}>
          {!isFirstStep && (
            <div className={"flex-1 h-px bg-white !opacity-100"} />
          )}
        </div>
        <div
          className={`rounded-full w-3 h-3 flex-none mx-2 
           ${
             isSelected
               ? `bg-cyan-400 border-neon-blue`
               : `bg-white border-neon-white`
           }`}
        />
        <div className={"flex-1 flex items-center"}>
          {!isLastStep && (
            <div className={"flex-1 h-px bg-white !opacity-100"} />
          )}
        </div>
      </div>
      <div
        className={`mt-2 mx-2 ${
          isSelected ? `text-neon-blue` : `text-neon-white`
        }`}
      >
        {text}
      </div>
    </div>
  );
};
