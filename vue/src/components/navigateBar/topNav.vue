<template>
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
</template>

<script>
export default {
    name: 'topNav',
    data() {
      return{
        collapseBtnClass: 'el-icon-s-fold',
        isCollapse: false,
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
      }
    }
}
</script>

<style>
#topNav{
    width:100%;
    height:100%;
}
#icon {
    font-family:Arial,Helvetica,sans-serif;
    color:azure;
}
#text {
    font-family:Arial,Helvetica,sans-serif;
    color:azure;
}
</style>
