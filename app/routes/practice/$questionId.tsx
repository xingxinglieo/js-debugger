import { Outlet, useLoaderData } from "@remix-run/react";
import { LoaderFunction, redirect } from "@remix-run/server-runtime";
import { db } from "~/utils/db.server";
import jsonResponse from "~/utils/jsonResponse.server";
import { useQuestionState, useProblemState } from "~/states";
import { useEffect } from "react";

import TopicCSS from "~/styles/topic.css";
export function links() {
  return [{ rel: "stylesheet", href: TopicCSS }];
}

const getData = async (id: number) => {
  const question = await db.question.findUnique({
    where: { id },
    include: {
      categories: true,
      samples: true,
      problem: {
        include: {
          cases: true,
          injects: true
          // callee:true,
          // answerInjectId       :true,
          // inputFormatInjectId  :true,
          // outputFormatInjectId :true,
          // testInjectId         :true, // 测试函数注入 的 id
        }
      }
    }
  });
  console.log(question);
  if (question && question.problem) {
    const { problem } = question;
    console.log(problem);
    const returnQuetion: Omit<typeof question, "problem" | "_count"> & {
      count: number;
    } = { count: await db.question.count(), ...question };
    const {
      inputFormatInjectId,
      outputFormatInjectId,
      testInjectId,
      answerInjectId
    } = question.problem;
    return {
      question: { ...returnQuetion, problemId: problem.id },
      problem: {
        ...problem,
        inputFormat:
          inputFormatInjectId &&
          (await db.inject.findUnique({
            where: { id: problem.inputFormatInjectId }
          })),
        outputFormat:
          outputFormatInjectId &&
          (await db.inject.findUnique({
            where: { id: problem.outputFormatInjectId }
          })),
        test:
          testInjectId &&
          (await db.inject.findUnique({
            where: { id: problem.testInjectId }
          })),
        answer:
          answerInjectId &&
          (await db.inject.findUnique({
            where: { id: problem.answerInjectId }
          }))
      }
    };
  } else return null;
};
export type LoaderDataType = NonNullable<getLoaderDataType<typeof getData>>;

export const loader: LoaderFunction = async ({ params }) => {
  try {
    if (params.questionId?.match(/\d+/)) {
      const questionId = Number(params.questionId);
      const data = await getData(questionId);
      console.log(data);
      if (data) {
        return jsonResponse({
          code: 0,
          msg: "Load Success",
          data
        });
      }
    }
  } catch (e) {
    console.log(e);
    return e;
  }
  // return redirect("/404");
};

export default function QuestionIdRoute() {
  const { question, problem } = useLoaderData<LoaderDataType>().data!;
  const [_question, setQuestion] = useQuestionState();
  const [_problem, setProblem] = useProblemState();

  /* 
    放入 useEffect 中否则报错：
    Warning: Cannot update a component (`Batcher`) while rendering a different 
    Recoil bug, 见 issue: https://github.com/facebookexperimental/Recoil/issues/12 
  */
  useEffect(() => {
    setQuestion(question);
    setProblem(problem);
  }, [question, problem]);

  return <Outlet />;
}
