<template>
  <div>
    <o-popover position="top">
        <template v-slot:content="{close}">
          <div>Content of popover</div>
            <o-button @click="close">Close</o-button>
        </template>
        <o-button>Click me</o-button>
      </o-popover>
  </div>
</template>

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button';
export default {
  components:{
    'o-popover': Popover,
    'o-button': Button,
  },
  
}
</script>

<style>

</style>