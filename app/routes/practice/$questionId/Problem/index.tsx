import Topic from './Topic'
import Editor from './Editor'

export default function Problem() {
  return (
    <div className='all-full flex flex-row'>
      <div className='flex-1 '>
        <Topic />
      </div>
      <div className='flex-1'>
        <Editor />
      </div>
    </div>
  )
}
