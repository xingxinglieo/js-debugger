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
      `// 默认代码 点击编译后即可单步执行
function MergeSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  const middle = Math.floor(len / 2)
  const left = MergeSort(arr.slice(0, middle))
  const right = MergeSort(arr.slice(middle, len))
  return merge(left, right)
  // 核心函数
  function merge(left, right) {
    let l = 0 
    let r = 0
    let result = []
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l])
        l++
      } else {
        result.push(right[r])
        r++
      }
    }
    result = result.concat(left.slice(l, left.length))
    result = result.concat(right.slice(r, right.length))
    return result
  }
}
MergeSort([10, 9, 8, 7, 6, 1, 2, 3, 4, 5])`
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
