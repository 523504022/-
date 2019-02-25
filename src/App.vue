<template>
  <div>
      <router-view/>
      <FooterGuide v-show="$route.meta.footerShow"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {reqAddress} from './api'
  export default {
    components: {
      FooterGuide
    },
    mounted () {
      // 触发vuex的getAddress调用，从后台获取address信息
      this.$store.dispatch('getAddress')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>