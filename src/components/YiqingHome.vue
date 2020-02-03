<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="当日疫情7" name="first">1</el-tab-pane>
      <el-tab-pane label="要闻信息8" name="second">2</el-tab-pane>
      <el-tab-pane label="疫情地图9" name="third">3</el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: 'yiqinghome',
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
