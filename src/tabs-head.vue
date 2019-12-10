<template>
   <div class="tabs-head">
      
      <slot></slot>
      <div class="line" ref="line"></div>
      
      <div class="actions-wrapper">
         <slot name="actions">
         </slot>
      </div>    
      
   
   
   </div>
    
</template>

<script>
export default {
   name:'o-tabs-head',
   inject: ['eventBus'],
   mounted(){
      this.eventBus.$on('update:selected',(itemName, item) => {
         let{width, height, top, left} = item.$el.getBoundingClientRect()
         console.log(top,left)
         this.$refs.line.style.width = `${width}px`
         this.$refs.line.style.left = `${left}px`
      })
   }
}
</script>

<style lang="scss" scoped>
   .tabs-head{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 40px;  
      position: relative;
      >.actions-wrapper{
      margin-left: auto;
      }
      
   }
   .line{
         position: absolute;
         left: 0;
         bottom: 0px;
         border-bottom: 2px solid blue;
         transition: all 350ms;
      }
   
   
</style>