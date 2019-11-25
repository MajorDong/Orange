import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Col from './col'
import Row from './row'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin';

Vue.component('o-button', Button)
Vue.component('o-icon', Icon)
Vue.component('o-button-group',ButtonGroup)
Vue.component('o-input', Input)
Vue.component('o-row',Row)
Vue.component('o-col',Col)
Vue.component('o-layout',Layout)
Vue.component('o-header',Header)
Vue.component('o-sider',Sider)
Vue.component('o-content',Content)
Vue.component('o-footer',Footer)
Vue.component('o-toast', Toast)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hello world'
  },
  methods:{
    inputchange: function(e){
      console.log(e.target.value)
    }
  },
  methods:{
    showToast(){
      this.$toast('我是message')
    }
  }
})

//单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)

// const expect = chai.expect

// try{
//   { //测试按钮含有icon
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings'
//       }
//     })
//     vm.$mount() //挂载在内存里面
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-settings')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {//测试按钮有loading
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings',
//         loading: true
//       }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {//测试iconPosition左
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings'
//       }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {//测试iconPosition右
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings',
//         iconPosition: 'right'
//       }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   { //测试按钮的click事件
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings',
//       }
//     })
//     vm.$mount()
//     let spy = chai.spy(function(){})
  
//     vm.$on('click', spy)
//     // 希望这个函数被执行
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
//   }
// }catch (error){
//   window.errors = [error]
// } finally{
//   window.errors.forEach((error) =>{
//     console.error(error.message)
//   })
// }
