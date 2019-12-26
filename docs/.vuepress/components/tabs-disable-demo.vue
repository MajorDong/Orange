<template>
  <div>
    <o-tabs :selected.sync="selectedTab">
        <o-tabs-head>
          <o-tabs-item name="1">
            Tab 1
          </o-tabs-item>
          <o-tabs-item name="2">
            Tab 2
          </o-tabs-item>
          <o-tabs-item name="3" disabled>
            Tab 3
          </o-tabs-item>
        </o-tabs-head>
        <o-tabs-body>
          <o-tabs-pane name="1">
            Content of Tab Pane 1
          </o-tabs-pane>
          <o-tabs-pane name="2">
            Content of Tab Pane 2
          </o-tabs-pane>
          <o-tabs-pane name="3">
            Content of Tab Pane 3
          </o-tabs-pane>
        </o-tabs-body>
      </o-tabs>
  </div>
</template>

<script>
import Tabs from '../../../src/tabs.vue'
import TabsHead from '../../../src/tabs-head'
import TabsItem from '../../../src/tabs-item'
import TabsBody from '../../../src/tabs-body'
import TabsPane from '../../../src/tabs-pane'
export default {
  components:{
    'o-tabs': Tabs,
    'o-tabs-head': TabsHead,
    'o-tabs-item': TabsItem,
    'o-tabs-body': TabsBody,
    'o-tabs-pane': TabsPane,
  },
  data(){
    return{
      selectedTab: '2',
    }
  }
}
</script>

<style>

</style>