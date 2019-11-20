<template>
  <button class="o-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <o-icon class="icon" v-if="icon && !loading" :name=icon></o-icon>
    <o-icon v-if="loading" class="loading icon" name="loading"></o-icon>
    <!-- 插槽上不能添加clss -->
    <div class="content">
         <slot><slot> 
    </div>
    </button>
</template>

<script>

import Icon from './icon'
export default {
  components:{
    'o-icon': Icon
  },
  //props:['icon','iconPosition']
  props: {
    icon: '',
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type:String,
      default: 'left',
      validator: function(value){ //属性检查器
        if(value !== 'left' && value !== 'right'){
          return false
        }else{
          return true
        }
      }
    },
   
  }
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
.loading{
  animation: spin 2s infinite linear;
}
.o-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align:middle; //外部对齐
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.6em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--border-active-bg);
  }
  &:focus {
    outline: none;
  }
  >.content{ order:2;}
  >.icon {order: 1; margin-left:0; margin-right: 0.3em;}

  &.icon-right{
    >.content{order:1;}
    >.icon{order:2; margin-right:0; margin-left: 0.3em;}
  }
}
</style>

