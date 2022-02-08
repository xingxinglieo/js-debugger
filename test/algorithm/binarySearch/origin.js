// 逻辑很简单，主要是边界处理的问题
export default function binarySearch(arr, num) {
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
}