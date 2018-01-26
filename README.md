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

## 基本 API 說明

設定任務指令

```js
gulp.task('task_name', <Array|Function>)
```

設定預設任務指令

```js
gulp.task('default', ['sass', 'es', 'webserver', 'html:watch', 'sass:watch', 'es:watch'])
```

指定檔案來源

```js
gulp.src('./es/**/*.js')
```

串聯任務

```js
gulp.pipe()
```

輸出

```js
gulp.dest()
```

## 其他資源

* [gulp API](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
* [plugins](https://gulpjs.com/plugins/)
