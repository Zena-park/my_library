import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
// import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    // dts({
    //   insertTypesEntry: true, // 컴포넌트 타입 생성
    // }),
    tsconfigPaths(), // 절대 경로 생성시 사용된다.
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import React from 'react'`,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'my_library',
      formats: ['es', 'cjs'],
      fileName: (format) => `my_library.${format}.js`,
    },
    rollupOptions: {
      external: ["wagmi"],
      output: {

      },
    },
  },
});