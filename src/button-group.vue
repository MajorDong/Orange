<template>
  <div class="o-button-group">
    <slot><slot>
  </div>
</template>

<script>
export default {
  mounted(){
    for(let node of this.$el.children){
      let name = node.nodeName.toLowerCase()
      if( name !== 'button'){
        console.warn(`o-button-group的子元素应全是o-button，但你写的为${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.o-button-group{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  > .o-button {
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px; //前一个border被后一个挡住了
    }
    
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius)
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius)
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}
</style>