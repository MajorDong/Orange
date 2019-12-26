<template>
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
</template>

<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Sider from '../../../src/sider'
import Content from '../../../src/content'
import Footer from '../../../src/footer'

export default {
  
  components:{
    'o-layout': Layout,
    'o-header': Header,
    'o-sider': Sider,
    'o-content': Content,
    'o-footer': Footer,
  },
}
</script>

<style>

</style>