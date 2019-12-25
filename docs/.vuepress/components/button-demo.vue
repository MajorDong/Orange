<template>
  <div>
    <o-button>默认按钮</o-button>
    <o-button icon="settings">默认按钮</o-button>
    <o-button :loading="true">默认按钮</o-button>
    <o-button disabled>默认按钮</o-button>
  </div>
</template>

<script>
import Button from '../../../src/button'
export default {
  components:{
    'o-button': Button,
  },
  
}
</script>

<style>

</style>