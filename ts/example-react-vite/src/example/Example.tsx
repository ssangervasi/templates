import { ExampleProvider } from "./context";
import { SharedCounter } from "./SharedCounter";

export const Example: React.FC = () => {
  return (
    <ExampleProvider>
      <div>
        <h2>Example stuff</h2>
        <SharedCounter />
      </div>
    </ExampleProvider>
  );
};
