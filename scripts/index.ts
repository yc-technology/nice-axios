import path from 'node:path'
import generateApi from 'swagger-typescript-api'
import { Command } from 'commander'
import { fileURLToPath } from 'node:url'
const program = new Command()

program
  .option('-u, --url <url>', 'swagger url')
  .option('-p, --path <path>', 'swagger path')
  .option('-d, --dir <dir>', 'output dir', 'apis/swagger')
  .option('-c', '--clean', 'clean output dir')

const { url, dir, path: swaggerPath, clean } = program.parse(process.argv).opts()

// 获取当前文件的路径
const __filename = fileURLToPath(import.meta.url)

// 获取当前文件的目录
const __dirname = path.dirname(__filename)

export function generateSwaggerApi() {
  generateApi.generateApi({
    name: 'ApiModel.ts',
    templates: path.resolve(__dirname, '../../templates'),
    extraTemplates: [
      {
        name: 'nice-axios.ts',
        path: path.resolve(__dirname, '../../templates/nice-axios.ejs')
      }
    ],
    cleanOutput: clean,
    output: path.resolve(process.cwd(), dir),
    url,
    input: swaggerPath ? path.resolve(process.cwd(), swaggerPath) : undefined,
    httpClientType: 'axios',
    singleHttpClient: true,
    generateClient: true,
    extractEnums: true,

    modular: true,
    unwrapResponseData: true
  })
}

generateSwaggerApi()
