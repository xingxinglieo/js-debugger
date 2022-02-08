import { PrismaClient } from '@prisma/client'
import { datas } from './static'

const db = new PrismaClient()

console.log('seeding...\n\n')

async function findOrCreateCategory(name: string) {
  try {
    const category =
      (await db.category.findUnique({ where: { name } })) ??
      (await db.category.create({ data: { name } }))
    return category.id
  } catch (_e) {
    return (await db.category.findUnique({ where: { name } }))!.id
  }
}
async function seed() {
  for await (const item of datas) {
    const { question, problem } = item
    const questionRow = await db.question.create({
      data: {
        content: question.content,
        title: question.title,
        difficulty: question.difficulty, // 难度 1-4 入门 简单 中等 困难
        categories: {
          connect: await Promise.all(
            question.categories.map(c =>
              findOrCreateCategory(c).then(id => ({ id }))
            )
          )
        }
      }
    })
    await db.problem.create({
      data: {
        template: problem.template,
        callee: problem.callee,
        testInjectId: problem.testInjectId,
        answerInjectId: problem.answerInjectId,
        question: {
          connect: { id: questionRow.id }
        }
      }
    })
    for await (const sample of question.samples) {
      await db.sample.create({
        data: {
          ...sample,
          question: {
            connect: { id: questionRow.id }
          }
        }
      })
    }
  }
}

seed()
// const TabelName: (keyof typeof db)[] = ["problem","question"]
// db.question.findFirst({

// })
// function findOrCreate<T extends "question" | "problem">(tableName:T) {
//   // type  = DbType[T]["create"]
//   const table = db[tableName]
//   table
// }
// await db.$transaction(
//   (
//     [
//       'problemCase',
//       'category',
//       'sample',
//       'inject',
//       'problem',
//       'question'
//     ] as const
//   )
//     // @ts-ignore
//     .map(key => db[key].deleteMany())
// )