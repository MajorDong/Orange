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
   created(){
      this.eventBus.$on('update:selected',(itemName, vm) => {
         console.log(itemName)
         console.log(vm)
      })
   }
}
</script>

<style lang="scss" scoped>
   .tabs-head{
      border: 1px solid red;
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
         width: 100px;
         height: 2px;
      }
   
   
</style>