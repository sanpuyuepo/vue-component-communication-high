export default {
  // 一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。
  methods: {
    giveMoney(cash) {
      this.money -= cash;
      this.$parent.money += cash;
    },
  },
}