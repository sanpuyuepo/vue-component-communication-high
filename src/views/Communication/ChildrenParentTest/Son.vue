<template>
  <div style="background: #ccc; height: 50px">
    <h3>儿子小明: 有存款: {{ money }}</h3>
    <button @click="giveMoney(50)">给爸爸钱: 50</button>
  </div>
</template>

<script>
import myMixin from "./myMixin";
export default {
  name: "Son",
  data() {
    return {
      money: 30000,
    };
  },

  methods: {
    tinghua() {
      console.log("我是小明，我听爸爸的话");
    },
    // giveMoney(cash) {
    //   this.money -= cash;
    //   this.$parent.money += cash;
    // },
  },
  // 使用mixin
  mixins: [myMixin],
};
</script>
