---
date: 2021/2/21
title: Vue3笔记
categories:
 - 学习笔记
tags:
 - 前端
 - vue3
---

## 介绍

此篇博文是介绍学习vue3-typescript中感觉比较重要的点。不得不说现代前端工具真是太先进了，使用Vite-Vue3-TypeScript-TailwindCss真的是有一种飞起来的感觉。

### [定义组件](https://v3.cn.vuejs.org/guide/typescript-support.html#%E5%AE%9A%E4%B9%89-vue-%E7%BB%84%E4%BB%B6)

使用`defineComponent()`定义组件，使类型推断正确。

```ts
import { defineComponent } from "vue";
export default defineComponent({
    //...
})
```

### 定义响应式

使用`reactive()`使对象响应式，使用`ref()`使原始值具有响应式。`ref()`的本质是给原始值套了一层对象，然后使用ES6的`Proxy`添加响应式。

`ref()`包装后的原始值在模板中会自动展开，在代码中需要手动添加`.value`。

::: details 示例

此代码为经典的备忘录示例。

```ts
import { defineComponent, ref, reactive, PropType } from "vue";

export default defineComponent({
  name: "TodoList",
  props: {
    title: {
      type: String,
      default: "TodoList",
    },
    todoList: {
      type: Array as PropType<String[]>,
      default: ["计划1", "计划2", "计划3"],
    },
  },
  setup(props) {
    const inputText = ref("");
    const todoArray = reactive(props.todoList);
    const addToList = () => {
      if (inputText.value.length > 0) {
        todoArray.push(inputText.value);
        inputText.value = "";
      }
    };
    const shuffle = () => {
      todoArray.sort(() => 0.5 - Math.random());
    };
    return {
      inputText,
      todoArray,
      addToList,
      shuffle,
    };
  },
});
```

:::
