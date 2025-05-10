import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// path 是 Node.js 的核心模块，浏览器默认不支持需要
// 所以需要安装一个 yarn add @types/node --dev

export default defineConfig({
  plugins: [react()],
  resolve: {
    //resolve 专门做解析配置
    alias: {
      //alias 别名选项
      '@': path.resolve(__dirname, './src'),
    },
  },
})
