<template>
    <scroll :pullup="pullup" :pulldown="pulldown" @scrollToEnd="scrollToEnd" @pulldown="pulldown1" ref="aaa">
        <li v-for="item in num" :key="item" @click="con">{{item}}</li>
        <h3 ref="db">底部</h3>
    </scroll>
</template>

<script>
import scroll from '../commonbetterscroll/betterscroll'
export default {
    name:"pullupdown",
    data () {
        return{
           'pullup':true,
           'pulldown':true,
           'num':200
        }
    },
    components:{
        'scroll':scroll
    },
    methods:{
        scrollToEnd () {
            console.log("到底部了")
        },
        pulldown1 () {
            console.log('到顶部了')
        },
        con () {
            this.$refs.aaa.scrollToElement(this.$refs.db)
        }
    }
}
</script>

<style>

</style>
