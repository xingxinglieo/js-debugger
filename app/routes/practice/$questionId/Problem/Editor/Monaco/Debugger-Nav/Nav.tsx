import { useCodeState } from '~/states'
import { useVm } from '../hooks'

export default function Nav() {
  const { vm, excute, step, compile, current, exports, newFlag } = useVm()
  const [code] = useCodeState()
  return (
    <div className='flex flex-row justify-between h-12 px-4 py-2 w-full select-none'>
      <div className='text-sm text-gray-500 whitespace-nowrap'>
        <button className='mr-5 rounded-md h-full py-1.5 px-2 hover:bg-gray-200 transition'>
          运行过程
        </button>
        <button className='rounded-md h-full py-1.5 px-2 hover:bg-gray-200 transition'>
          自测输入
        </button>
      </div>
      <div className='text-sm text-gray-500 line-ellipsis'>
        {`${vm.originStep}步 ` +
          (vm.done && !vm.isError
            ? `结果: ${exports}`
            : newFlag
            ? '编译成功'
            : `当前指令/表达式值: ${current}`)}
      </div>
      <div className='text-sm text-gray-500 whitespace-nowrap'>
        <button onClick={() => compile(code)} className='mr-5 button-main'>
          编译
        </button>
        <button onClick={step} className='mr-5 button-side'>
          下一步
        </button>
        <button onClick={excute} className='button-side'>
          执行
        </button>
      </div>
    </div>
  )
}
