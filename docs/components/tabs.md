# Tabs 标签页

选项切换组件

## 默认选中第一项

可自行设置默认选中项, 

**浏览**

<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

**代码演示**

```html
<o-tabs :selected.sync="selectedTab">
  <o-tabs-head>
    <o-tabs-item name="1">
      Tab 1
    </o-tabs-item>
    <o-tabs-item name="2">
      Tab 2
    </o-tabs-item>
    <o-tabs-item name="3">
      Tab 3
    </o-tabs-item>
    <template v-slot:actions>
      <button>按钮</button>
    </template>
  </o-tabs-head>
  <o-tabs-body>
    <o-tabs-pane name="1">
      Content of Tab Pane 1
    </o-tabs-pane>
    <o-tabs-pane name="2">
      Content of Tab Pane 2
    </o-tabs-pane>
    <o-tabs-pane name="3">
      Content of Tab Pane 3
    </o-tabs-pane>
  </o-tabs-body>
</o-tabs>
```

```js
data(){
  return{
    selectedTab: '1',
  }
}
```

## 禁用某一项

**浏览**

设置默认选中第二项，禁用第三项

<ClientOnly>
<tabs-disable-demo></tabs-disable-demo>
</ClientOnly>

**代码演示**

```html
<o-tabs :selected.sync="selectedTab">
  <o-tabs-head>
    <o-tabs-item name="1">
      Tab 1
    </o-tabs-item>
    <o-tabs-item name="2">
      Tab 2
    </o-tabs-item>
    <o-tabs-item name="3" disabled>
      Tab 3
    </o-tabs-item>
  </o-tabs-head>
  <o-tabs-body>
    <o-tabs-pane name="1">
      Content of Tab Pane 1
    </o-tabs-pane>
    <o-tabs-pane name="2">
      Content of Tab Pane 2
    </o-tabs-pane>
    <o-tabs-pane name="3">
      Content of Tab Pane 3
    </o-tabs-pane>
  </o-tabs-body>
</o-tabs>
```
```js
data(){
  return{
    selectedTab: '1',
  }
}
```