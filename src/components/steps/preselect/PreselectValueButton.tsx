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
      className={`flex-none rounded-md p-1 m-2 border-solid border-1 ${
        isSelected
          ? "text-neon-orange border-neon-orange"
          : "text-neon-blue border-neon-blue"
      }`}
    >
      {label}
    </button>
  );
};
