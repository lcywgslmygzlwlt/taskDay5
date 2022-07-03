<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: (issll = 'all') }"
          href="javascript:;"
          @click="change('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: (issll = 'no') }"
          href="javascript:;"
          @click="change('yes')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: (issll = 'yes') }"
          href="javascript:;"
          @click="change('no')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      issel: 'all',
    };
  },
  props: ['count'],
  methods: {
    change(val) {
      this.issll = val;
      this.$emit('change1', val);
    },
    clear(){
        this.$emit('clear');
    }
  },
};
</script>
