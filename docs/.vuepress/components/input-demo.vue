<template>
  <div>
    <o-input value="NORMAL"></o-input>
    <o-input value="READONLY" readonly></o-input>
    <o-input value="DISABLED" disabled></o-input>
    <o-input value="ERROR" error="Error message"></o-input>
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  components:{
    'o-input': Input,
  },
  
}
</script>

<style>

</style>