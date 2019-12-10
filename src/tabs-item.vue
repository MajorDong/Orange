<template>
   <div class="tabs-item" @click="xxx" :class="classes">
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
   props: { //需要用户传值
      disabled: {
         type: Boolean,
         default: false,
      },
      name: {
         type: String | Number,
         required: true,
      }
   },
   computed: {
      classes(){
         return {
            active: this.active,
         }
      }
   },
   inject:['eventBus'],
   created(){
      this.eventBus.$on('update:selected',(name)=> {
         if(name === this.name){
            this.active = true
         } else{
            this.active = false
         }
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
   .tabs-item{
      flex-shrink: 0;
      padding: 0 2em;
      &.active{
         background: red;
      }
   }
</style>