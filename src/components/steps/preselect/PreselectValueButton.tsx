import * as React from "react";

export type ValueButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

export const PreselectValueButton = ({
  label,
  onClick,
  isSelected,
}: ValueButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex-none rounded-md p-1 m-2 border-solid border-1 transition-colors ${
        isSelected
          ? `text-neon-orange border-neon-orange ${actionStylesOrange}`
          : `text-neon-blue border-neon-blue hover:bg-cyan-400/10 active:bg-cyan-400/50 ${actionStylesBlue}`
      }`}
    >
      {label}
    </button>
  );
};

export const actionStylesOrange =
  "hover:bg-orange-400/10 active:bg-orange-400/50";
export const actionStylesBlue = "hover:bg-cyan-400/10 active:bg-cyan-400/50";
