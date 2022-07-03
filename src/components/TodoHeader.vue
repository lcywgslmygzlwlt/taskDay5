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
      v-model.trim="text"
      @keydown.enter="addFn"
    />
  </header>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    // 添加  判断输入内容 子传父 清空输入
    addFn() {
      if (this.text.length == 0) {
        return alert('请正确输入！');
      }
      this.$emit('create', this.text);
      this.text = '';
    },
  },
  computed: {
    // 全选与单选
    isAll: {
      get() {
        return this.list.every((ele) => ele.isDone == true);
      },
      set(val) {
        console.log(val);
        this.list.forEach((ele) => (ele.isDone = val));
      },
    },
  },
};
</script>
