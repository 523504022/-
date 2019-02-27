<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categyrs,index) in categyrsArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index) in categyrs" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div v-else>
        <img src="./images/nav/msite_back.svg" alt="loading">
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
import ShopList from '../../components/ShopList/ShopList.vue'
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'


export default {
  components: {
    ShopList
  },
  computed: {
    ...mapState({
      address: state => state.msite.address,
      categorys: state => state.msite.categorys
    }),

    // 根据categyrs一维生成二维数组，小数组中的length最大为8
    categyrsArr() {
      const {categorys} = this
      // 二维数组
      const arr = []
      // 小数组
      let smallArr = []
      categorys.forEach(c => {
        // 将smallArr保存到Arr
        if(smallArr.length === 0){
          arr.push(smallArr)
        }
        // 将C保存到smallArr中
        smallArr.push(c)
        // 小数组满，准备一个新的数组
        if(smallArr.length === 8){
          smallArr = []
        }
      })
      return arr
    }
  },
  mounted () {
    // 获取分类列表
    this.$store.dispatch('getCategorys')
    // 获取商家列表
    this.$store.dispatch('getShops')
  },
  watch: {
    categorys(){
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true, // 循环模式
          })
      })
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  .msite_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;

      .shop_icon {
        margin-left: 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>