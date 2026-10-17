import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Inlines the built stylesheet into index.html.
 *
 * The site is a single page whose CSS is a few KB gzipped, so a separate
 * <link rel="stylesheet"> only buys a render-blocking round trip. Inlining it
 * takes the stylesheet off the critical path entirely.
 */
function inlineCss() {
  return {
    name: 'inline-css',
    enforce: 'post',
    apply: 'build',
    generateBundle(_options, bundle) {
      const html = Object.values(bundle).find((f) => f.fileName.endsWith('.html'))
      if (!html) return

      for (const asset of Object.values(bundle)) {
        if (!asset.fileName.endsWith('.css')) continue

        const tag = new RegExp(
          `<link[^>]+href="/?${asset.fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`,
        )
        if (!tag.test(html.source)) continue

        html.source = html.source.replace(
          tag,
          `<style>${asset.source.toString().trim()}</style>`,
        )
        delete bundle[asset.fileName]
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCss()],
})
