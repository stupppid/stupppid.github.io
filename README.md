# stupppid.github.io  -- 为酷炫而生

[homepage](https://stupppid.github.io/dist)

# 开发须知

- 使用hash路由，页面配置存储在`/route.js`下，写页面需要使用`<div page='pageA'>`格式

- 尽量使用一个文件夹下包括index.scss  index.html  index.js 三个文件，需要自己把index.scss 添加到总的scss中(@import)，之后也许会添加支持test.js

- 所有组件尽量不要依赖包，目前依赖包有 tweenjs lodash events

- 使用parcel开发，打包使用npm run build即可
