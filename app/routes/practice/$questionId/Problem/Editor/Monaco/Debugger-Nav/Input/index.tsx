import { useProblemState } from "~/states";
import { useCodeState } from "~/states";
import { useVm } from "../../hooks";
export default function Input() {
  const [problem] = useProblemState();
  const { vm, compile } = useVm();
  const [code] = useCodeState();

  console.log(problem);
  const setInjects = () => {
    let injects = [...problem.injects.map((i) => i.content)];
    if (problem.answer && problem.inputFormat && problem.outputFormat) {
      injects = [
        ...injects,
        problem.answer.content,
        problem.inputFormat.content,
        problem.outputFormat.content
      ];
    }
    vm.setInjects(injects);
  };
  return (
    <>
      <div
        className="flex flex-row"
        onClick={() => {
          setInjects();
          compile(code);
        }}
      >
        {problem.cases.map((c) => (
          <span
            key={c.id}
            className="__tag text-sm text-gray-700 rounded-lg bg-gray-100 p-1  ml-1"
          >
            {c.input}
          </span>
        ))}
      </div>
    </>
  );
}
