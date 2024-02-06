import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
// import commonjsExternals from 'vite-plugin-commonjs-externals'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'NiVisa',
      fileName: 'ni-visa'
    },
    rollupOptions: {
      external: ['koffi', /^node:.+/],
      output: { globals: (moduleName) => moduleName }
    }
  },
  plugins: [dts({ include: './lib/*.ts', rollupTypes: true })]
})
