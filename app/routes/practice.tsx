import { Outlet } from '@remix-run/react'
import Header from './practice/Header'
import ListDrawer, {
  CSS as DrawerCSS
} from '~/routes/practice/ListDrawer'

export function links() {
  return [{ rel: 'stylesheet', href: DrawerCSS }]
}

export default function PracticeRoute() {
  return (
    <>
      <ListDrawer />
      <div className='flex flex-col h-screen w-screen bg-gray-100 overflow-hidden'>
        <div className='mb-4'>
          <Header />
        </div>
        <div className='flex-1 overflow-hidden'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
