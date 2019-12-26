# Layout 布局

> 使用flex布局实现，请注意浏览器的兼容

## 简单布局

<br>

**浏览**

<layout-demo></layout-demo>

**代码演示**

```html
<div>
  <o-layout>
    <o-header style="height: 64px; background: #8bbae6">
      header
    </o-header>
    <o-content style="height: 100px; background: #418ce2">
      content
      </o-content>
    <o-footer style="height: 64px; background: #8bbae6">
      footer
    </o-footer>
  </o-layout>
 </div>
 ```

 ## 外部侧栏
侧栏可手动关闭

**浏览**

<layout-demo-1></layout-demo-1>

**代码演示**

```html
<div>
  <o-layout>
    <o-sider style="width:100px; background:#589ee3;">
      sider
    </o-sider>
    <o-layout>
      <o-header style="height: 64px; background: #8bbae6">
         header
      </o-header>
      <o-content style="height: 100px; background: #418ce2">
        content
      </o-content>
      <o-footer style="height: 64px; background: #8bbae6">
        footer
      </o-footer>
    </o-layout>
  </o-layout>
</div>
```

## 内部侧栏

**浏览**

<layout-in></layout-in>

**代码演示**

```html
<div>
  <o-layout>
    <o-header style="height: 64px; background: #8bbae6">
      header
    </o-header>
    <o-layout>
      <o-sider style="width:100px; background:#589ee3;">
        sider
      </o-sider>
      <o-content style="height: 100px; background: #418ce2">
        content
      </o-content>
    </o-layout>
    <o-footer style="height: 64px; background: #8bbae6">
      footer
    </o-footer>
  </o-layout>
</div>