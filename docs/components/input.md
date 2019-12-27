# Input 输入框

## 常用示例

**浏览**

<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

**代码演示**

```html
<div>
  <o-input value="NORMAL"></o-input>
  <o-input value="READONLY" readonly></o-input>
  <o-input value="DISABLED" disabled></o-input>
  <o-input value="ERROR" error="Error message"></o-input>
</div>
```

## 支持 `v-model` 进行数据双向绑定

<br>

**浏览**

<ClientOnly>
<input-demo-1></input-demo-1>
</ClientOnly>

**代码演示**

```html
<div>
  <o-input v-model="message"></o-input>
   <p style="margin-top: 5px;">message: {{message}} </p>
</div>
```
```js
data(){
  return {
    message: 'hello world',
  }
},
```