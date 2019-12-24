<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name:'o-collapse',
  data(){
    return{
      eventBus: new Vue(),
      dataSelected: this.selected
    }
    
  },
  props:{
    single: {
      type: Boolean,
      default: false,
    },
    selected:{
      type: String,
    }
  },
  provide(){
      return {
        eventBus: this.eventBus
      }
  },
  mounted(){
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:selected', (name)=>{
      this.dataSelected = name
      this.$emit('update:selected', this.dataSelected)
    })
  }
}
</script>

<style lang="scss" scoped>
  .collapse{
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>