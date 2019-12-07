<template>
   <div class="tabs">
      <slot></slot>
   </div>
</template>

<script>
import Vue from 'vue'
export default {
   name: 'o-tabs',
   props: {
      selected: {
         type:String,
         required: true,
      },
      direction: {
         type: String,
         default: 'horizontal',
         validator(value) {
            return ['horizontal','vertical'].indexOf(value) >= 0
         }
      }
   },
   data(){
      return{
         eventBus: new Vue()
      }
   },
   provide(){
      return{
         eventBus: this.eventBus
      }
   },
   // created(){
   //    this.$emit('update:selected','这是this $emit出来的数据')
   // //    this.eventBus.$emit('updata:selected','这是eventbus')
   // },
   mounted(){
      this.$emit('update:selected',this.selected)
   }
}
</script>

<style lang="scss" scoped>

</style>