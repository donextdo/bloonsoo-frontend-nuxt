<script setup>

import { ref, } from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue";
  
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./swiper.css"

import { Pagination, Navigation, Lazy } from "swiper";

const modules = ref([
    Pagination, Navigation, Lazy
])

const pagination = ref({
    clickable: true
})

</script>

<template>
    
    <swiper
        :slidesPerView="2"
        :spaceBetween="40"
        :modules="modules"
        :loop="true"
        :lazy="true"
        :pagination="pagination"
        class="w-full h-96 z-10"
    >

        
        <swiper-slide>

        <div class="w-full h-72 bg-red-400"></div>

        </swiper-slide>

        <swiper-slide>

        <div class="w-full h-72 bg-red-200"></div>

        </swiper-slide>

        <swiper-slide>

        <div class="w-full h-72 bg-red-800"></div>

        </swiper-slide>

    </swiper>

</template>
