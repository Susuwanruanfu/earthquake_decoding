<template>
  <div id="mapNode" >
    <div id="d2">
      <div v-loading="load" id="China" style="height:100%;width:100%;"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import '../../../node_modules/china.js'
export default {
  name: 'mapNode',
  data() {
    return {
      load: false,
    }
  },
  methods: {
    draw() {
      var myChart3 = echarts.init(document.getElementById('China'));
      this.$store.state.option && myChart3.setOption(this.$store.state.option);
    },
  },
  mounted() {
    this.draw()
  }
}
</script>

<style scoped>
#mapNode {
  width: 100%;
  height: 86vh;
}

#d2 {
  float: left;
  width: 100%;
  height: 100%;
}
</style>
