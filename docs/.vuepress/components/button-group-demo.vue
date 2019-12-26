<template>
  <div>
     <o-button-group>
        <o-button icon="left">上一页</o-button>
        <o-button>更多</o-button>
        <o-button icon="right" icon-position="right">下一页</o-button>
      </o-button-group>
  </div>
</template>

<script>
import ButtonGroup from '../../../src/button-group'
import Button from '../../../src/button'
export default {
  components:{
    'o-button': Button,
    'o-button-group': ButtonGroup,

  },
  
}
</script>

<style>

</style>