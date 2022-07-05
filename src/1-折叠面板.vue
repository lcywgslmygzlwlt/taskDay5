<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <!-- 使用组件 就把组件当成普通标签
   -->
    <PanelL title="蔷薇蔷薇"></PanelL>
    <PanelL></PanelL>
    <PanelL></PanelL>
    <PanelL></PanelL>
    <PanelG></PanelG>
    <panel-g></panel-g>
  </div>
</template>

<script>
// 1. 效果不对
// 2. 代码利用率很低

// 2.注册组件
import Panel from './components/Panel.vue'
// 2.1 注册组件
// 2.1.1 局部组册
export default {
  data() {
    return {}
  },
  components: {
    // 注册组件
    // 组件名：组件对象
    //
    PanelL: Panel,
  },
}
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
</style>
