---
title: iview-comment-tree组件开发
date: 2021/2/22
categories:
 - 开发
tags:
 - 前端
 - vue
 - 组件开发
---
此文介绍iview-comment-tree组件开发中遇到的难点
<!-- more -->
## 递归使用组件

评论树不是只有一级的，是有多级的，这就意味着用确定层数的组件是很难表示的，而递归式组件正好满足这个要求，参考示例[树形视图](https://cn.vuejs.org/v2/examples/tree-view.html)

组件分为两层，外层包装，内层递归。

```vue
//iview-comment-tree-inner.vue

<template>
  <div>
    <List>
      <ListItem v-for="item in pageComments" :key="item._id">
        <ListItem>...</ListItem>
        <div
          v-if="item.replyComments"
        >
          <iview-comment-tree-inner
            :comments="item.replyComments"
          ></iview-comment-tree-inner>
        </div>
      </ListItem>
    </List>
  </div>
</template>

<script>
export default {
  name: "IviewCommentTreeInner",
  props: {
    comments: Array
  },
};
</script>

```

每次递归时把子评论向下传递，若为空则停止递归。

## 数据传输

现在问题来了，既然组件是多层的，那么如何向层数不定的组件传数据以及组件向上传时间呢。

### prop和event

传统方法，逐层prop传数据和逐层event向上传事件

这个方法是首先被排除的，每一层都要响应式，花销太大了。

### $attr、$props和$listeners

这种方法可以减轻点代码量，但本质只是语法糖，性能消耗是不变的。

### vuex

这种方法能很好滴全局组件数据，但他对于一个组件来说，太重了

### 依赖注入

这是对于一个多层递归组件来说最好的方法，不需要新增文件，非常适合组件使用，[参考](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5)

本组件中示例：

```vue

//外层组件
<script>
import IviewCommentTreeInner from "./iview-comment-tree-inner";

export default {
  name: "IviewCommentTree",
  components: {
    IviewCommentTreeInner
  },
  //...
  provide() {//需要是一个函数，原因类似Data
    return {
      pageSize: this.pageSize,
      RenderTime: this.RenderTime,
      showCommentInput: this.showCommentInput,//方法也可以传递，这样就可以多层传递事件了
      avatarSize: this.avatarSize
    };
  },
  methods: {
    //...
    showCommentInput(reply) {
      this.reply = reply;
    }
  }
};
</script>

```

```vue
//内层组件

<script>
export default {
  name: "IviewCommentTreeInner",
  inject: ["pageSize", "RenderTime", "showCommentInput", "avatarSize"],//这样就可以直接使用了
};
</script>

```
