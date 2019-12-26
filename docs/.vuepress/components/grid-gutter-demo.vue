<template>
  <div>
      <o-row gutter="20">
        <o-col span="8">8</o-col>
        <o-col span="8">8</o-col>
        <o-col span="8">8</o-col>
      </o-row>
      <o-row gutter="10">
        <o-col span="6">6</o-col>
        <o-col span="6">6</o-col>
        <o-col span="6">6</o-col>
        <o-col span="6">6</o-col>
      </o-row>
  </div>
</template>

<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
  components:{
    'o-row': Row,
    'o-col': Col,

  },
  
}
</script>

<style>

</style>