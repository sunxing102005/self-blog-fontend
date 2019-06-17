### 简介

#### 这是 React 搭建个人博客网站的一部分。网站分为两部分

-   博客前台页面
    ![在这里插入图片描述](http://cdn.sunx.club/blog-fontend-gif-sm.gif)
-   博客后台页面
    ![在这里插入图片描述](http://cdn.sunx.club/blog-backend-gif.gif)

#### 本项目是前台页面的后端部分。

#### 整个博客网站包含内容有

**_前端部分_**

-   [x] React
-   [x] React-Router4.0
-   [x] Redux
-   [x] AntDesign
-   [x] webpack4

**_后端部分_**

-   [x] consul+consul-template+nginx+docker 搭建微服务
-   [x] cdn 上传静态资源
-   [x] thinkJs

**_部署部分_**

-   [x] daocloud 自动化部署
-   [x] Prometheus+Grafana 监控系统

#### 想要详细了解博客的搭建过程与相关问题，可以查看

-   线上个人博客（即这个项目做出来的成果），[点这里](http://www.sunx.club/)
-   csdn 博客：
    -   [React 搭建个人博客（一）项目简介与 React 前端踩坑](https://blog.csdn.net/qq_36228442/article/details/91459730)
    -   [React 搭建个人博客（二）consul-template+nginx+docker 实现负载均衡](https://blog.csdn.net/qq_36228442/article/details/91878838)

### 前置条件

-   本地安装 mysql 数据库，将项目中的的 data.sql 导入数据库。
-   本项目是博客前台网站的服务端，想要访问本服务直接看到博客页面，需要先打包 blog-react 项目（[点这里](https://github.com/sunxing102005/blog-react)），打包后资源生成在本项目的 view,www 目录下。

### 服务启动

```
npm install
npm start
```

启动后，可以为前端项目 blog-react 提供接口。前端项目 build 后，直接访问http://localhost:8365 就可以看到博客前台页面。

### 项目部署

本项目需要做成镜像以供整个项目的部署，按照项目中的 Dockerfile 文件的内容生成镜像。通过使用 daocloud，使项目 push 到 master 分支时，触发生成新镜像。镜像生成后，通过 daocloud 的 stack(类似于维护 docker-compose.yml)，管理包括 consul,registrator,self-blog-backend(博客后台管理服务),self-blog-fontend(本项目),consul-template-nginx-blog(网关与负载均衡)。详细内容会在之后的博客及时更新。
