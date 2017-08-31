<%--  Created by IntelliJ IDEA.
  User: seven.li
  Date: 2017/8/31
  Time: 14:45 
  Emali: fighting20xx@126.com   --%>    

<template>

<span>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
        </el-table-column>
    </el-table>

    <el-tabs v-model="activeName" >
        <el-tab-pane label="项目信息" name="first">项目信息11111111111111
        </el-tab-pane>
        <el-tab-pane label="建筑列表" name="second">建筑列表222</el-tab-pane>
        <el-tab-pane label="能源信息" name="third">能源信息333</el-tab-pane>
        <el-tab-pane label="指标体系" name="fourth">指标体系444</el-tab-pane>
    </el-tabs>
</span>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王大虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王二虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王三虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }

</script>
<style>


</style>