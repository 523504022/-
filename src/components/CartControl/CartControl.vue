<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-minus-circle" v-if="food.number" @click.stop="updateFoodNumber(false)"></div>
    </transition>
    <div class="cart-count">{{food.number > 0 ? food.number : ''}}</div>
    <div class="iconfont icon-plus-circle" @click.stop="updateFoodNumber(true)"></div>
  </div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  methods: {
    updateFoodNumber(isAdd) {
      const food = this.food
      this.$store.dispatch('updateFoodNumber', { isAdd, food })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.cartcontrol {
  font-size: 0;

  .cart-decrease {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }

  .icon-minus-circle {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $green;

    &.move-enter-active, &.move-leave-active {
      transition: all 0.5s;
    }

    &.move-enter, &.move-leave-to {
      opacity: 0;
      transform: translateX(10px) rotate(180deg);
    }
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .icon-plus-circle {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $green;
  }
}
</style>
