<template>
  <div style="background: #ccc; height: 50px">
    <h3>女儿小红: 有存款: {{ money }}</h3>
    <button @click="giveMoney(100)">给爸爸钱: 100</button>
  </div>
</template>

<script>
import myMixin from './myMixin'

export default {
  name: "Daughter",
  data() {
    return {
      money: 20000,
    };
  },

  methods: {
    // giveMoney(cash) {
    //   this.money -= cash;
    //   this.$parent.money += cash;
    // },
  },
  // 使用mixin
  mixins: [myMixin]
};
</script>
