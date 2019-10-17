<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">

        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <router-view />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
