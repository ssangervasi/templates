/**
 * Super simple, one-big-state object
 */
export type ExampleSharedState = {
  count: number;
};

/**
 * A single const for simplicity.
 */
export const INITIAL_STATE: ExampleSharedState = {
  count: 0,
};
