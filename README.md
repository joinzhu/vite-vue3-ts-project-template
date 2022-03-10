#vue3 + vite + TS + element-ui的项目模版
---
#### 相关插件配置
| 配置/插件项 | 是否配置  | 配置文件 |
| :----: | :----: | :----: |
| eslint  | Y | .eslintrc.js |
| prettier  | Y | .prettierrc |
| git  | Y | .husky |
| commitizen | Y | .cz-config.js |
| npm | Y | .npmrc |
| jest | Y | jest.config.js |
| typescript | Y | tsconfig.json |

#### src中各文件夹作用
| 文件夹 | 作用 |
| :----: | :----: |
| api | 接口 |
| assets | 静态文件、css等 |
| common | 全局变量 |
| components | 组件 |
| plugins | 插件（包含封装fetch） |
| router | 路由 |
| store | vuex |
| utils | 工具 |
| views | 页面 |

#### script命令
| 命令 | 作用 | 备注 |
| :----: | :----: | :----: |
| dev | 启动本地 |  |
| build | 打包 |  |
| test | 单元测试 |  |
| commit | git的commit | 用了husky+commitizen规范git的提交 |
