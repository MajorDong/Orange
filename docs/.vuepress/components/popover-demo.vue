<template>
  <div>
    <o-popover position="top">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <o-button>Click me</o-button>
      </o-popover>
    <o-popover position="top">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <o-button>Top</o-button>
      </o-popover>
      <o-popover position="bottom">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <o-button>Bottom</o-button>
      </o-popover>
      <o-popover position="left">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <o-button>left</o-button>
      </o-popover>
      <o-popover position="right">
        <template slot="content">
          <div>
            Content of popover
          </div>
        </template>
        <o-button>Right</o-button>
      </o-popover>
  </div>
</template>

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button';
export default {
  components:{
    'o-popover': Popover,
    'o-button': Button,
  },
  
}
</script>

<style>

</style>