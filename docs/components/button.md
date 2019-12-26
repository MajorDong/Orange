# Button 按钮

## 单个按钮

**浏览**

<button-demo></button-demo>

**代码演示**

```html
<div>
  <o-button>默认按钮</o-button>
  <o-button icon="settings">默认按钮</o-button>
  <o-button :loading="true">默认按钮</o-button>
  <o-button disabled>默认按钮</o-button>
  <o-button icon="awesome">点赞</o-button>
  <o-button icon="download">下载</o-button>
</div>
```

## 按钮组合

可以将多个 `button` 放入 `button-group`容器中, 通过 `icon-position` 属性调整 `icon` 位置。

**浏览**

<button-group-demo></button-group-demo>

**代码演示**

```html
<div>
  <o-button-group>
    <o-button icon="left">上一页</o-button>
    <o-button>更多</o-button>
    <o-button icon="right" icon-position="right">下一页</o-button>
  </o-button-group>
</div>
```