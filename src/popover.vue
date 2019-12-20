<template>
  <div class="popover" @click="popContent($event)" ref="popover">
    <div ref="contentWrapper" class="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
  transform: translateY(-100%);
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>