<template>
    <div id="elecMapNode">
        <el-drawer title="数据导入" :visible.sync="$store.state.drawer1" direction="rtl" :before-close="handleClose">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange" :on-preview="handlePreview" :on-remove="handleRemove"
                :before-remove="beforeRemove" multiple :limit="6" :on-exceed="handleExceed"
                :file-list="$store.state.fileList">
                <div style="padding-left:10px;width: 90%;">
                    <el-button size="small" type="primary">点击上传</el-button>
                </div>
                <div style="padding-left:10px;width:90%" slot="tip" class="el-upload__tip">只能上传csv格式文件，且不超过500kb</div>
                <div style="padding-left:10px;text-align:left;width:90%" slot="tip" class="el-upload__tip">文件列表:</div>
            </el-upload>
        </el-drawer>
    </div>
</template>

<script>
export default {
    /* eslint-disable */
    name: 'importNode',
    data() {
        return {

        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                    this.$store.state.loading = true;
                    setTimeout(() => {   //设置延迟执行
                        this.$store.state.loading = false;
                        this.$store.commit('getData');
                    }, 3000);
                    
                })
                .catch(_ => { });
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        },
        handleChange() {

        }
    },
}
</script>

<style>

</style>