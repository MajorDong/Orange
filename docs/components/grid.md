# Grid 栅格

Grid 网格，最多可分为24网格，可以设置gutter。

## 默认栅格

**浏览**

<ClientOnly>
<grid-demo></grid-demo>
</ClientOnly>

**代码演示**

``` html
<div>
  <o-row>
    <o-col span="8">8</o-col>
    <o-col span="8">8</o-col>
    <o-col span="8">8</o-col>
  </o-row>
  <o-row>
    <o-col span="6">6</o-col>
      <o-col span="6">6</o-col>
  </o-row>
  <o-row>
    <o-col span="4">4</o-col>
    <o-col span="4">4</o-col>
    <o-col span="4">4</o-col>
    <o-col span="4">4</o-col>
    <o-col span="4">4</o-col>
    <o-col span="4">4</o-col>
  </o-row>
  <o-row>
    <o-col span="3">3</o-col>
    <o-col span="3">3</o-col>
    <o-col span="3">3</o-col>
    <o-col span="3">3</o-col>
    <o-col span="3">3</o-col>
    <o-col span="3">3</o-col>
    <o-col span="3">3</o-col>
    <o-col span="3">3</o-col>
  </o-row>
</div>
```
## 设置gutter

**浏览**

<ClientOnly>
<grid-gutter-demo></grid-gutter-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <o-row gutter="20">
    <o-col span="8">8</o-col>
    <o-col span="8">8</o-col>
    <o-col span="8">8</o-col>
  </o-row>
  <o-row gutter="10">
    <o-col span="6">6</o-col>
    <o-col span="6">6</o-col>
    <o-col span="6">6</o-col>
    <o-col span="6">6</o-col>
  </o-row>
</div>