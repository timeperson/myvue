<template>
    <div class="navhome">
        <VueAwesomeSwipernav @changeindex="getchangenav" :swiperindex="swiperindex"></VueAwesomeSwipernav>
        <VueAwesomeSwiperswiper :navindex="navindex" @swipernum="swipernum"></VueAwesomeSwiperswiper>
    </div>
</template>

<script>
import VueAwesomeSwipernav from './VueAwesomeSwipernav'
import VueAwesomeSwiperswiper from './VueAwesomeSwiperswiper'
export default {
    name : 'VueAwesomeSwiperhome',
    data () {
        return {
            navindex:"0",
            swiperindex :"0"
        }
    },
    components : {
        VueAwesomeSwipernav,
        VueAwesomeSwiperswiper
    },
    methods : {
        getchangenav (index) {
            this.navindex=index;
        },
        swipernum (index) {
            this.swiperindex = index;
        }
    }
}
</script>

<style>
    
</style>
