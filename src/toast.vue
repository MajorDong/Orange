<template>
  <div class="toast">
    <slot>
    </slot>
  </div>
</template>

<script>

export default {
  name:'o-toast',
}
</script>
//开发插件

<style lang='scss' scoped>
  .toast{
    border: 1px red solid;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%)
  }
</style>