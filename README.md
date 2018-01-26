# gulp.js 入門

```bash
$ npm i gulp-cli -g

$ mkdir gulp-demo && cd gulp-demo
$ npm init -y
$ npm i gulp -D
$ touch gulpfile.js

# 查閱 gulp 相關指令
$ gulp --help

# 查閱 gulpfile 設定的任務清單
$ gulp -T
```

## 支援開發伺服器

```bash
$ npm i gulp-connect -D
# 設定 gulpfile.js (也可以使用 gulp-webserver)

# 執行 default 任務
$ gulp
```

## 支援 Sass 與 livereload

```bash
$ npm i gulp-sass -D
# 設定 gulpfile.js

$ gulp -T
$ gulp sass
$ gulp
```

## 支援 Babel

```bash
# https://babeljs.io/docs/setup/#installation
$ npm i gulp-babel babel-core babel-preset-env -D
# 建立 .babelrc
# 設定 gulpfile.js
```
