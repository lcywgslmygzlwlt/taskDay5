<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <!-- 3.0 键盘事件-回车按键
         3.1 输入框 - v-model获取值
     -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="enter"
      v-model.trim="task"
    />
  </header>
</template>

<script>
// 3. 目标 - 新增任务
export default {
  data() {
    return {
      task: '',
    };
  },
  methods: {
    enter() {
      // 新增一条任务
      // this.$emit 告诉父级 我让list新增一条数据
      // 非空判断
      if (this.task.trim().length == 0) {
        alert('please enter a task');
      }
      // 3.2(重要) - 当前任务名字要加到list数组里
      // 子传父技术
      this.$emit('add', this.task);
      this.task = '';
    },
  },
  computed: {
    isAll: {
      get() {
        // 取值
        // list 里边值
        // this.$parent 父组件
        return this.$parent.list.every((ele) => ele.isDone);
      },
      set(checked) {
        // 子到父
        // this.$emit("setchecked", checked);
        // 在子组件 直接改父组件里边值
        this.$parent.list.forEach((ele) => (ele.isDone = checked));
      },
    },
  },
};
</script>
