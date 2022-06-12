import { useVm } from '../../hooks'
import useStackIndex from './useStackIndex'
import jsonViewClone from '~/utils/jsonViewClone'
import ReactJson from '~/components/ReactJson'
export default function Stack() {
  const [stackIndex] = useStackIndex()
  const { stack } = useVm()
  const frame = stack[stackIndex]
  return (
    <>
      {frame && stack.length ? (
        <ReactJson
          collapsed={false}
          displayDataTypes={false}
          quotesOnKeys={false}
          enableClipboard={true}
          indentWidth={2}
          shouldCollapse={({ namespace }) => namespace.length > 3}
          theme='shapeshifter:inverted'
          name='scope'
          src={jsonViewClone({
            local: frame.local,
            ...frame.blocks.reduceRight(
              (obj, value, index, arr) => (
                (obj[`block level ${arr.length - index}`] = value), obj
              ),
              {} as ExtendsionObject
            ),
            closure: frame.closure,
            this: frame.$__this
          })}
        />
      ) : null}
    </>
  )
}
