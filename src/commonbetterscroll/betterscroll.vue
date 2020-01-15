<template>
    <!--定义外层-->
    <div class="wrapper" ref="wrapper">
        <!--定义需要滚动的内容区域-->
        <ul class="content">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:'commonbetterscroll',
    data () {
        return {
            
        }
    },
    props: {
      /**
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 1
      },
      /**
       * 点击列表是否派发click事件
       */
      click: {
        type: Boolean,
        default: true
      },
      /**
       * 是否开启横向滚动
       */
      scrollX: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 列表的数据
       */
      data: {
        type: Array,
        default: null
      },
      /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
      pullup: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发顶部下拉的事件，用于下拉刷新
       */
      pulldown: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发列表滚动开始的事件
       */
      beforeScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 当数据更新后，刷新scroll的延时。
       */
      refreshDelay: {
        type: Number,
        default: 20
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
                momentum:false,
                 pullUpLoad: {
            threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
          }
            })
            this.scroll.on('pullingUp', () => {
            console.log(111)
        //   this.pages++;
        //   this.getDoctorList('', this.pages);
        //   this.doctorBox.finishPullUp(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
          setTimeout(() => {
            this.scroll.refresh();
          }, 500);
        })
            // 是否派发滚动事件
        if (this.listenScroll) {
          let me = this
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }

        // 是否派发滚动到底部事件，用于上拉加载
        if (this.pullup) {
            console.log(8888)
          this.scroll.on('scrollEnd', () => {
            // 滚动到底部
            console.log(this.scroll.y)
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              this.$emit('scrollToEnd')
            }
          })
        }

        // 是否派发顶部下拉事件，用于下拉刷新
        if (this.pulldown) {
            console.log(99999)
            this.scroll.on('scroll',(pos)=>{
              if(pos.y>30){
                 this.$emit('pulldown')
              }
            })
          this.scroll.on('touchend', (pos) => {
            // 下拉动作
            if (pos.y > 50) {
              //处理更新事件
              this.$emit('pulldown')
            }
          })
        }

        // 是否派发列表滚动开始的事件
        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll')
          })
        }
        },
        disable() {
        // 代理better-scroll的disable方法
        this.scroll && this.scroll.disable()
      },
      enable() {
        // 代理better-scroll的enable方法
        this.scroll && this.scroll.enable()
      },
      refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        // 代理better-scroll的scrollTo方法
        console.log(2222)
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        // 代理better-scroll的scrollToElement方法
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      ceshi () {
          console.log(111)
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