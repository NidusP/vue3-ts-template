# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## setup vite+vue3 project

```
- pnpm create vite
- pnpm install
```

### 添加[eslint rules](https://eslint.bootcss.com/docs/rules/)

- pnpm install eslint @eslint/create-config -D
- npx elint --init

- 添加解析 vue 文件能力的配置

1. `"parser": "vue-eslint-parser"`

- 扩展使用 vue3 规则集

2. `extends: "plugin:vue/vue3-recommended" // 替换"plugin:vue/essential"`

- 打开 setup 语法糖环境

3. `env: "vue/setup-compiler-macros":true`

### tianjia

### 提交规范

`pnpm install @commitlint/config-conventional @commitlint/cli -D`
创建 commitlint.config.js
`pnpm install husky -D`
`npx husky install`
生成.husky

### 自动修复不符合eslint的代码
`pnpm install lint-staged -D`