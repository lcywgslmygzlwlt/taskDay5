<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{ completed: obj.isDone }" v-for="obj in list" :key="obj.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="obj.isDone" />
        <label>{{ obj.name }}</label>
        <button class="destroy" @click="del(obj.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    // 删除 子传父
    del(id) {
      // console.log(id);
      this.$emit('delItem', id);
    },
  },
};
</script>
