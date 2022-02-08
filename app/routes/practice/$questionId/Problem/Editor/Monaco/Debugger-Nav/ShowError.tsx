import useVm from '../hooks/useVm'
export default function ShowError() {
  const { error } = useVm()
  const title = error?.isCompileError
    ? '编译错误'
    : error?.isValidationError
    ? '验证失败'
    : '执行错误'
  return (
    <>
      {error ? (
        <div className='w-full mb-5'>
          <div className='button-main w-full text-base text-red-600 bg-red-100 hover:bg-red-200 mb-2'>
            {title}
            <span className='text-sm'>
              {error?.message ? `: ${error.message}` : ''}
            </span>
          </div>
        </div>
      ) : null}
    </>
  )
}
