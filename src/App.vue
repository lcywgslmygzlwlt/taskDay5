<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="showList" @del="delFn"></TodoMain>
    <TodoFooter
      :count="count"
      @filterdata="filterdataFn"
      @clear="clearFn"
    ></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import './assets/styles/base.css';
import './assets/styles/index.css';
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  // 1铺设数据
  // app.vue=>main.vue  父传递子
  // 子组件 用props 接收数据
  // 子组件 渲染数据 v-for
  // 父组件 传递
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [],
      getSel: 'all',
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      // 3.3 push到数组里
      this.list.push({
        name: val,
        isDone: false,
        id,
      });
    },
    // 根据id删除当前
    delFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    filterdataFn(val) {
      // console.log(val);
      this.getSel = val;
    },
    clearFn() {
      this.list.forEach((ele) => (ele.isDone = false));
    },
  },
  // 剩余数量
  // 放到footer使用
  computed: {
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    showList() {
      if (this.getSel == 'no') {
        return this.list.filter((ele) => !ele.isDone);
      } else if (this.getSel == 'yes') {
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
        localStorage.setItem('list', JSON.stringify(val || []));
      },
    },
  },
};
</script>
