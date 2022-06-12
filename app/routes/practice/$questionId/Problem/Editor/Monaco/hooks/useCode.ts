import { useEffect } from "react";
import { useCodeState, useProblemState } from "~/states";
import { useLocalStorageState } from "ahooks";
/* 此hook 目的是 loacalStorage code */

export default function useCode() {
  const [code, setCode] = useCodeState();
  const [problem] = useProblemState();
  const [localCode, setlocalCode] = useLocalStorageState("code" + problem.id, {
    defaultValue: problem.template
  });
  useEffect(() => {
    if (localCode === "") {
      setCode(problem.template);
      setlocalCode(problem.template);
    } else {
      setCode(localCode);
      setlocalCode(localCode);
    }
  }, [localCode, problem.template]);
  return [code, setlocalCode] as const;
}
