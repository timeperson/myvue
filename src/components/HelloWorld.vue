<template>
    <div class="hello">
      <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
      </swiper>
    </div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>  
    <h3 @click="upandown">upanddown</h3>
    <h3 @click="pullupandown">上拉加载下拉刷新</h3>
    <h3 @click="leftandright">左右滑动</h3>
    <h3 @click="reflashlocation">刷新导航栏定位问题</h3>
    <h3 @click="clicktoast">toast组件</h3>
    <h3 @click="clickswiper">swiper左右滑动</h3>
    <h3 @click="clickVueAwesomeSwiper">VueAwesomeSwiper</h3>
    <h3 @click="circleball">圆形波浪球</h3>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'better-scroll',
      slides: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180050&di=0d2ee92eead284e8133d6df07535d75a&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fjpgs%2F1512%2Fapic16988_sc115.com.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180167&di=7412fd486c47c15f1d27485be0d7bd28&imgtype=0&src=http%3A%2F%2Fwww.duoxinqi.com%2Fimages%2F2012%2F06%2F20120605_8.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180050&di=0d2ee92eead284e8133d6df07535d75a&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fjpgs%2F1512%2Fapic16988_sc115.com.jpg'
        ],
        swiperOption: {
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,  
          loop:true,
          autoplay: {
            delay:5000,
            stopOnLastSlide:true
          },        
          slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
          centeredSlides: true//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
        }
    }
  },
   components: {
        swiper,
        swiperSlide
    },
  methods:{
    upandown : function () {
      this.$router.push('upanddown')
    },
    pullupandown : function () {
      this.$router.push('pullupdown')
    },
    leftandright : function () {
      this.$router.push('leftandright')
    },
    reflashlocation : function () {
      this.$router.push('reflashlocation')
    },
    clicktoast : function () {
      this.$toast({
        "msg":"差不多就这样吧",
        "settime":5000
      })
    },
    clickswiper : function () {
      this.$router.push('navhome')
    },
    clickVueAwesomeSwiper : function () {
      this.$router.push('VueAwesomeSwiperhome')
    },
    circleball : function () {
      this.$router.push("circleball")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
      font-weight: normal;
    }
    h3{
      color: red;
      text-decoration: underline
    }

    .swiper{
      margin :10px auto;
      width: 100%;
      height: 200px;
      overflow: hidden;
    }
    .swiper-slide{
      width: 90%;
      height:200px
    }
    .swiper-slide-active img {
      margin-top: 0;
      width: 100%;
      height: 100%;
    }
    img {
      display :block;
      margin: 0 auto;
      margin-top: 3.5%;
      width: 90.625%;
      height: 90.625%;
      /* vertical-align :middle; */
      -webkit-transition: all 1s ease 0s;
      -moz-transition: all 1s ease 0s;
      -ms-transition: all 1s ease 0s;
      -o-transition: all 1s ease 0s;
      transition: all 1s ease 0s;
    }
</style>
