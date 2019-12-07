<template>
   <div class="tabs-body">
      <slot></slot>
   </div>
</template>

<script>
export default {
   name: 'o-tabs-body',
   inject:['eventBus']
}
</script>

<style lang="scss" scoped>

</style>