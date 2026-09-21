import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cpSync } from 'node:fs'
import { resolve } from 'node:path'

function copyLegacySite() {
  return {
    name: 'copy-legacy-site',
    writeBundle(options) {
      const root = resolve(import.meta.dirname)
      const output = resolve(root, options.dir || 'dist')
      for (const directory of ['css', 'img', 'technosense', 'vendor']) {
        cpSync(resolve(root, directory), resolve(output, directory), { recursive: true })
      }
      cpSync(resolve(root, 'send-message.php'), resolve(output, 'send-message.php'))
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
