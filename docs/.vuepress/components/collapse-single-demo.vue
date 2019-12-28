<template>
  <div>
    <o-collapse :selected.sync="selectedItem" single>
        <o-collapse-item title="This is panel header 1" name="1">
          <div>Orange is a kind of fruit</div>
        </o-collapse-item>
        <o-collapse-item title="This is panel header 2" name="2">
          <div>Orange is a kind of fruit</div>
        </o-collapse-item>
        <o-collapse-item title="This is panel header 3" name="3">
          <div>Orange is a kind of fruit</div>
        </o-collapse-item>
      </o-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
export default {
  components:{
    'o-collapse': Collapse,
    'o-collapse-item': CollapseItem,
  },
  data(){
    return{
      selectedItem: [],
    }
  }
  
}
</script>

<style>

</style>