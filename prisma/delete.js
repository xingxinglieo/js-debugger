const fs = require('fs')
const path = require('path')
try {
  fs.rmSync(path.resolve(process.cwd(), 'prisma/dev.db'))
} catch (_e) {

}