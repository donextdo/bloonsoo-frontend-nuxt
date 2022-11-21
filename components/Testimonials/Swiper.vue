<script setup>

import { ref, } from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue";
  
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./swiper.css"

import { Pagination, Navigation, Lazy, Autoplay } from "swiper";

const modules = ref([
    Pagination, Navigation, Lazy, Autoplay
])

const pagination = ref({
    clickable: true
})

</script>

<template>
    
    <swiper
        :slidesPerView="2"
        :spaceBetween="40"
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
            }"
        :modules="modules"
        :loop="true"
        :lazy="true"
        class="w-full h-full z-10"
    >

        
        <swiper-slide>

        <TestimonialsCard />

        </swiper-slide>

        <swiper-slide>

        <div class="w-full h-72 bg-red-200"></div>

        </swiper-slide>

        <swiper-slide>

        <div class="w-full h-72 bg-red-800"></div>

        </swiper-slide>

    </swiper>

</template>
