<template>
  <div>
    <TodoHeader @add="addFn"></TodoHeader>
    <!-- @setchecked="setcheckedFn" -->
    <TodoMain :list="showlist" @del="delFn"></TodoMain>
    <TodoFooter
      :count="count"
      @fliterdata="fliterdataFn"
      @clear="clearFn"
    ></TodoFooter>
  </div>
</template>
<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoFooter from "./components/TodoFooter.vue";
import TodoMain from "./components/TodoMain.vue";

export default {
  data() {
    // 1.铺设数据
    // App.vue => main.vue  父传递子
    // 子组件 用props 去接一下传递过去的数据
    // 子组件 渲染数据 v-for
    // 父组件 传递
    return {
      list: JSON.parse(localStorage.getItem("list")) || [],
      getSel: "all",
    };
  },
  components: {
    // TodoHeader: TodoHeader
    TodoHeader,
    TodoFooter,
    TodoMain,
  },
  methods: {
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        name: val,
        isDone: false,
        id,
      });
    },
    delFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    fliterdataFn(val) {
      // 根据 val list
      console.log(val);
      this.getSel = val;
      // list 是不是根据 val不同值 显示不同的List
    },
    clearFn() {
      // 已完成 转换成未来完成
      this.list.forEach((ele) => (ele.isDone = false));
    },
    // setcheckedFn(val) {
    //   this.list.forEach((ele) => (ele.isDone = val));
    // },
  },
  // 剩余的数量
  computed: {
    count() {
      // 统计剩余数量
      // 翻到 footer 取用
      return this.list.filter((ele) => !ele.isDone).length;
    },
    showlist() {
      if (this.getSel == "no") {
        return this.list.filter((ele) => !ele.isDone);
      } else if (this.getSel == "yes") {
        return this.list.filter((ele) => ele.isDone);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem("list", JSON.stringify(val || []));
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
