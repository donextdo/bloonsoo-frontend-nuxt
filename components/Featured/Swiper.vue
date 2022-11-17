<script setup>

import { ref, } from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue";
  
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../assets/css/swiperCustom.css"

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
        :slidesPerView="1"
        :centeredSlides="true"
        :modules="modules"
        :loop="true"
        :lazy="true"
        :pagination="pagination"
        class="w-full h-full rounded-lg z-10"
    >

        
        <swiper-slide>

        <img src="@/assets/featured/image_1.jpg" loading="lazy" class="w-full h-full object-cover" alt="">

        </swiper-slide>

        <swiper-slide>

        <img src="@/assets/featured/image_2.jpg" loading="lazy" class="w-full h-full object-cover" alt="">

        </swiper-slide>

        <swiper-slide>

        <img src="@/assets/featured/image_3.jpg" loading="lazy" class="w-full h-full object-cover" alt="">

        </swiper-slide>

        <swiper-slide>

        <img src="@/assets/featured/image_4.jpg" loading="lazy" class="w-full h-full object-cover" alt="">

        </swiper-slide>

    </swiper>

</template>