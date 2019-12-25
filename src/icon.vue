<template>
  <svg class="o-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
import './svg' //import后执行代码
export default {
  props:['name']
}
</script>

<style scoped>
  .o-icon{
      width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>