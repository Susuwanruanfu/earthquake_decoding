<template>
    <div id="dataInfoNode">
      <div style="margin-bottom: 30px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>灾情信息</el-breadcrumb-item>
          <div style="margin:-6px">
            <el-button size="mini" type="primary" @click="show4()">导入 <i class="el-icon-top"></i></el-button>
            <el-button size="mini" type="primary" @click="show3()">导出 <i class="el-icon-bottom"></i></el-button>
          </div>
        </el-breadcrumb>
      </div>

      <div style="margin: 10px 0">
        <a style="margin-left:10px;"></a>
        <el-input style="width: 200px" placeholder="请输入灾情编码" suffix-icon="el-icon-search" v-model="searchCode"></el-input>
        <a style="margin-left:10px;"></a>
        <el-input style="width: 200px" placeholder="请输入日期" suffix-icon="el-icon-time" class="ml-5" v-model="searchTime"></el-input>
        <a style="margin-left:10px;"></a>
        <el-input style="width: 200px" placeholder="请输入地址" suffix-icon="el-icon-position" class="ml-5" v-model="searchLoc"></el-input>
        <a style="margin-left:10px;"></a>
        <el-input style="width: 200px" placeholder="请输入数据载体" suffix-icon="el-icon-folder" class="ml-5" v-model="searchCarrier"></el-input>
        <a style="margin-left:10px;"></a>
      </div>
      <template>
        <el-table v-loading="this.$store.state.loading"
                  :data="$store.state.disasterInfo.filter(data =>
                (!searchCode || data.code.toLowerCase().includes(searchCode.toLowerCase())) &&
                (!searchLoc || data.location.toLowerCase().includes(searchLoc.toLowerCase())) &&
                (!searchTime || data.time.toLowerCase().includes(searchTime.toLowerCase())) &&
                (!searchCarrier || data.carrier.toLowerCase().includes(searchCarrier.toLowerCase())) &&
                (!searchType || data.type.toLowerCase().includes(searchType.toLowerCase())) &&
                (!searchLabel || data.label.toLowerCase().includes(searchLabel.toLowerCase()))).slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                  stripe height="70%" border style="width: 100%">
          <el-table-column prop="code" label="编号" width="140">
          </el-table-column>
          <el-table-column prop="time" label="日期" width="110">
          </el-table-column>
          <el-table-column prop="location" label="地址" width="140">
          </el-table-column>
          <el-table-column prop="origin" label="数据源" width="140">
          </el-table-column>
          <el-table-column prop="carrier" label="数据载体" width="80">
          </el-table-column>
          <el-table-column prop="type" label="分类" width="140">
          </el-table-column>
          <el-table-column prop="label" label="标签" width="140">
          </el-table-column>
          <el-table-column prop="description" label="描述">
          </el-table-column>
          <el-table-column label="操作"  width="250" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="success" @click="handleCheck(scope.$index, scope.row);">查看</el-button>
              <el-button size="mini" >编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

      <div class="block" style="margin-top:15px;height:3%">
        <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize"
                       layout="total, sizes, prev, pager, next, jumper" :total="$store.state.disasterInfo.filter(data =>
                (!searchCode || data.code.toLowerCase().includes(searchCode.toLowerCase())) &&
                (!searchLoc || data.location.toLowerCase().includes(searchLoc.toLowerCase())) &&
                (!searchTime || data.time.toLowerCase().includes(searchTime.toLowerCase())) &&
                (!searchCarrier || data.carrier.toLowerCase().includes(searchCarrier.toLowerCase())) &&
                (!searchType || data.type.toLowerCase().includes(searchType.toLowerCase())) &&
                (!searchLabel || data.label.toLowerCase().includes(searchLabel.toLowerCase()))).length">
        </el-pagination>
      </div>
      <el-drawer title="查看数据载体" :visible.sync="drawer" direction="btt" :before-close="handleClose"
                 style="text-align: center;" size="65%">
        <p id="tt" v-show="T_text">test</p>
        <img v-if="T_img" id="static" style="width: 100%;height: 99%;object-fit: contain;" :src='srcImg' />
        <video v-if="T_video" :src='srcV' height="99%" controls></video>
      </el-drawer>
    </div>
</template>

<script>
export default {
    /* eslint-disable */
    name: 'dataInfoNode',
    data() {
        return {
            srcV: '',
            srcImg: '',
            drawer: false,
            searchCode: '',
            searchLoc: '',
            searchTime: '',
            searchCarrier: '',
            searchType: '',
            searchLabel: '',
            currentPage: 1, // 当前页码
            total: 20, // 总条数
            pageSize: 4,// 每页的数据条数
            pageSizes: 10,
            T_img: false,
            T_text: false,
            T_video: false,
        }
    },
    methods: {
        //每页条数改变时触发 选择一页显示多少行
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.currentPage = 1;
            this.pageSize = val;
        },
        //当前页改变时触发 跳转其他页
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
        },
        filterHandler(value, row, column) {
            const property = column['property'];
            return row[property] === value;
        },
        handleCheck(index, row) {
            if (row.carrier == "视频") {
                this.T_img = false;
                this.T_text = false;
                this.T_video = true;
                if (index % 4 == 0) {
                    this.srcV = require("../../assets/erupt.mp4");
                }
                else if (index % 4 == 1) {
                    this.srcV = require("../../assets/earthquake.mp4");
                }
                else if (index % 4 == 2) {
                    this.srcV = require("../../assets/quake.mp4");
                }
                else if (index % 4 == 3) {
                    this.srcV = require("../../assets/sand.mp4");
                }
            }
            else if (row.carrier == "图像") {
                this.T_img = true;
                this.T_text = false;
                this.T_video = false;
                if (index % 4 == 0) {
                    this.srcImg = require("../../assets/a.png");
                }
                else if (index % 4 == 1) {
                    this.srcImg = require("../../assets/e.png");
                }
                else if (index % 4 == 2) {
                    this.srcImg = require("../../assets/q.png");
                }
                else if (index % 4 == 3) {
                    this.srcImg = require("../../assets/r.png");
                }
            }
            else {
                this.T_img = false;
                this.T_text = true;
                this.T_video = false;
                var x = document.getElementById("tt");
                if (index % 4 == 0) {
                    x.innerHTML = "共计造成69227人遇难、17923人失踪、374643人不同程度受伤."
                }
                else if (index % 4 == 1) {
                    x.innerHTML = "1993.03万人失去住所，受灾总人口达4625.6万人,造成直接经济损失8451.4亿元"
                }
                else if (index % 4 == 2) {
                    x.innerHTML = "极重灾区共10个县（市），较重灾区共41个县（市），一般灾区共186个县（市）"
                }
                else if (index % 4 == 3) {
                    x.innerHTML = "北川—映秀断裂，也称中央断裂；汶川—茂汶断裂，也称后山断裂。8.0级强震就发生在中央断裂，即北川—映秀断裂上，震中位置更靠近映秀"
                }
            }
            console.log(index, row);
            this.drawer = true;
        },
        handleEdit(index, row) {
            console.log(index);
            console.log(row.code);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleClose(done) {
            done();
        },
        show3(){
          this.$store.commit("show3");
          this.$store.commit("drawer2Open");
        },
        show4(){
          this.$store.commit("show1");
          this.$store.commit("drawer1Open");
        },
    }
}
</script>

<style>
#dataInfoNode {
    width: 100%;
    height: 86vh;
}
</style>
