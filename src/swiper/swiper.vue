<template>
    <div class="swiper-box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slider" v-for="(item,index) in list" :key="index">
                    <keep-alive>
                        <component :is="item.component"></component>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import one from './one.vue'
import two from './two.vue'
import thress from './thress.vue'
import four from './four.vue'
import Swiper from '../../static/swiper.min';
import '../../static/swiper.min.css';
export default {
    name : 'swiper1',
    data () {
        return {
            list : [
                {path:'/one',component:one},
                {path:'/two',component:two},
                {path:'/thress',component:thress},
                {path:'/four',component:four},
            ]
        }
    },
    components :{
        one,
        two,
        thress,
        four
    },
    mounted () {
        var mySwiper = new Swiper('.swiper-container',{
                    // 设定初始化时slide的索引
        initialSlide: this.$route.path === '/one' ? 0 : this.$route.path === '/two' ? 1 : this.$route.path === '/three' ? 2 : this.$route.path === '/four' ? 3 : 0
        })
    }
}
</script>

<style>
    .swiper-box{
        width: 100%;
    }
    .swiper-container{
        width: 100%;
    }
    .swiper-wrapper{
        width: 200%;
    }
    .swiper-slider{
        width: 100%;
    }
</style>
