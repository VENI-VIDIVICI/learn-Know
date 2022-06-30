# vscode调试
## chrome 方式
``` json
type: "chrome",
url:"http://localhost:3000/", // 启动项目url
```
启动项目后，点击 vscode 调试按钮，可在vscode中断点调试，适用于启动地址项目

## node 方式
``` json
"type": "node",
"cwd": "${workspaceFolder}", //项目path
"program": "${workspaceFolder}/bin/vite.js", //启动项目js
"args": ["--port","8080"] //传参
```
适用于插件调试