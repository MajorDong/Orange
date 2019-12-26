<template>
  <div>
    <o-popover position="top" trigger="hover">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <o-button>Hover me</o-button>
      </o-popover>
    <o-popover position="top" trigger="hover">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <o-button>Top</o-button>
      </o-popover>
      <o-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <o-button>Bottom</o-button>
      </o-popover>
      <o-popover position="left" trigger="hover">
        <template slot="content">
          <div>Content of popover</div>
        </template>
        <o-button>left</o-button>
      </o-popover>
      <o-popover position="right" trigger="hover">
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