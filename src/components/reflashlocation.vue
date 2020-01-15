<template>
    <div class="outerdiv">
       <div class="leftdiv">
           <div v-for="item in leftlist" :key="item.id" :class="currentleft==item.id?'leftactive':''" @click="changeid(item.id)">
                {{item.name}}
            </div>
       </div>
       <div class="rightdiv">
           <reflashlocation1 v-if='currentleft=="1"'></reflashlocation1>
           <reflashlocation2 v-if='currentleft=="2"'></reflashlocation2>
           <reflashlocation3 v-if='currentleft=="3"'></reflashlocation3>
           <reflashlocation4 v-if='currentleft=="4"'></reflashlocation4>
       </div>
    </div>
</template>

<script>
import reflashlocation1 from '@/components/reflashlocation1'
import reflashlocation2 from '@/components/reflashlocation2'
import reflashlocation3 from '@/components/reflashlocation3'
import reflashlocation4 from '@/components/reflashlocation4'
export default {
   name : 'reflashlocation',
   data () {
       return {
          leftlist:[
              {
                  'name':'第一页',
                  'id':'1'
              },
              {
                  'name':'第二页',
                  'id':'2'
              },
              {
                  'name':'第三页',
                  'id':'3'
              },
              {
                  'name':'第四页',
                  'id':'4'
              },
          ],
          currentleft:'1',
          rightcontent:["第一页内容","第二页内容","第三页内容","第四页内容"]
       }
   },
   created () {
       console.log(window.location.hash)
   },
   components:{
       reflashlocation1,
       reflashlocation2,
       reflashlocation3,
       reflashlocation4
   }
   ,
   methods : {
       changeid (id) {
           this.currentleft=id;
       }
   }
}
</script>

<style scoped>
.outerdiv{
    display: flex;
    height: 100%;
    margin-top: -60px;
}
.leftdiv{
    height: 100%;
    width: 20%;
    border-right: 1px solid gold;
}
.leftdiv div{
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #fff;
    background-color: blue;
    color: #fff;
}
.leftdiv .leftactive {
    background-color: #fff;
    color: blue;
}
</style>
