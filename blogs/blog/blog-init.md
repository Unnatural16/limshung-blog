---
date: 2021/2/9 
title: 博客初始化
categories:
 - blog
tags:
 - front-end
---

## 博客转移

原本博客使用的是hexo，但毕竟个人还是更喜欢Vue，于是将博客转移到了Vuepress上，使用了[这款主题](https://vuepress-theme-reco.recoluan.com/)方便构建博客。

同时以前写的文章也基本放弃了，毕竟过于naive。

## 将来目标

先继续完善下博客，介绍一下项目？

当前博客好像还有些问题，也需要修复或者等作者更新。

## 博客注意点

使用博客时发现了一些小坑点和小问题，在此记录一下

### 最后更新时间

vuepress的最后更新时间使用git自动记录，非常方便，一开始我发现我的时间显示有错误，如图所示

![Invalid Date](http://image.limshung.site/pics/%E6%88%AA%E5%9B%BE.PNG)

经过寻找后发现是语言设置的问题，在`config.js`中

```js
//.vuepress/config
module.export={
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
}
```

不能用这种方式设置中文，删除后恢复正常

### 中文路径

在使用中文作为文件夹路径，Markdown文件命名时和分类标签名时，看似只会报路由警告，实际上刷新就会错误。必须使用非中文字符。
在这个[issue](https://github.com/vuepress-reco/vuepress-theme-reco/issues/276)中找到了相关症状，发现可能需要等待vuepress更新。

### 显示时间

如本文所示，渲染出的时间不仅包括年月日，甚至精确到了时分秒，这不是我们所希望的。

::: details 解决方法
无，等作者更新😜。
:::
