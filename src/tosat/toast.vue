<template>
    <div class="toast">
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    name:'Toast',
    data () {
        return {
           "msg":"哎呀，出错了~",
           "settime":2000
        }
    },
    mounted () {
        setTimeout(()=>{
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        },this.settime)
    }
}
</script>

<style scoped>
    .toast{
        display: flex;
        align-items: center;
        justify-content: center;
        position:fixed;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        color: #fff;
        z-index: 999;
        background: transparent;
    }
    .toast p{
        padding: 12px 22px;
        font-size: 18px;
        border-radius: 4px;
        background: rgba(17, 17, 17, 0.7)
    }
</style>
