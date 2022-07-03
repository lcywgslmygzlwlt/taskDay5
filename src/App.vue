<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @add="add"></TodoHeader>
    <TodoMain :list="change11" @del="del"></TodoMain>
    <TodoFooter :count="count" @change1="change1" @clear="clear"></TodoFooter>
  </section>
</template>

<script>
// 1.0 样式引入
import './styles/base.css';
import './styles/index.css';

import TodoHeader from './components/TodoHeader';
import TodoMain from './components/TodoMain';
import TodoFooter from './components/TodoFooter';

export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [],
      issll: 'all',
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    add(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id+1
        : 100;
      this.list.push({
        name: val,
        id,
        isDone: false,
      });
    },
    del(id) {
      const index = this.list.findIndex((ele) => {
        ele.id == id;
      });
      this.list.splice(index, 1);
    },
    change1(val) {
      // console.log(val);
      this.issll = val;
    },
    clear() {
      this.list.forEach((item) => {
        item.isDone = false;
      });
    },
  },
  computed: {
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    change11() {
      if (this.issll == 'no') {
        return this.list.filter((ele) => ele.isDone);
      } else if (this.issll == 'yes') {
        return this.list.filter((ele) => !ele.isDone);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      handler() {
        localStorage.setItem('list', JSON.stringify(this.list));
      },
    },
  },
};
</script>
