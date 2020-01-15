<template>
    <!--定义外层-->
    <div class="wrapper" ref="wrapper">
        <!--定义需要滚动的内容区域-->
        <ul class="content">
            <li v-for="item in items" :style="{background:item.bg,height:height}" :key="item.text">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:'upanddown',
    data () {
        return {
            items: [
                {
                    bg:'#f00',
                    text:'第一个'
                },
                {
                    bg:'#f90',
                    text:'第二个'
                },
                {
                    bg:'#360',
                    text:'第三个'
                },
                {
                    bg:'#630',
                    text:'第四个'
                }
            ],
            height:0
        }
    },
    created(){
        this.height = window.innerHeight + 'px';
    },
    mounted() {
        // 设置20ms的延迟
        let that=this;
        this.$nextTick(function(){
            that._initScroll();
        })
        // 监听窗口改变重置高度
        window.addEventListener('resize', () => {
            this.height = window.innerHeight + 'px';
        })
    },
    methods: {
        _initScroll() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                scrollY: true,
                click: true,
                snap: { // 设置不是循环的(设置loop设置true就会在前后加一个)
                    loop: false,
                    threshold: 0.3,
                    speed: 400
                },
                bounce: {
                    top: true,
                    bottom: true,
                    left: true,
                    right: true
                },
                momentum:false
            })
        }
    }
}
</script>

<style scoped>

    .wrapper{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #222;
    }
    li{
        list-style:none;
        width:100%;
        text-align:center;
        color:#fff;
    }
</style>