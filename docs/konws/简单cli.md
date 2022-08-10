# 简单的cli
## 基础知识
1. package bin 
2. commander
3. chalk
4. inquirer
## 初始化
在 package.json 添加
```js 
bin:{
    "cli":"./cli" //路径
}
cli xxx 执行 cli
```
## commander
commander 是完整的 node.js 命令行解决方案可以基于它来进行用户交互
```javascript
// 安装
npm i commander -D
// 使用
import { program } from "commander"
program.option("-o, --output <output...>", "output")
// 解析输入
program.parse(process.argv)
```

## chalk
Terminal string 颜色高亮
