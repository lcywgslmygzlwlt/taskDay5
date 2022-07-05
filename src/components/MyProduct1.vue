<template>
  <div class="my-product">
    <h3>标题:{{ obj.proname }}</h3>
    <p>价格: {{ obj.proprice }}</p>
    <p>{{ obj.info }}</p>
    <button @click="change">砍价-1</button>
  </div>
</template>

<script>
export default {
  //   props: ['title', 'price', 'info'],
  props: {
    obj: {
      type: Object, // 类型是对象
      default: () => {}, // 设置默认值
    },
  },
  methods: {
    change() {
      this.$emit('del', 1, this.index)
    },
  },
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
