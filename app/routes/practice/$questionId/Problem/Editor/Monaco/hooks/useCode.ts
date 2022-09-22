import { useEffect } from "react";
import { useCodeState, useProblemState } from "~/states";
import { useLocalStorageState } from "ahooks";
/* 此hook 目的是 loacalStorage code */

export default function useCode() {
  const [code, setCode] = useCodeState();
  const [problem] = useProblemState();
  const [localCode, setlocalCode] = useLocalStorageState("code" + problem.id, {
    defaultValue:
      problem.template ||
      `function binarySearch(arr, num) {
      let left = 0
      let right = arr.length - 1
      let middle
      while (right - left > 1) {
        middle = Math.floor((left + right) / 2)
        const now = arr[middle]
        if (num === now) return middle
        if (num > now) left = middle
        else right = middle
      }
      if (arr[right] === num) return right
      if (arr[left] === num) return left
      return -1
    }`
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
