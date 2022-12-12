import { resolve } from "path";
import { defineConfig } from 'vite';
import { terser } from "rollup-plugin-terser";
import { fileURLToPath } from 'url'

const config = {
  client: {
    entry: resolve(__dirname, "./src/client.js"),
    fileName: "client",
  },
  server: {
    entry: resolve(__dirname, "./src/index.js"),
    fileName: "server",
  },
};

const currentConfig = config[process.env.LIB_NAME];

if (currentConfig === undefined) {
  throw new Error('LIB_NAME is not defined or is not valid');
}

export default defineConfig({
  root: 'src',
  build: {
    // Relative to the root
    outDir: '../dist',
    lib: {
      entry: resolve(__dirname, "./src/index.js"),
      fileName: "server",
      formats: ['es', 'cjs'],
    },
    emptyOutDir: false,
  },
});