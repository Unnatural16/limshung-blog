---
title: 并查集
date: 2021/2/12
categories:
 - algorithm
tags:
 - 并查集
 - 图论
---

## 并查集是一种合并关系的数据结构，在图论等算法中起到重要作用

## 代码模板

在映射关系有限且比较简单时，可以采用一个数组代替Map。

```js
class UnionFind {
  constructor(n) {
    this.arr = []
    for (let i = 0; i < n; i++) {
      this.arr[i] = i;
    }
  }
  find(x) {
    let pri=x
    while (this.arr[x] !== x) {
      x = this.arr[x];
    }
    this.arr[pri]=x;
    return x
  }
  union(x, y) {
    let xFather = this.find(x)
    let yFather = this.find(y)
    if (xFather !== yFather) {
      this.arr[xFather] = yFather;
    }
  }
}

```
