import { LoaderFunction } from "@remix-run/server-runtime";
import { atom, useRecoilState } from "recoil";
import Drawer, { CSS } from "~/components/Drawer";
import { Link, useFetcher } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { useEffect, useState } from "react";
import type { Problems } from "~/routes/api/getAllProblems";
import { diffcultyMap } from "~/config";

const listDrawerOpenState = atom({
  key: "listDrawerOpenState",
  default: false
});

export const useListDrawerOpenState = () => useRecoilState(listDrawerOpenState);
export default function ListDrawer() {
  const [open, setOpen] = useListDrawerOpenState();
  // const [problems, setProblems] = useState([]);
  const fetcher = useFetcher();
  useEffect(() => {
    fetcher.submit({}, { method: "post", action: "/api/getAllProblems" });
  }, []);
  // useEffect(() =>{
  // console.log(fetcher.data);
  // },[fetcher.data])
  // ({
  // where: { id },
  // include: {
  // categories: true,
  // samples: true,
  // problem: {
  // include: {
  // cases: true,
  // injects: true
  // }
  // }
  // }
  // });
  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      handler={false}
      level={null}
    >
      {fetcher.data
        ? (fetcher.data as Problems).map((data) => (
            <Link
              key={data.id}
              onClick={() => setOpen(false)}
              to={"/practice/" + data.id}
            >
              <div
                className="flex flex-row mx-5 justify-between cursor-pointer"
                style={{ lineHeight: 2.5 }}
              >
                <div>
                  <span className="text-xs text-gray-600 mr-3">{data.id}</span>
                  <span className="text-xs">{data.question.title}</span>
                </div>
                <div>
                  <span
                    className="text-xs"
                    style={{
                      color: diffcultyMap[data.question.difficulty][1]
                    }}
                  >
                    {diffcultyMap[data.question.difficulty][0]}
                  </span>
                  <span>
                    {data.question.categories.map((category) => (
                      <span
                        key={category.id}
                        className="__tag text-xs text-gray-700 rounded-lg bg-gray-100 p-1  ml-1"
                      >
                        {category.name}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </Link>
          ))
        : null}
    </Drawer>
  );
}
export { CSS };
