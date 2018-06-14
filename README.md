# interview-app
author: davinzhang
email:davinzhang@outlook.com 

单页面开发-----使用webpack按模块进行打包，模块懒加载。
运行方式：
  准备：
      npm install -g webpack-cli wepack webpack-dev-server
      npm install 
  
  开发模式：npm run start
  打包模式：npm run build
  服务模式：npm run server

开发设计：
  index.js 按需加载所需模块 
    工具模块：
        utils
        common
        
    业务模快有：
        auth
        editor
        admin-manager
        admin-user

   模块加载方式，均统一使用异步方式进行加载。

依赖工具版本；
  webpack4
  nodejs v7



