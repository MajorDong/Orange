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
  created(){
    
  },
  methods:{
    inputchange: function(e){
      console.log(e.target.value)
    }
  },
  methods:{
    showToast(){
      this.$toast('<em>hi<em>',{
        position: 'bottom',
        closeButton:{
          text: '知道了',
          callback(toast){
            toast.log()
            console.log('用户知道了')
          }
        }
      })
    }
  }
})

