<template>
    <div id="exportNode">
        <el-drawer title="数据导出" :visible.sync="$store.state.drawer2" direction="rtl" :before-close="handleClose">
          <template>
            <download-excel
                class = "export-excel-wrapper"
                :data = "json_data"
                :fields = "json_fields"
                type = "xls"
                :name = "excel_name">
              <div style="padding-left:10px;width: 90%;">
                <el-button size="small" type="primary">点击下载</el-button>
              </div>
            </download-excel>
          </template>
        </el-drawer>
    </div>
</template>

<script>
import JsonExcel from "vue-json-excel";
export default {
    /* eslint-disable */
    name: 'exportNode',
    data() {
        return {
          excel_name:"灾情信息",
          json_fields: {
            'code': 'code',
            'location': 'location',
            'time': 'time',
            'origin':'origin',
            'carrier':'carrier',
            'type':'type',
            'label':'label',
            'description':'description'
          },
          json_data: []
        }
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
    },
  components:{
      JsonExcel
  }
}
</script>

<style>

</style>
