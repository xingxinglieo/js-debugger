import {
  MenuIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/outline'
import { Link } from 'remix'
import { useQuestionState } from '~/states'
import { useListDrawerOpenState } from '~/routes/practice/ListDrawer'

export default function Header() {
  const [question] = useQuestionState()

  /* 控制 ListDrawer 开关 */
  const [_open, setOpen] = useListDrawerOpenState()

  return (
    <div className='flex bg-white h-14 px-5 shadow'>
      <div className='flex-1 flex flex-row justify-between items-center'>
        <button
          onClick={() => setOpen(true)}
          className='px-2 py-1 border-2 border-slate-200 rounded text-xs text-center'
        >
          <MenuIcon className='h-4 w-4 inline-block' aria-hidden='true' />
          <span className='align-middle ml-1'>题目列表</span>
        </button>
        <div>
          {question.id > 1 || question.id === -1 ? (
            <Link to={'/practice/' + (question.id - 1)}>
              <button className='px-2 py-1 border-2 border-slate-200 rounded text-xs text-center '>
                <ChevronLeftIcon
                  className='h-4 w-4 inline-block'
                  aria-hidden='true'
                />
                <span className='align-middle ml-1'>上一题</span>
              </button>
            </Link>
          ) : null}
          {question.id < question.count || question.id === -1 ? (
            <Link to={'/practice/' + (question.id + 1)}>
              <button className='px-2 py-1 border-2 border-slate-200 rounded text-xs text-center ml-4'>
                <ChevronRightIcon
                  className='h-4 w-4 inline-block'
                  aria-hidden='true'
                />
                <span className='align-middle ml-1'>下一题</span>
              </button>
            </Link>
          ) : null}
        </div>
      </div>
      <div className='flex-1 flex flex-row-reverse items-center'>
        <div
          className='h-8 w-8 rounded-full bg-no-repeat bg-cover'
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330)'
          }}
        ></div>
      </div>
    </div>
  )
}
