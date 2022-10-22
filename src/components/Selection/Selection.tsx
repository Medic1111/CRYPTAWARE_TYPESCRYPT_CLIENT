import classes from "./Selection.module.css";
import { useContext } from "react";
import { TickerCtx } from "../../features/ticker-ctx";
import { SelectionCtx } from "../../features/selection-ctx";

const Selection: React.FC<{ invalid: boolean }> = ({ invalid }) => {
  const tickerMgr = useContext(TickerCtx);
  const selectionMgr = useContext(SelectionCtx);
  const filterArr = ["trend", "diff", "compound"];
  return (
    <section className={classes.section}>
      {invalid ? (
        <h2 className={classes.h2}>INVALID TICKR</h2>
      ) : (
        <h2 className={classes.h2}>
          {tickerMgr.ticker} {new Date().toISOString().slice(5, 10)}
        </h2>
      )}

      <div className={classes.filterBox}>
        {filterArr.map((el) => {
          return (
            <>
              <p onClick={() => selectionMgr.select(el)} className={classes.p}>
                {el.toUpperCase()}
              </p>
              <p
                onClick={() => selectionMgr.select(el)}
                className={classes.mobile}
              >
                {el.toUpperCase().slice(0, 1)}
              </p>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Selection;
