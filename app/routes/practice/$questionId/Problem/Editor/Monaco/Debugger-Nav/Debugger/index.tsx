import Stack from './Stack'
import DataVisualize from './DataVisualize'
export default function Debugger() {
  return (
    <>
      <div className='flex flex-row'>
        <div
          style={{
            flexBasis: '100px'
          }}
        >
          <Stack />
        </div>
        <div className='flex-1'>
          <DataVisualize />
        </div>
      </div>
    </>
  )
}
