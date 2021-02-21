---
title: 优先队列-堆
date: 2021/2/12
categories:
 - 算法
tags:
 - 堆
 - 优先队列
---

## 介绍

优先队列就是一种将数据赋予优先级的队列，优先级高的元素先出。

优先队列有数组和树两种实现方法

### 数组

数组的实现比较简单，就是每次在输入或者输出时扫描全数组，输出优先级最大的数。这样的输入和输出至少有一个的时间复杂度是O(n),消耗较大。

### 树

使用树实现的话，将优先级的比较变为树的页关系，控制节点上浮下沉堆化，时间复杂度降至O(log2(n))

### 堆

为了节省空间，使用数组来模拟树，将一个完全二叉树映射到一个数组上，进一步节省空间。

## 实现

此示例使用了递归实现上浮下沉，更换成循环可更节省空间

```js
class Heap {
    constructor(arr, func) {
        this.arr = arr || []
        this.func = func || ((a, b) => a >= b)
        this.compare = function (index, other) {
            if (this.arr[other] == null) {
                return true
            } else {
                return this.func(this.arr[index], this.arr[other])
            }
        }
        this.heapify()
    }
    push(n) {
        this.arr.push(n)
        this.upper(this.arr.length - 1)
    }
    pop() {
        const arr = this.arr
        this.swap(0, arr.length - 1)
        const res = arr.pop()
        this.down(0)
        return res
    }
    heapify() {
        for (let i = 1; i < this.arr.length; i++) {
            this.upper(i)
        }
    }
    upper(index) {
        const up = Math.floor((index - 1) / 2)
        if (up>=0&&this.compare(index, up)) {
            this.swap(index, up)
            this.upper(up)
        }
    }
    down(index) {
        const left = index * 2 + 1
        const right = index * 2 + 2
        const selected = this.compare(left, right) ? left : right
        if (!this.compare(index, selected)) {
            this.swap(selected, index)
            this.down(selected)
        }
    }
    swap(i, j) {
        const arr = this.arr;
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

const heap=new Heap([1,4353,456,2,5634,56,45,2563,45,43,6,457,548,7,67,5])
let res=[]
while(heap.arr.length>0){
    res.push(heap.pop())
}
console.log(res)
//输出[5634, 4353, 2563, 548, 457, 456, 67, 56, 45, 45, 43, 7, 6, 5, 2, 1]
```
