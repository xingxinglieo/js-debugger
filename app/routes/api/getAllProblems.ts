import { ActionFunction } from "@remix-run/server-runtime";
import { db } from "~/utils/db.server";

export const action = async () => {
  return await db.problem.findMany({
    select: {
      id: true,
      question: {
        select: {
          title: true,
          difficulty: true,
          categories: true
        }
      }
    }
  });
};
export type Problems = PromiseResult<typeof action>;
