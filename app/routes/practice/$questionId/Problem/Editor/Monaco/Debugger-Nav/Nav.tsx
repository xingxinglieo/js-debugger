import { atom, useCodeState, useRecoilState } from "~/states";
import { useVm } from "../hooks";

export enum NAV_TYPE {
  DEBUG,
  INPUT
}
export const navTypeState = atom({
  key: "navType",
  default: NAV_TYPE.DEBUG
});
export function useNavTypeState() {
  return useRecoilState(navTypeState);
}

export default function Nav() {
  const { vm, excute, step, compile, current, exports, newFlag } = useVm();
  const [code] = useCodeState();
  const [navType, setNavType] = useNavTypeState();
  return (
    <div className="flex flex-row justify-between h-12 px-4 py-2 w-full select-none">
      <div className="text-sm text-gray-500 whitespace-nowrap">
        <button
          onClick={() => setNavType(NAV_TYPE.DEBUG)}
          className={
            "mr-5 rounded-md h-full py-1.5 px-2 hover:bg-gray-200 transition" +
            (navType === NAV_TYPE.DEBUG ? " bg-gray-200" : "")
          }
        >
          运行过程
        </button>
        <button
          onClick={() => setNavType(NAV_TYPE.INPUT)}
          className={
            "rounded-md h-full py-1.5 px-2 hover:bg-gray-200 transition" +
            (navType === NAV_TYPE.INPUT ? " bg-gray-200" : "")
          }
        >
          用例输入
        </button>
      </div>
      <div className="text-sm text-gray-500 line-ellipsis">
        {`${vm.originStep}步 ` +
          (vm.done && !vm.isError
            ? `结果: ${exports}`
            : newFlag
            ? "编译成功"
            : `当前指令/表达式值: ${current}`)}
      </div>
      <div className="text-sm text-gray-500 whitespace-nowrap">
        <button
          onClick={() => {
            vm.setInjects([]);
            compile(code);
          }}
          className="mr-5 button-main"
        >
          编译
        </button>
        <button onClick={step} className="mr-5 button-side">
          下一步
        </button>
        <button onClick={excute} className="button-side">
          执行
        </button>
      </div>
    </div>
  );
}
