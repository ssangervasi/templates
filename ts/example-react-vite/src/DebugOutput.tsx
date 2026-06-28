import React from "react";

// Toggle for debugging
const DEBUG = false;
// const DEBUG = true;

/**
 * Tiny component for displaying some json-formatted debugging info in a page.
 */
export const DebugOutput: React.FC<{
  title: string;
  data: unknown;
}> = ({ title, data }) => {
  if (!DEBUG) {
    return null;
  }
  return (
    <div>
      <strong>(DEBUG) {title}</strong>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
