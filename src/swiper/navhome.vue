<template>
    <div class="navhome">
        <v-nav></v-nav>
        <v-swiper class="vswiper"></v-swiper>
    </div>
</template>

<script>
import nav1 from './nav.vue'
import swiper1 from './swiper.vue'
export default {
    name : 'navhome',
    data () {
        return {

        }
    },
    components : {
        'v-nav' : nav1,
        'v-swiper':swiper1
    }
}
</script>

<style>
    .navhome{
        margin: 0;
        padding: 0;
    }
</style>
