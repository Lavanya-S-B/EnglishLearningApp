import React, { createContext, useState } from "react";

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => prev + 1);
  };

  return (
    <ProgressContext.Provider
      value={{ progress, increaseProgress }}
    >
      {children}
    </ProgressContext.Provider>
  );
};