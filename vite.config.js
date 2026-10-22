import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, transformWithOxc } from "vite";

const transformJsxInJs = () => ({
  name: "transform-jsx-in-js",
  enforce: "pre",
  async transform(code, id) {
    if (!id.match(/.*\.js$/)) {
      return null;
    }

    return await transformWithOxc(code, id, {
      lang: "jsx",
    });
  },
});

export default defineConfig(() => {
  return {
    resolve: {
      tsconfigPaths: true,
    },

    plugins: [
      react(),
      tailwindcss(),
      transformJsxInJs()
    ],
    optimizeDeps: {
      rolldownOptions: {
        moduleTypes: {
          '.js': 'jsx', // به Rolldown/Oxc اسکن‌کننده بگویید فایل‌های .js را به عنوان JSX پردازش کند
        },
      },
    },
  };
});