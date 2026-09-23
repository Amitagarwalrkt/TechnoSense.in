import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodemailer from 'nodemailer'
import { cpSync, existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

function jsonResponse(response, status = 200) {
  return (res) => {
    res.statusCode = status
    res.setHeader('Content-Type', 'application/json; charset=UTF-8')
    res.end(JSON.stringify(response))
  }
}

function readSmtpConfig(root) {
  const configPath = resolve(root, 'smtp-config.php')
  if (!existsSync(configPath)) return null
  const source = readFileSync(configPath, 'utf8')
  const value = (key) => source.match(new RegExp("['\\\"]" + key + "['\\\"]\\s*=>\\s*['\\\"]([^'\\\"]*)['\\\"]"))?.[1] || ''
  return {
    host: value('host'),
    port: Number(value('port') || 587),
    username: value('username'),
    password: value('password').replace(/\s+/g, ''),
    fromEmail: value('from_email'),
    fromName: value('from_name')
  }
}

function localContactApi() {
  return {
    name: 'local-contact-api',
    configureServer(server) {
      const root = resolve(import.meta.dirname)
      server.middlewares.use('/send-message.php', async (req, res, next) => {
        if (req.method !== 'POST') return next()
        try {
          const chunks = []
          for await (const chunk of req) chunks.push(chunk)
          const fields = Object.fromEntries(new URLSearchParams(Buffer.concat(chunks).toString()))
          const name = fields.name?.trim() || ''
          const email = fields.email?.trim() || ''
          const phone = fields.phone?.trim() || ''
          const requirement = fields.requirement?.trim() || ''
          const message = fields.message?.trim() || ''
          if (!name || !email || !phone || !requirement || !message) {
            return jsonResponse({ response: 'error', errorMessage: 'Please fill in all required fields.' }, 400)(res)
          }
          if (!/^\S+@\S+\.\S+$/.test(email)) {
            return jsonResponse({ response: 'error', errorMessage: 'Please enter a valid email address.' }, 400)(res)
          }
          const config = readSmtpConfig(root)
          if (!config?.username || !config.password) {
            return jsonResponse({ response: 'error', errorMessage: 'Local SMTP is not configured.' }, 500)(res)
          }
          const transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port,
            secure: config.port === 465,
            auth: { user: config.username, pass: config.password }
          })
          const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nRequirement: ${requirement}\n\nMessage:\n${message}\n`
          await transporter.sendMail({
            from: { address: config.fromEmail || config.username, name: config.fromName },
            to: 'amitagarwalrkt@gmail.com',
            replyTo: email,
            subject: `New Contact Form Query: ${requirement}`,
            text: body
          })
          await transporter.sendMail({
            from: { address: config.fromEmail || config.username, name: config.fromName },
            to: email,
            replyTo: 'amitagarwalrkt@gmail.com',
            subject: 'We received your query',
            text: `Hello ${name},\n\nWe received your mail.\nThe TechnoSense team will contact you shortly.\n\nRegards,\nTechnoSense Team\n`
          })
          return jsonResponse({ response: 'success' })(res)
        } catch (error) {
          console.error('Local contact email error:', error)
          return jsonResponse({ response: 'error', errorMessage: 'Email delivery failed. Check the local SMTP settings.' }, 500)(res)
        }
      })
    }
  }
}

function copyLegacySite() {
  return {
    name: 'copy-legacy-site',
    writeBundle(options) {
      const root = resolve(import.meta.dirname)
      const output = resolve(root, options.dir || 'dist')
      for (const directory of ['css', 'img', 'technosense', 'vendor']) {
        const source = resolve(root, directory)
        if (existsSync(source)) cpSync(source, resolve(output, directory), { recursive: true })
      }
      const mailEndpoint = resolve(root, 'send-message.php')
      if (existsSync(mailEndpoint)) cpSync(mailEndpoint, resolve(output, 'send-message.php'))
    }
  }
}

export default defineConfig({
  plugins: [react(), localContactApi(), copyLegacySite()],
  build: {
    sourcemap: false
  },
  server: {
    host: 'localhost',
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
    port: 5173
  }
})
