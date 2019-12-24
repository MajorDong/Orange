<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open" >
      <slot><slot>
    </div>  
  </div>
</template>

<script>
export default {
  name:'o-collapse-item',
  props:{
    title: {
      type: String,
      required: true,
    },
    name: {
      type:String,
      required: true
    }
  },
  data(){
    return{
      open:false,
      single: false,
    }
  },
  inject: ['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected', (names)=>{
      if(names.indexOf(this.name) >= 0 ){        
        this.open = true
      }else{
          this.open = false      
      }
    })
  },
  methods:{
    toggle(){
      if(this.open){
        this.eventBus.$emit('update:removeSelected',this.name)
      } else {
        this.eventBus.$emit('update:addSelected',this.name)
      }
    },
    
  }
}
</script>

<style lang="scss" scoped>
  .collapseItem{
    >.title{
      border: 1px solid #ddd;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
    }
    &:first-child{
      >.title{
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
      }
    }
  
    >.content{
      padding: 8px
    }
  }
</style>