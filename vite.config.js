import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cpSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

function copyLegacySite() {
  return {
    name: 'copy-legacy-site',
    writeBundle(options) {
      const root = resolve(import.meta.dirname)
      const output = resolve(root, options.dir || 'dist')
      for (const directory of ['ajax', 'css', 'img', 'js', 'technosense', 'vendor']) {
        cpSync(resolve(root, directory), resolve(output, directory), { recursive: true })
      }
      for (const file of readdirSync(root)) {
        if (file.endsWith('.html') && file !== 'index.html') {
          cpSync(resolve(root, file), resolve(output, file))
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), copyLegacySite()],
  server: {
    host: 'localhost',
    port: 5173
  }
})
