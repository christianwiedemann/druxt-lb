const fs = require('fs');
const path = require('path');
const vue = require('@vitejs/plugin-vue');
const  build  = require('vite').build;


const getImports =  () => {
  const imports = [];

  imports.push({
    name: 'test',
    lib: path.resolve('./src/ui/components/MyDoom.ts'),
  })
  return imports;
}

const imports =  getImports()

imports.forEach(async item => {
  await build({
    configFile: false,
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: {
      lib: {
        entry: item.lib,
        name: item.name
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          },
          assetFileNames: `${item.name}/[name].[ext]`,
          entryFileNames: () => '[name]/[name].[format].js'
        }
      }
    },
  })
})
