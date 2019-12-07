<template>
   <div class="tabs-item" @click="xxx">
      <slot></slot>
   </div>
</template>

<script>
export default {
   name: 'o-tabs-item',
   data(){
      return{ //不需要用户传值，自身维护
         active: false,
      }
   },
   props: {
      disabled: {
         type: Boolean,
         default: false,
      },
      name: {
         type: String | Number,
         required: true,
      }
   },
   inject:['eventBus'],
   created(){
      this.eventBus.$on('update:selected',(name)=> {
         console.log(name)
      })
   },
   methods:{
      xxx(){
         this.eventBus.$emit('update:selected',this.name)
      }
   }
}
</script>

<style lang="scss" scoped>

</style>