<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="task"
      @keydown.enter="enter"
      ref="input"
    />
  </header>
  <!-- 输入任务敲击回车, 新增待办任务 -->
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    enter() {
      // 新增一条任务
      // this.$emit 告诉父级 我让list新增一条数据
      // 非空判断
      if (this.task.trim().length == 0) {
        this.task = "";
        return alert("Please enter a task");
      }
      // 自定义事件
      this.$emit("add", this.task);
      this.task = "";
    },
  },
  computed: {
    // 计算属性
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
