import path from 'node:path'
import generateApi from 'swagger-typescript-api'
import { Command } from 'commander'

const program = new Command()

program
  .option('-u, --url <url>', 'swagger url')
  .option('-p, --path <path>', 'swagger path')
  .option('-d, --dir <dir>', 'output dir', 'apis/swagger')

const { url, dir, path: swaggerPath } = program.parse(process.argv).opts()

const __dirname = new URL('.', import.meta.url).pathname

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
    cleanOutput: true,
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
