import * as React from "react";

export type ErrorMessageProps = {
  errorMessage: string;
};
export const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <div className={"text-center text-base animate-bounce"}>{errorMessage}</div>
  );
};
