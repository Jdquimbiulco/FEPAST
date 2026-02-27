import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'

const source = resolve('public/.htaccess')
const destination = resolve('dist/.htaccess')

if (!existsSync(source)) {
  console.log('No se encontró public/.htaccess, se omite copia.')
  process.exit(0)
}

mkdirSync(dirname(destination), { recursive: true })
copyFileSync(source, destination)
console.log('Archivo .htaccess copiado a dist/.htaccess')
