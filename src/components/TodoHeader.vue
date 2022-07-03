<template>
  <header class="header">
    <h1>todos</h1>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="isAlll"
    />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="btnAdd"
      v-model="task"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    btnAdd() {
      if (this.task.trim().length === 0) {
        return alert("请输入完整信息");
      }
      this.$emit("btnAdd", this.task);
      this.task = "";
    },
  },
  computed: {
    isAlll: {
      get() {
        return this.$parent.every((item) => item.isDone);
      },
      set(val) {
        this.$parent.list.forEach((obj) => obj.isDone == val);
      },
    },
  },
};
</script>
