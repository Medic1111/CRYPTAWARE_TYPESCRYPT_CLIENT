import { createContext, useState } from "react";

interface ctxValue {
  ticker: string;
  setTicker: React.Dispatch<React.SetStateAction<string>>;
}

export const TickerCtx = createContext<ctxValue>({
  ticker: "BTC",
  setTicker: () => {},
});

const TickerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ticker, setTicker] = useState<string>("BTC");

  return (
    <TickerCtx.Provider
      value={{
        ticker: ticker,
        setTicker: setTicker,
      }}
    >
      {children}
    </TickerCtx.Provider>
  );
};

export default TickerProvider;
