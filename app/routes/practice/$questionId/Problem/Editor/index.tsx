import { useProblemState } from "~/states";
import Monaco from "./Monaco";

export default function Editor() {
  const [problem] = useProblemState();
  return (
    <div className="h-full bg-white ml-2" key={problem.id}>
      <Monaco />
    </div>
  );
}
