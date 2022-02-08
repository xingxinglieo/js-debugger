import { atom, useRecoilState } from 'recoil'
import Drawer, { CSS } from '~/components/Drawer'

const listDrawerOpenState = atom({
  key: 'listDrawerOpenState',
  default: false
})
export const useListDrawerOpenState = () => useRecoilState(listDrawerOpenState)
export default function ListDrawer() {
  const [open, setOpen] = useListDrawerOpenState()
  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      handler={false}
      level={null}
    >
      11111
    </Drawer>
  )
}
export { CSS }
