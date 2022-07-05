<template>
  <div>
    <!-- <MyProduct :title="msg" price="50" info="泽凯大酬宾，1折"></MyProduct> -->
    <MyProduct
      v-for="item in list"
      :key="item.id"
      :title="item.proname"
      :price="item.proprice"
      :info="item.info"
      :index="index"
      v-on:del="delFn"
    ></MyProduct>
  </div>
</template>

<script>
import MyProduct from './components/MyProduct.vue'
// import MyProduct1 from './components/MyProduct1.vue'
export default {
  data() {
    return {
      msg: '超级好吃的口水鸡',
      list: [
        {
          id: 1,
          proname: '超级好吃的棒棒糖',
          proprice: 18.8,
          info: '开业大酬宾, 全场8折',
        },
        {
          id: 2,
          proname: '超级好吃的大鸡腿',
          proprice: 34.2,
          info: '好吃不腻, 快来买啊',
        },
        {
          id: 3,
          proname: '超级无敌的冰激凌',
          proprice: 14.2,
          info: '炎热的夏天, 来个冰激凌了',
        },
      ],
    }
  },
  components: {
    MyProduct,

    // MyProduct1,
  },
  methods: {
    delFn(val, index) {
      this.list[index].proprice = (this.list[index].proprice - val).toFixed(1)
      // 在父组件里边改数据
    },
  },
}
</script>

<style></style>
