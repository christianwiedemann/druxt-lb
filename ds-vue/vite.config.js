import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import glob from "glob";
import path from "path";

const ENV_PREFIX = "VITE";

export default ({ mode }) => {
  const varsList = ["EXAMPLE"];

  const env = ejectVars(varsList, loadEnv(mode, process.cwd()));

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: aliases(),
    },
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: {
      rollupOptions: {
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue'
          }
        }
      },

    },
    define: {
      "process.env": env,
    },
  });
};

function aliases() {
  const a = glob
    .sync("/*/", { root: path.resolve(__dirname, "src") })
    .reduce((_, file) => {
      _[path.basename(file)] = file;

      return _;
    }, {});
  return a;
}

function ejectVars(list, vars, pre = ENV_PREFIX) {
  const result = list.reduce((_, i) => {
    const c = vars[`${pre}_${i}`];

    _[i] = c;

    return _;
  }, {});

  return result;
}
