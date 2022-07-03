<template>
  <header class="header">
    <h1>todos</h1>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="quanxuan"
    />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="add"
      v-model="task"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: '',
    };
  },
  methods: {
    add() {
      if (this.task.length == 0) return alert('请输入内容');
      this.$emit('add', this.task);
      this.task = '';
    },
  },
  computed: {
    quanxuan: {
       get() {
        return this.$parent.list.every((ele) => {
          ele.isDone;
        });
      },
      set(val) {
        this.$parent.list.forEach((ele) => {
          ele.isDone = val;
        });
      },
    },
  },
};
</script>
