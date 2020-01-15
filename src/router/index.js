import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import upanddown from '@/components/upanddown'
import pullupdown from '@/components/pullupanddown'
import leftandright from '@/components/leftandright'
import reflashlocation from '@/components/reflashlocation'
import reflashlocation1 from '@/components/reflashlocation1'
import reflashlocation2 from '@/components/reflashlocation2'
import reflashlocation3 from '@/components/reflashlocation3'
import reflashlocation4 from '@/components/reflashlocation4'
import navhome from '@/swiper/navhome'
import one from '@/swiper/one'
import two from '@/swiper/two'
import thress from '@/swiper/thress'
import four from '@/swiper/four'
import VueAwesomeSwiperhome from '@/VueAwesomeSwiper/VueAwesomeSwiperhome'
import circleball from '@/components/circleball'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/circleball",
      name:'circleball',
      component:circleball
    },
    {
      path: '/upanddown',
      name: 'upanddown',
      component: upanddown
    },
    {
      path: '/VueAwesomeSwiperhome',
      name: 'VueAwesomeSwiperhome',
      component: VueAwesomeSwiperhome
    },
    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/two',
      name: 'two',
      component: two
    },
    {
      path: '/thress',
      name: 'thress',
      component: thress
    },
    {
      path: '/four',
      name: 'four',
      component: four
    },
    {
      path: '/pullupdown',
      name: 'pullupdown',
      component: pullupdown
    },
    {
      path: '/leftandright',
      name: 'leftandright',
      component: leftandright
    },
    {
      path: '/navhome',
      name: 'navhome',
      component: navhome
    },
    {
      path:'/reflashlocation',
      name:'reflashlocation',
      component:reflashlocation,
      children:[
        {
          path: '/',
          name: 'reflashlocation1',
          component: reflashlocation1
        },
        {
          path: '/reflashlocation1',
          name: 'reflashlocation1',
          component: reflashlocation1
        },
        {
          path: '/reflashlocation2',
          name: 'reflashlocation2',
          component: reflashlocation2
        },
        {
          path: '/reflashlocation3',
          name: 'reflashlocation3',
          component: reflashlocation3
        },
        {
          path: '/reflashlocation4',
          name: 'reflashlocation4',
          component: reflashlocation4
        },
      ]
    }
  ]
})
