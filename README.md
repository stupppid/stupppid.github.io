# stupppid.github.io  -- 为酷炫而生

[HOMEPAGE](https://stupppid.github.io/dist)

## 开发须知

- 使用hash路由，页面配置存储在`/route`下，写页面需要使用`<div page='pageA'>`格式

- 尽量使用一个文件夹下包括index.scss  index.html  index.js 三个文件，需要自己把index.scss 添加到总的scss中(@import)，暂不支持单元测试

- 所有组件尽量不要依赖只会引用一次的包

- 初始页不用的包，在其他也可能会经常使用到的包要提前打包，最好在初始页异步import

- 使用parcel开发，需要全局安装parcel，打包使用npm run build即可(windows下)

## 项目结构

    ├─dist      # 打包后的文件  
    ├─lib       # 没丢到npm上，在项目中依然需要用到的自写组件  
    │  ├─process  # 进度条组件  
    │  ├─router   # 页面组件化 / 路由控制  
    │  └─snow     # 雪花背景组件  
    ├─pages     # 页面  
    │  ├─3d-word-rain
    │  ├─lifegame
    │  ├─oldTV
    │  ├─pingpong
    │  └─welcome
    ├─route     # 路由配置  
    ├─scss      # 样式  
    ├─static    # 静态文件  
    └─utils     # 工具  
