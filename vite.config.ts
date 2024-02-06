import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'NiVisa',
      fileName: 'ni-visa'
    },
    rollupOptions: {
      external: ['koffi'],
      output: {
        globals: { koffi: 'koffi' }
      }
    }
  },
  plugins: [nodePolyfills(), dts({ include: './lib/*.ts', rollupTypes: true })]
})
