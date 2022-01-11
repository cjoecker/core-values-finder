import * as React from "react";
import { prioritizeOption } from "../Steps";
import {
  actionStylesBlue,
  actionStylesOrange,
} from "../preselect/PreselectValueButton";

export type ValueButtonProps = {
  option: prioritizeOption;
  onClick: (label: prioritizeOption) => void;
};

export const PrioritizeValueButton = ({
  option,
  onClick,
}: ValueButtonProps) => {
  return (
    <div className="flex justify-center">
      <div className="m-2 inline-grid grid-cols-2">
        <button
          onClick={() =>
            onClick({
              ...option,
              selected:
                option.first === option.selected ? undefined : option.first,
            })
          }
          className={`flex-1 rounded-l-md py-1 px-2 border-r-0 ${
            option.first === option.selected
              ? `text-neon-orange border-neon-orange border-1 ${actionStylesOrange}`
              : `text-neon-blue border-neon-blue border-1-l preselect-shadow-l ${actionStylesBlue}`
          }`}
        >
          {option.first}
        </button>
        <button
          onClick={() =>
            onClick({
              ...option,
              selected:
                option.second === option.selected ? undefined : option.second,
            })
          }
          className={`flex-1 rounded-r-md py-1 px-2  ${
            option.second === option.selected
              ? `text-neon-orange border-neon-orange border-1 ${actionStylesOrange}`
              : `text-neon-blue border-neon-blue ${actionStylesBlue}`
          } ${
            option.first === option.selected
              ? "border-1-r preselect-shadow-r"
              : "border-1"
          }`}
        >
          {option.second}
        </button>
      </div>
    </div>
  );
};
