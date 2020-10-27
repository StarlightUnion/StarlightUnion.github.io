---
title: Nginx部署笔记-常用配置总结
date: 2020/04/15 23:41:00
tags: ["杂记", "Nginx", "Windows", "Summary"]
---

# Nginx部署笔记-常用配置总结
<ClientOnly>
  <display-bar :displayData="$frontmatter"></display-bar>
</ClientOnly>

> 最近部署`nginx`的小总结，做个记录。

## 一、服务端口代理跳转第三方地址

项目中配有除**本地服务地址外的第三方服务地址**，假设其地址为`https://www.example.com`，那么访问`http://localhost:8000/todo/xxx`将会被代理至`https://www.example.com/todo/xxx`。

```nginx
http {
    # 其他省略
    server {
        listen       8000; # 监听端口
        server_name  localhost; # 前端地址
        root   project; # 前端项目文件目录

        location ^~/todo/{
            rewrite /(.*)$ /$1 break;
            proxy_pass https://www.example.com;# 跳转第三方地址
        }
    }
}
```

## 二、登录验证+跳转至登录页

**适用场景**：**用户跳过登录页**直接访问`http://localhost:8000/System/html`。

如果之前**没有登录过/Cookie过期失效**，就会跳转至`http://localhost:8000/login.html`登录页，

若想要在**登录页成功登陆之后跳转回原来想要访问的地址**，从Cookie中获取就好了。

```nginx
http {
    # 其他省略
    server {
        listen       8000; # 监听端口
        server_name  localhost; # 前端地址
        root   project; # 前端项目文件目录

        location ^~/System/html{
            auth_request /auth;
            error_page 401 = @error401;# 401为没有访问权限/需进行登录验证
        }

        location /auth {# 用户登录验证
			internal;# 该location只能被内部调用，外部访问无效->404
            proxy_set_header Host $host;
            proxy_pass_request_body off;
            proxy_set_header Content-Length "";
            proxy_pass http://localhost:8001/LoginVerification;# 用户登录验证地址
		}

        location @error401 {
            add_header Set-Cookie "redirect=$scheme://$http_host$request_uri;Path=/";# 将当前访问地址设置为Cookie
            set $page_401 http://localhost:8000/login.html;# 登录页面
            return 302 $page_401;
        }
    }
}
```

## 三、API端口代理

假设前端项目端口为`8000`，而服务端口则是`8001`，配置如下↓

```nginx
http {
    # 其他省略
    server {
        listen       8000; # 监听端口
        server_name  localhost; # 前端地址
        root   project; # 前端项目文件目录

        location ^~/api/{
            proxy_pass http://localhost:8001;# 跳转端口
            proxy_set_header X-real-ip $remote_addr;# 发出请求的IP
            proxy_set_header Host $http_host;
        }
    }
}
```

