import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// https://vitejs.dev/config/
export default defineConfig({


  plugins: [react(),wasm(),
    topLevelAwait()],

        // ...other config settings
        optimizeDeps: {
          esbuildOptions: {
              // Node.js global to browser globalThis
              define: {
                  global: 'globalThis'
              },
              // Enable esbuild polyfill plugins
              plugins: [
                  NodeGlobalsPolyfillPlugin({
                      buffer: true
                  })
              ]
          }
      }
 
})
