<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>数量值:{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isAll == 'all' }"
          href="javascript:;"
          @click="change('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isAll == 'no' }"
          href="javascript:;"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isAll == 'yes' }"
          href="javascript:;"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ["count"],
  data() {
    return {
      isAll: "all",
    };
  },
  methods: {
    change(val) {
      this.isAll = val;
      this.$emit("change", val);
    },
  },
};
</script>
