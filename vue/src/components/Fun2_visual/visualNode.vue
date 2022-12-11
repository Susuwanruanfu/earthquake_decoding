<template>
    <div id="visualNode">
      <div id="d1">
        <div id="lineC">
<!--                <el-button style="float:right;position:relative;left:28%;z-index: 1111" @click="refreshChart">刷新</el-button>-->
          <div v-loading="load" id="lineOne" style="height:100%;width:100%;"></div>
        </div>
        <div id="pieC">
          <div v-loading="load" id="PieOne" style="height:100%;width:100%;"></div>
        </div>
      </div>
      <div id="d2">
        <div id="pieCC">
          <div v-loading="load" id="PieTwo" style="height:100%;width:100%;"></div>
        </div>
      </div>

<!--        <div id="d2">-->
<!--            <div v-loading="load" id="China" style="height:100%;width:100%;"></div>-->
<!--        </div>-->
    </div>
</template>

<script>
import * as echarts from "echarts";
import '../../../node_modules/china.js'
export default {
    name: 'visualNode',
    data() {
        return {
            load: false,
        }
    },
    methods: {
        draw() {
            var myChart1 = echarts.init(document.getElementById('lineOne'));
            var myChart2 = echarts.init(document.getElementById('PieOne'));
            var myChart3 = echarts.init(document.getElementById('PieTwo'))
            // var myChart3 = echarts.init(document.getElementById('China'));
            this.$store.state.option_2_line_1 && myChart1.setOption(this.$store.state.option_2_line_1);
            this.$store.state.option_2_line_2 && myChart2.setOption(this.$store.state.option_2_line_2);
            this.$store.state.option_3_pie_1 && myChart3.setOption(this.$store.state.option_3_pie_1);
            // this.$store.state.option && myChart3.setOption(this.$store.state.option);
        },
        refreshChart() {
            document.getElementById('lineOne').removeAttribute('_echarts_instance_');
            document.getElementById('PieOne').removeAttribute('_echarts_instance_');
            // document.getElementById('China').removeAttribute('_echarts_instance_');
            this.load = true;
            setTimeout(() => {   //设置延迟执行
                this.draw();
                this.load = false;
            }, 1000);
        },
    },
    mounted() {
        this.draw();
    },
}
</script>

<style>
#visualNode {
    width: 100%;
    height: 86vh;
}

#d1 {
    float: left;
    width: 40%;
    height: 100%;

}

#d2 {
    float: left;
    width: 60%;
    height: 100%;
}

#lineC {
    height: 50%;
    width: 100%;
}

#pieC {
    height: 50%;
    width: 100%;
}

#pieCC {
  height: 100%;
  width: 100%;
}

#ds1 {
    height: 5%;
    width: 100%;
}

#ds2 {
    height: 5%;
    width: 100%;
}
</style>
