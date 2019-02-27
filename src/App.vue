<template>
  <div>
      <router-view/>
      <FooterGuide v-show="$route.meta.footerShow"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    components: {
      FooterGuide
    },
    async mounted () {
      // 触发vuex的getAddress调用，从后台获取address信息
      this.$store.dispatch('getAddress')
      // 触发vuex的getUser调用，从后台获取用户信息
      this.$store.dispatch('getUser')
      
      this.$store.dispatch('getShopInfo')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>