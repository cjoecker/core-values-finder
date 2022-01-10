import * as React from "react";
import { useEffect, useState } from "react";
import {prioritizeOption} from "../Steps";
import {StepButton} from "../shared/StepButton";

export type PreselectValuesProps = {
  prioritizeOptions: prioritizeOption[];
  changeStep: (step:number)=>void;
};
export const Results = ({ prioritizeOptions, changeStep }: PreselectValuesProps) => {
  const [results, setResults] = useState<string[]>([]);
  useEffect(() => {
    setResults(getResults(prioritizeOptions));
  }, [prioritizeOptions]);

  return (
    <div className={'my-12'}>
      <h1 className="text-neon-white text-center m-auto text-3xl mt-32">
        These are your core values
      </h1>
      <div className="mx-auto my-12 ">
        {results.map((result) => (
          <h2
            className="text-neon-blue text-4xl text-center mx-auto my-2"
            key={result}
          >
            {result}
          </h2>
        ))}
      </div>
      <div className="my-20 flex justify-center items-center w-screen">
        <StepButton label={"previous step"} onClick={() => changeStep(2)} />
      </div>
    </div>
  );
};

export function getResults(prioritizeOptions: prioritizeOption[]) {
  const selectedOptions = prioritizeOptions
    .filter((option) => option.selected)
    .map((option) => option.selected) as string[];

  const numberOfSelectedOptions = getSelectedDuplicatesNumber(selectedOptions);
  const sortedSelectedOptions = Object.keys(numberOfSelectedOptions).sort(function (
    a,
    b
  ) {
    return numberOfSelectedOptions[b] - numberOfSelectedOptions[a];
  });
  const sortedNumberOfSelections = (
      Object.values(numberOfSelectedOptions) as number[]
  ).sort(function (a, b) {
    return b - a;
  });
  const highestNumberOfSelections = new Set(sortedNumberOfSelections.slice(0, 3));
  return sortedSelectedOptions.filter((option) =>
    highestNumberOfSelections.has(numberOfSelectedOptions[option])
  );
}

function getSelectedDuplicatesNumber(options: string[]) {
  const optionsDuplicates: Record<string, number> = {};
  for (const option of options) {
    if (option) {
      optionsDuplicates[option] = (optionsDuplicates[option] || 0) + 1;
    }
  }
  return optionsDuplicates;
}
