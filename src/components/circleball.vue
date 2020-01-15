<template>
    <div>
        <div class="container" :class="{warning:parseInt(num)>60,danger:parseInt(num)>80}">
            <div class="wave"></div>
            <div class="wave-mask" :style="{'top':num1}"></div>
        </div>
        <div>
            使用率
            <div>
                <button class="btn" @click="dele">-</button>
                <span>{{num}}%</span>
                <button class="btn" @click="add">+</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "circleball",
    data () {
        return {
            num :0,
            num1 :"40px"
        }
    },
    watch :{
        num () {
            this.num1=40-parseFloat(this.num)+"px";
        }
    },
    methods : {
        add () {
            if(parseFloat(this.num)<100){
                this.num++
            }
        },
        dele () {
            if(parseFloat(this.num)>1){
                this.num--
            }
        }
    }
}
</script>

<style>
    .btn{
        height: 30px;
        width: 40px;
        font-size: 16px;
    }
    .container {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border:3px solid #67c23a;
        background: #fff;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 5px;
        overflow: hidden;
    }
    .warning {
        border: 3px solid #e6a23c
    }
    .warning .wave {
        background-image: linear-gradient(-180deg,#f0c78a 13%,#e6a23c 91%)
    }
    .danger {
        border: 3px solid #f56c6c
    }
    .danger .wave {
        background-image: linear-gradient(-180deg,#f78989 13%,#f56c6c 91%)
    }
    .wave {
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-image: linear-gradient(-180deg,#aaff80 13%,#67c23a 91%)
    }
    .wave-mask {
        position: absolute;
        width: 200px;
        height: 200px;
        top:0;
        left: 50%;
        border-radius: 42%;
        background-color: rgba(255, 255, 255, 0.9);
        transform: translate(-50%,-70%) rotate(0);
        z-index: 20;
        animation: toTotate 10s linear -5s infinite;
    }
    @keyframes toTotate {
        50% {
            transform: translate(-50%,-70%) rotate(180deg)
        }
        100% {
            transform: translate(-50%,-70%) rotate(360deg)
        }
    }
</style>
