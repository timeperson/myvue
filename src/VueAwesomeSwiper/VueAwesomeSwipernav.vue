<template>
    <div class="nav">
        <ul class="nav-list">
            <li class="item" v-for="(item,index) in navList" :key="index" :class="{'active':navIndex===index}" @click="tabClick(index)">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'VueAwesomeSwipernav',
    props :["swiperindex"],
    data () {
        return {
             navList : [
                {"name":"页面一"},
                {"name":"页面二"},
                {"name":"页面三"},
                {"name":"页面四"}
            ],
            navIndex:0
        }
    },
    watch : {
        swiperindex (newval){
            this.navIndex=newval;
        }
    }
    ,
    methods : {
        tabClick (index) {
            this.navIndex=index;
            this.$emit("changeindex",index)
        }
    }
}
</script>

<style scoped>
    .nav {
        margin-bottom: 20px;
    }
    .nav-list {
        width: 100%;
        overflow: hidden;
    }
    .item {
        width: 25%;
        display: inline-block;
        text-align: center;
        height: 48px;
        line-height: 48px;
    }
    .active {
        background-color: #ccc;
    }
</style>
