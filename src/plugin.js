import Toast from './toast'


export default{
  install(Vue, option){
    Vue.prototype.$toast = function(message,toastOptions){
      let Constructor = Vue.extend(Toast) //Vue动态创建toast组件
      let toast = new Constructor({
        propsData:{
           toastOptions
        }
      })
      toast.$slots.default = [message]
      toast.$mount() //让生命周期的钩子执行
      document.body.appendChild(toast.$el)
    }
  }
} //使用插件 避免import 避免prototype.$toast