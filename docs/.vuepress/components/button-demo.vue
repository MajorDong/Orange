<template>
  <div>
    <o-button>默认按钮</o-button>
    <o-button icon="settings">默认按钮</o-button>
    <o-button :loading="true">默认按钮</o-button>
    <o-button disabled>默认按钮</o-button>
    <o-button icon="awesome">点赞</o-button>
    <o-button icon="download">下载</o-button>
  </div>
</template>

<script>
import Button from '../../../src/button'
import ButtonPopple from '../../../src/button-popple'
export default {
  components:{
    'o-button': Button,
    'o-button-popple': ButtonPopple
  },
  
}
</script>

<style>

</style>