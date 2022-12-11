<template>
  <div id="ContainerC">
    <el-container style="min-height: 100vh">
      <el-aside :width="sideWidth + 'px'" style="box-shadow: 2px 0 6px rgb(0 21 41 / 35%);">
        <el-menu :default-openeds="['1', '3']" style="min-height: 100%; overflow-x: hidden"
                 background-color="rgb(48, 65, 86)"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 :collapse-transition="false"
                 :collapse="isCollapse"
        >
          <div style="height: 60px; line-height: 60px; text-align: center">
            <img src="../../assets/logo.png" alt="" style="width: 20px; position: relative; top: 5px; right: 5px">
            <b style="color: white" v-show="logoTextShow">灾情数据管理</b>
          </div>
          <el-menu-item index="1" @click="show1()">
<!--            <template slot="title">-->
              <i class="el-icon-menu"></i>
              <span slot="title">表格</span>
<!--            </template>-->
          </el-menu-item>
          <el-menu-item index="2" @click = "show2()">
<!--            <template slot="title">-->
              <i class="el-icon-document"></i>
              <span slot="title">图象</span>
<!--            </template>-->
          </el-menu-item>
          <el-menu-item index="3" @click = "show5()">
<!--            <template slot="title">-->
              <i class="el-icon-map-location"></i>
              <span slot="title">地图</span>
<!--            </template>-->
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="font-size: 12px; border-bottom: 1px solid #ccc; line-height: 60px; display: flex">
          <div style="flex: 1; font-size: 20px">
            <span :class="collapseBtnClass" style="cursor: pointer" @click="collapse"></span>
          </div>
          <el-dropdown style="width: 70px; cursor: pointer">
            <span>管理员</span><i class="el-icon-arrow-down" style="margin-left: 5px"></i>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item >个人信息</el-dropdown-item>
              <el-dropdown-item >退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main>
          <dataInfoNode v-if="this.$store.state.show1"></dataInfoNode>
          <visualNode v-if="this.$store.state.show2"></visualNode>
          <exportNode v-if="this.$store.state.show3"></exportNode>
          <importNode v-if="this.$store.state.show4"></importNode>
          <mapNode v-if="this.$store.state.show5"></mapNode>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
// import sideNav from '../navigateBar/sideNav.vue';
// import topNav from '../navigateBar/topNav.vue';
import dataInfoNode from '../Fun1_DataInfo/dataInfoNode.vue'
import visualNode from '../Fun2_visual/visualNode.vue'
import exportNode from '../Fun3_export/exportNode.vue'
import importNode from '../Fun4_import/importNode.vue'
import mapNode from "@/components/Fun5_map/mapNode";
export default {
  name: 'ContainerC',
  components: {
    // sideNav,
    // topNav,
    dataInfoNode,
    visualNode,
    exportNode,
    importNode,
    mapNode,
  },
  data() {
    return {
      collapseBtnClass: 'el-icon-s-fold',
      isCollapse: false,
      sideWidth: 150,
      logoTextShow: true,
    }
  },
  methods: {
    collapse() {  // 点击收缩按钮触发
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {  // 收缩
        this.sideWidth = 64
        this.collapseBtnClass = 'el-icon-s-unfold'
        this.logoTextShow = false
      } else {   // 展开
        this.sideWidth = 150
        this.collapseBtnClass = 'el-icon-s-fold'
        this.logoTextShow = true
      }
    },
    show1(){
      this.$store.commit("show1");
    },
    show2(){
      this.$store.commit("show2");
    },
    show5(){
      this.$store.commit("show5");
    }
  }
}
</script>

<style>

</style>
