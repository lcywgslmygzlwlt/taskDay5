<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isSel == 'all' }"
          href="javascript:;"
          @click="change('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'no' }"
          href="javascript:;"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'yes' }"
          href="javascript:;"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="delAll">清除已完成</button>
  </footer>
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
      isSel: 'all', //all 全部 no 未完成 yes 已完成
    };
  },
  computed: {
    // 计算 剩余未完成任务数
    count() {
      return this.list.filter((ele) => ele.isDone == false).length;
    },
  },
  methods: {
    // 切换 子传父
    change(val) {
      // console.log(val);
      this.isSel = val;
      this.$emit('change', val);
    },
    // 清除已完成 子传父
    delAll() {
      const newArr = this.list.filter((ele) => ele.isDone == false);
      // console.log(newArr);
      this.$emit('delAll', newArr);
    },
  },
};
</script>
