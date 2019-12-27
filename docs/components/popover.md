# Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## Click触发

**浏览**

<ClientOnly>
<popover-demo></popover-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <o-popover position="top">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <o-button>Click me</o-button>
  </o-popover>
  <o-popover position="top">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <o-button>Top</o-button>
  </o-popover>
  <o-popover position="bottom">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <o-button>Bottom</o-button>
  </o-popover>
  <o-popover position="left">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <o-button>left</o-button>
  </o-popover>
  <o-popover position="right">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <o-button>Right</o-button>
  </o-popover>
</div>
```

## Hover触发

**浏览**

<ClientOnly>
<popover-hover-demo></popover-hover-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <o-popover position="top">
    <template slot="content" trigger="hover">
      <div>Content of popover</div>
    </template>
    <o-button>Click me</o-button>
  </o-popover>
  <o-popover position="top" trigger="hover">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <o-button>Top</o-button>
  </o-popover>
  <o-popover position="bottom" trigger="hover">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <o-button>Bottom</o-button>
  </o-popover>
  <o-popover position="left" trigger="hover">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <o-button>left</o-button>
  </o-popover>
  <o-popover position="right" trigger="hover">
    <template slot="content">
      <div>Content of popover</div>
    </template>
    <o-button>Right</o-button>
  </o-popover>
</div>
```

## 设置内部关闭

**浏览**

<ClientOnly>
<popover-close-demo></popover-close-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <o-popover position="top">
    <template v-slot:content="{close}">
      <div>Content of popover</div>
      <o-button @click="close">Close</o-button>
    </template>
    <o-button>Click me</o-button>
  </o-popover>
</div>
```

