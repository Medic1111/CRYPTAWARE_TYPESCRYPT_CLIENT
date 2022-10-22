import React, { createContext, useState } from "react";

interface selectionCtxValues {
  trendOnly: boolean;
  setTrendOnly: React.Dispatch<React.SetStateAction<boolean>>;
  diffOnly: boolean;
  setDiffOnly: React.Dispatch<React.SetStateAction<boolean>>;
  select: (which: string) => void;
}

export const SelectionCtx = createContext<selectionCtxValues>({
  trendOnly: false,
  setTrendOnly: () => {},
  diffOnly: false,
  setDiffOnly: () => {},
  select: (which) => {},
});

const SelectionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [trendOnly, setTrendOnly] = useState(false);
  const [diffOnly, setDiffOnly] = useState(false);

  const reset = () => {
    setDiffOnly(false);
    setTrendOnly(false);
  };

  const select = (which: string) => {
    if (which === "compound") {
      return reset();
    }
    reset();
    which === "diff" ? setDiffOnly(true) : setTrendOnly(true);
  };

  return (
    <SelectionCtx.Provider
      value={{
        trendOnly: trendOnly,
        setTrendOnly: setTrendOnly,
        diffOnly: diffOnly,
        setDiffOnly: setDiffOnly,
        select: select,
      }}
    >
      {children}
    </SelectionCtx.Provider>
  );
};

export default SelectionProvider;
