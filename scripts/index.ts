import path from 'node:path'
import generateApi from 'swagger-typescript-api'
import { Command } from 'commander'

const program = new Command()

program
  .requiredOption('-u, --url <url>', 'swagger url')
  .option('-d, --dir <dir>', 'output dir', 'apis/swagger')

const { url, dir } = program.parse(process.argv).opts()

const __dirname = new URL('.', import.meta.url).pathname

console.info('url:', url)
console.info('__dirname:', __dirname)

export function generateSwaggerApi(options: { dir: string; url: string }) {
  const { dir, url } = options
  generateApi.generateApi({
    name: 'ApiModel.ts',
    templates: path.resolve(__dirname, 'templates'),
    extraTemplates: [
      {
        name: 'nice-axios.ts',
        path: path.resolve(__dirname, 'templates/nice-axios.ejs')
      }
    ],
    cleanOutput: true,
    output: path.resolve(process.cwd(), dir),
    url,
    httpClientType: 'axios',
    singleHttpClient: true,
    generateClient: true,
    extractEnums: true,

    modular: true,
    unwrapResponseData: true
  })
}

generateSwaggerApi({
  dir,
  url
})
