<script setup>

import { ref, } from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue";
  
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/free-mode"
import "swiper/css/thumbs"

import { Pagination, Navigation, Lazy, FreeMode, Thumbs } from "swiper";

defineProps({
    images: {
        type: Array,
        default: []
    }
})

const modules = ref([
    Pagination, Navigation, Lazy, FreeMode, Thumbs
])

const pagination = ref({
    clickable: true
})

let thumbsSwiper = ref(null)

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
}

</script>

<template>

    <div class="w-full h-[90vh] grid grid-rows-5 gap-4">
        <swiper
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="w-full h-full row-span-4 z-10"
        >

            
            <swiper-slide v-for="(img, index) in images" :key="index">

            <img :src="img" loading="lazy" class="w-full h-full object-cover bg-gray-400" alt="">

            </swiper-slide>

        </swiper>

        <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="8"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="w-full h-full z-10"
        >

            
        <swiper-slide v-for="(img, index) in images" :key="index">

        <img :src="img" loading="lazy" class="w-full h-full object-cover bg-gray-400" alt="">

        </swiper-slide>

        </swiper>

    </div>
    

</template>