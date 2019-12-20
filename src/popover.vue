<template>
  <div class="popover" @click="popContent($event)" ref="popover">
    <div ref="contentWrapper" class="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "o-popover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        width,
        height,
        top,
        left
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },
    listenToDocument() {
      let eventHandler = () => {
        if (
          this.$refs.contentWrapper &&
          this.$refs.contentWrapper.contains(event.target)
        ) {
          return;
        }
        this.visible = false;
        document.removeEventListener("click", eventHandler);
      };
      document.addEventListener("click", eventHandler);
    },
    handleContent() {
      setTimeout(() => {
        this.positionContent();
        this.listenToDocument();
      });
    },
    popContent(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        this.visible = !this.visible;
        if (this.visible === true) {
          //因为v-if，不能立马在visible变为true时操作DOM
          this.handleContent();
        }
      } else {
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
}
.contentWrapper {
  position: absolute;
  max-width: 20em;
  
  word-break: break-all;
  transform: translateY(-100%);
  border: 1px solid #333;
  border-radius: 4px;
  padding: 0.5em 1em;
  margin-top: -10px;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  &::before{
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    border: 10px solid red;
    border-top-color: #333;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    position: absolute;
    top: 100%;
    left: 10px;
  }
  &::after{
    content: '';
    display: block;
    width: 0px;
    height: 0px;
    border: 10px solid red;
    border-top-color: white;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    position: absolute;
    top: calc(100% - 2px);
    left: 10px;
  }
}
</style>