<template>
    <div id="sideNav">
      <el-menu id="elm"
               default-active="1"
               style="min-height: 100%; overflow-x: hidden"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               background-color="rgb(48, 65, 86)"
               text-color="#fff"
               active-text-color="#ffd04b"
               :collapse-transition="false"
               :collapse="isCollapse"
      >
        <div style="height: 60px; line-height: 60px; text-align: center">
          <img src="../../assets/logo.png" alt="" style="width: 20px; position: relative; top: 5px; right: 5px">
          <b style="color: white" v-show="true">灾情数据管理</b>
        </div>
        <el-menu-item index="1" @click="show1()">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">表格</span>
          </template>
        </el-menu-item>
        <el-menu-item index="2" @click="show2()">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">图象</span>
          </template>
        </el-menu-item>
        <el-menu-item index="3" @click="show3()">
          <template slot="title">
            <i class="el-icon-map-location"></i>
            <span slot="title">地图</span>
          </template>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
    name: 'sideNav',
    data() {
      return {
        isCollapse:false,
      }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        show1(){
            this.$store.commit("show1");
        },
        show2(){
            this.$store.commit("show2");
        },
        show3(){
            this.$store.commit("show3");
            this.$store.commit("drawer2Open");
        },
        show4(){
            this.$store.commit("show1");
            this.$store.commit("drawer1Open");
        },
        collapse() {  // 点击收缩按钮触发
          this.isCollapse = !this.isCollapse
          if (this.isCollapse) {  // 收缩
            this.sideWidth = 64
            this.collapseBtnClass = 'el-icon-s-unfold'
            this.logoTextShow = false
          } else {   // 展开
            this.sideWidth = 200
            this.collapseBtnClass = 'el-icon-s-fold'
            this.logoTextShow = true
          }
      }
    }
}
</script>

<style>
#elm {
    overflow:hidden;
    height: 100vh;
}
</style>
