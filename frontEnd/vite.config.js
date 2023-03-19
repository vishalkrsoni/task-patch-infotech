import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //   server: {
  //     fs: {
  //       allow: ["./src/assets"],
  //     },
  //   },
});


// export default defineConfig({
//   plugins: [reactRefresh()],
//   build: {
//     assetsInlineLimit: 0,
//   },
//   server: {
//     fs: {
//       allow: ["./src/assets"],
//     },
//   },
// });
