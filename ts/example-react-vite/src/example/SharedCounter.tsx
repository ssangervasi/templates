import React from "react";
import { useExampleContext } from "./context";

export const SharedCounter: React.FC = () => {
  const { state, setState } = useExampleContext();

  const handleClick = React.useCallback(
    (delta: number) => () =>
      setState((prev) => {
        const draft = structuredClone(prev);
        draft.count += delta;
        return draft;
      }),
    [setState],
  );

  return (
    <div>
      <strong>A counter with shared state??</strong>
      <br />
      <em>What a unique example!</em>
      <div>
        <div
          style={{
            // Why not some css in js too?
            fontVariantNumeric: "tabular-nums",
            display: "inline-flex",
            flexFlow: "row nowrap",
            gap: 5,
          }}
        >
          <button onClick={handleClick(-5)}>-5</button>
          <button onClick={handleClick(-1)}>-1</button>
          <span>{state.count}</span>
          <button onClick={handleClick(+1)}>+1</button>
          <button onClick={handleClick(+5)}>+5</button>
        </div>
      </div>
    </div>
  );
};
