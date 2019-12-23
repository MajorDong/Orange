<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'o-collapse'
}
</script>

<style lang="scss" scoped>
  .collapse{
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>