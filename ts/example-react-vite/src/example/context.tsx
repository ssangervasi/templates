import React from "react";
import { INITIAL_STATE, type ExampleSharedState } from "./sharedState";

type ExampleContextWrapper = {
  state: ExampleSharedState;
  setState: React.Dispatch<React.SetStateAction<ExampleSharedState>>;
};

const ExampleContext = React.createContext<ExampleContextWrapper | undefined>(
  null,
);

export const ExampleProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, setState] = React.useState<ExampleSharedState>(INITIAL_STATE);

  const wrapper: ExampleContextWrapper = React.useMemo(
    () => ({ state, setState }),
    [state, setState],
  );

  return (
    <ExampleContext.Provider value={wrapper}>
      {children}
    </ExampleContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useExampleContext = (): ExampleContextWrapper => {
  const wrapper = React.useContext(ExampleContext);
  if (!wrapper) {
    throw new Error("ExampleContext unset");
  }

  return wrapper;
};
