# PacsViewer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## add eslint

Run `ng lint` add eslint.

## 命名规则

- 文件命名
  - 语义化命名
  - 多个描述性的名称，使用`-`分隔名称中的单词：tc-home.component.ts
- 类名
  - 大驼峰`TcHomeComponent`

## Add Ngrx

### install NgRx

`ng add @ngrx/store@latest`
`ng add @ngrx/effects@latest`

### install Devtools

`ng add @ngrx/store-devtools@latest`

`ng generate class models/user`
`ng generate interface models/user`

// 创建模块
`ng generate module books --routing`

ng generate class core/store/reducers/auth.reducer
ng generate class core/store/selector/auth.selector

### appReducer

项目预算: 科学评估项目周期, 提高预算精度, 经费按时下放,保障考研人员静心做研究
人力成本: 完善绩效考核, 健全的奖惩制度,提高个人主动性和项目质量
服务器与硬件成本: 避免固定资产重复投入、闲置浪费