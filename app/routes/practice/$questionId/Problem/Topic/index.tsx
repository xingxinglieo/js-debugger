import { Fragment, useEffect, useRef } from "react";
import { useQuestionState } from "~/states";

import { diffcultyMap } from "~/config";

export default function Topic() {
  const [question] = useQuestionState();
  const scrollDomRef = useRef<null | HTMLDivElement>(null);

  /* 修正图片大小，防止过大或者过小 */
  useEffect(() => {
    const imgs = document.querySelectorAll<HTMLImageElement>(
      "img[src*='equation']"
    );
    imgs.forEach((img) => {
      img.style.display = "inline-block";
      img.onload = () => {
        /* 以 21 px 为 1 倍，18 px 为基准，等比例放大 */
        img.style.height = (img.height / 21) * 18 + "px";
      };
    });
  }, [question]);

  /* 切换页数时，滚动回顶部 */
  useEffect(() => {
    if (scrollDomRef.current) {
      scrollDomRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [question]);
  return question.id > 0 ? (
    <>
      <div
        ref={scrollDomRef}
        className="px-5 bg-white mr-2 pb-5 overflow-y-auto h-full"
      >
        <h1 className="text-xl font-extrabold py-3 text-gray-900">
          {question.id + "、 " + question.title}
        </h1>
        <div className="flex flex-row items-center mb-3">
          {question.categories.length ? (
            <>
              <span className="text-gray-800 text-xs mr-1">知识点</span>
              {question.categories.map((category) => (
                <span
                  key={category.id}
                  className="__tag text-xs text-gray-700 rounded-lg bg-gray-100 p-1  ml-1"
                >
                  {category.name}
                </span>
              ))}
            </>
          ) : null}
          <span
            className="text-xs ml-2"
            style={{
              color: diffcultyMap[question.difficulty][1],
            }}
          >
            {diffcultyMap[question.difficulty][0]}
          </span>
        </div>
        <h2 className="text-base font-bold mb-2">描述</h2>
        <div
          className="text-sm text-gray-500"
          dangerouslySetInnerHTML={{ __html: question.content }}
        ></div>
        {question.samples.map((sample, index) => {
          return (
            <Fragment key={sample.id}>
              <h3 className="text-base font-bold mb-2 mt-4">
                {"示例 " + (index + 1)}
              </h3>
              <div className="p-3 text-sm bg-gray-100 text-gray-500 rounded">
                <div className="flex flex-row">
                  <span className="mr-2 whitespace-nowrap">输入: </span>
                  <pre className="inline-block break-words whitespace-pre-wrap break-all">
                    {sample.input}
                  </pre>
                </div>
                <div className="flex flex-row mt-2">
                  <span className="mr-2 whitespace-nowrap">返回值: </span>
                  <pre className="inline-block break-words whitespace-pre-wrap break-all">
                    {sample.output}
                  </pre>
                </div>
                {sample.note ? (
                  <div className="flex flex-row mt-2">
                    <span className="mr-2 whitespace-nowrap">说明: </span>
                    <pre className="inline-block break-words whitespace-pre-wrap break-all">
                      {sample.note}
                    </pre>
                  </div>
                ) : null}
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  ) : null;
}
