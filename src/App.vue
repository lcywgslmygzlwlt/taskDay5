<template>
  <div>
    <section class="todoapp">
      <!-- 除了驼峰, 还可以使用-转换链接 -->
      <TodoHeader @create="createFn" :list="list"></TodoHeader>
      <TodoMain :list="selectList" @delItem="delFn"></TodoMain>
      <TodoFooter
        :list="list"
        @change="changeFn"
        @delAll="delAllFn"
      ></TodoFooter>
    </section>
  </div>
</template>

<script>
import './assets/styles/base.css';
import './assets/styles/index.css';
// 引入组件
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [],
      getSal: 'all',
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    // 添加
    createFn(val) {
      // console.log(val);
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;

      this.list.push({
        name: val,
        isDone: false,
        id,
      });
    },
    // 删除
    delFn(val) {
      // console.log(val);
      const index = this.list.findIndex((ele) => ele.id == val);
      this.list.splice(index, 1);
    },
    // 切换
    changeFn(val) {
      console.log(val);
      this.getSal = val;
    },
    // 清除已完成
    delAllFn(val) {
      // console.log(val);
      this.list = val;
    },
  },
  computed: {
    // 判断当前状态 返回对应数据
    selectList() {
      if (this.getSal == 'no') {
        return this.list.filter((ele) => ele.isDone == false);
      } else if (this.getSal == 'yes') {
        return this.list.filter((ele) => ele.isDone == true);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    // 本地缓存
    list: {
      deep: true,
      immediate: true,
      handler() {
        // 判断值是否为空 避免传入undefined
        localStorage.setItem('list', JSON.stringify(this.list || []));
      },
    },
  },
};
</script>

<style></style>
