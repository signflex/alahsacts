// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   root : 'src',
//   plugins: [
//     react(),
//     viteStaticCopy({
//       targets: [
//         {
//           src: 'locales',
//           dest: '.',
//         },
//       ],
//     }),
//   ],
  
//   build: {
//     outDir: '../dist', // Output directory inside the src folder
//     emptyOutDir: true, // Ensures the output directory is emptied before each build
//   }
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'src',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'locales',
          dest: '.',
        },
      ],
    }),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
});
