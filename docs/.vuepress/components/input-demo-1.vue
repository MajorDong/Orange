<template>
  <div>
    <o-input v-model="message"></o-input>
    <p style="margin-top: 5px;">message: {{message}} </p>
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  components:{
    'o-input': Input,
  },
  data(){
    return {
      message: 'Hello World',
    }
  },
}
</script>

<style>

</style>