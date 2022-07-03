<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @btnAdd="btnAddFn"></TodoHeader>
    <TodoMain :list="listFn" @dele="deleFn"></TodoMain>
    <TodoFooter :count="count" @change="changeFn"></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
// import "./styles/base.css";
// import "./styles/index.css";

import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

export default {
  data() {
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 101, name: "睡觉", isDone: false },
        { id: 102, name: "打豆豆", isDone: true },
      ],
      gitVal: "all",
    };
  },
  methods: {
    btnAddFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        id,
        name: val,
        isDone: false,
      });
    },
    deleFn(id) {
      const index = this.list.filter((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    changeFn(val) {
      this.gitVal = val;
    },
  },
  computed: {
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    listFn() {
      if (this.gitVal == "no") {
        return this.list.filter((ele) => !ele.isDone);
      } else if (this.gitVal == "yes") {
        return this.list.filter((ele) => ele.isDone);
      } else {
        return this.list;
      }
    },
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
};
</script>
