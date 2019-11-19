<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg class="icon" v-if="icon">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <!-- 插槽上不能添加clss -->
    <div class="content">
         <slot><slot> 
    </div>
    </button>
</template>

<script>
export default {
  props:['icon','iconPosition']
};
</script>

<style lang="scss" scoped>
.g-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align:middle;
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

