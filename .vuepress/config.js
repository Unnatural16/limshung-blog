module.exports = {
  "title": "limshung's blog",
  "description": "一个普普通通的博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "iview-comment-tree",
            "link": "/docs/iview-comment-tree/"
          }
        ]
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Unnatural16",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      // "/docs/theme-reco/": [
      //   "",
      //   "theme",
      //   "plugin",
      //   "api"
      // ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "此博客使用的vuepress主题",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最后更新时间",
    "author": "limshung",
    "authorAvatar": "/avatar.png",
    "record": "粤ICP备2020102443号-1",
    "startYear": "2020",
    "subSidebar": 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    "valineConfig": {
      appId: 'TT6vCSJpbBP8EawVGAJ4KnEV-gzGzoHsz',// your appId
      appKey: 'yEVYreP5AO2XVyc9oUY4hycE', // your appKey
    }
  },
  "markdown": {
    "lineNumbers": true
  },
}