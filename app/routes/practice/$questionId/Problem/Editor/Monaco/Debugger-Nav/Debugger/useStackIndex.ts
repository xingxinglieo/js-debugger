import { atom, useRecoilState } from 'recoil'
const stackIndexState = atom({
  key: 'stackIndexState',
  default: 0
})
export default function useStackIndex() {
  return useRecoilState(stackIndexState)
}
