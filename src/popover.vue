<template>
  <div class="popover" @click.stop="popContent">
    <div class="contentWrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'o-popover',
  data(){
    return{
      visible: false,
    }
  },
  methods:{
    popContent(){
      this.visible = !this.visible
      if(this.visible === true){
        document.addEventListener('click', function x(){
          this.visible = false
        }.bind(this))
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .contentWrapper{
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0,0,0,0.5);
    }
  }
</style>