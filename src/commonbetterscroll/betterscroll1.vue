<template>
    <div ref="wrapper">
        <div class="contetn">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
     name:"commonbetterscroll",
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
    data () {
       return{
           height:0
       }
    },
    created () {
        this.height = window.innerHeight + 'px';
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout(() => {
        this._initScroll()
      }, 20)
      // 监听窗口改变重置高度
        window.addEventListener('resize', () => {
            this.height = window.innerHeight + 'px';
        })
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollX: this.scrollX,
           bounce: {
                    top: true,
                    bottom: true,
                    left: true,
                    right: true
                },
          probeType: 3,
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
          this.scroll.on('touchend', (pos) => {
            // 下拉动作
            if (pos.y > 50) {
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
    },
    watch: {
      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      data() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
}
</script>

<style>
.wrapper{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #222;
    }

/* //startX: 0 开始的X轴位置
startY: 0 开始的Y轴位置
scrollY: true 滚动方向为 Y 轴
scrollX: true 滚动方向为 X 轴
click: true 是否派发click事件，通常判断浏览器派发的click还是betterscroll派发的click，可以用event._constructed，若是bs派发的则为true
directionLockThreshold: 5
momentum: true 当快速滑动时是否开启滑动惯性
bounce: true 是否启用回弹动画效果
selectedIndex: 0 wheel 为 true 时有效，表示被选中的 wheel 索引
rotate: 25 wheel 为 true 时有效，表示被选中的 wheel 每一层的旋转角度
wheel: false 该属性是给 picker 组件使用的，普通的列表滚动不需要配置
snap: false 该属性是给 slider 组件使用的，普通的列表滚动不需要配置
snapLoop: false 是否可以无缝循环轮播
snapThreshold: 0.1 用手指滑动时页面可切换的阈值，大于这个阈值可以滑动的下一页
snapSpeed: 400, 轮播图切换的动画时间
swipeTime: 2500 swipe 持续时间
bounceTime: 700 弹力动画持续的毫秒数
adjustTime: 400 wheel 为 true 有用，调整停留位置的时间
swipeBounceTime: 1200 swipe 回弹 时间
deceleration: 0.001 滚动动量减速越大越快，建议不大于0.01
momentumLimitTime: 300 符合惯性拖动的最大时间
momentumLimitDistance: 15 符合惯性拖动的最小拖动距离
resizePolling: 60 重新调整窗口大小时，重新计算better-scroll的时间间隔
preventDefault: true 是否阻止默认事件
preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ } 阻止默认事件
HWCompositing: true 是否启用硬件加速
useTransition: true 是否使用CSS3的Transition属性
useTransform: true 是否使用CSS3的Transform属性
probeType: 1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
 

Events 事件
beforeScrollStart - 滚动开始之前触发
scrollStart - 滚动开始时触发
scroll - 滚动时触发
scrollCancel - 取消滚动时触发
scrollEnd - 滚动结束时触发
touchend - 手指移开屏幕时触发
flick - 触发了 fastclick 时的回调函数
refresh - 当 better-scroll 刷新时触发
destroy - 销毁 better-scroll 实例时触发
Example:

let scroll = new BScroll(document.getElementById('wrapper'),{
   probeType: 3
})
 
scroll.on('scroll', (pos) => {
  console.log(pos.x + '~' + pos.y)
})
 

函数列表
scrollTo(x, y, time, easing)
滚动到某个位置，x,y 代表坐标，time 表示动画时间，easing 表示缓动函数
scroll.scrollTo(0, 500)

 

scrollToElement(el, time, offsetX, offsetY, easing)
滚动到某个元素，el（必填）表示 dom 元素，time 表示动画时间，offsetX 和 offsetY 表示坐标偏移量，easing 表示缓动函数

 

refresh()
强制 scroll 重新计算，当 better-scroll 中的元素发生变化的时候调用此方法

 

getCurrentPage()
snap 为 true 时，获取滚动的当前页，返回的对象结构为 {x, y, pageX, pageY}，其中 x,y 代表滚动横向和纵向的位置；pageX，pageY 表示横向和纵向的页面索引。用法如：getCurrentPage().pageX

 

goToPage(x, y, time, easing)
snap 为 true，滚动到对应的页面，x 表示横向页面索引，y 表示纵向页面索引， time 表示动画，easing 表示缓动函数（可省略不写）

 

enable()启用 better-scroll，默认开启
 

disable()  禁用 better-scroll
  */

/* destroy() 销毁 better-scroll，解绑事件 */
</style>
