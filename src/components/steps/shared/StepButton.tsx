import * as React from "react";

export type ValueButtonProps = {
  label: string;
  onClick: () => void;
};

export const StepButton = ({ label, onClick }: ValueButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex-none rounded-md p-2 m-2 text-neon-white border-neon-white text-l border-solid border-1 hover:bg-white/10 active:bg-white/50 transition-colors`}
    >
      {label.toUpperCase()}
    </button>
  );
};
