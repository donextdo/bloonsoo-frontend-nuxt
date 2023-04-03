<script setup>

import { ref, onMounted } from 'vue'

defineProps({
    title: String,
    topRated: Boolean
})

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const hotels = ref([])

onMounted( async () => {
    const hotelArr = await $fetch(`${baseUrl}/api/hotel/`)
    
    hotels.value = hotelArr
})


const sortedHotels = computed(() => {
    return hotels.value.sort()
  })

  const visibleItems = ref(8);

  const showMore = () => {
    visibleItems.value += 8;
  };

</script>

<template>
    
    <section class=" my-16 md:container md:mx-auto flex flex-col font-montserrat">

        <h1 class="text-3xl text-center font-semibold leading-5 mb-12 -mt-4">
            {{ title }}
        </h1>

        <div class="w-full md:px-20 grid md:grid-cols-2 gap-4 justify-items-center lg:grid-cols-4 md:gap-8">

            <HotelsCard v-for="hotel in sortedHotels.slice(0, visibleItems)" :key="hotel.id" :hotel="hotel">
                <!-- <img src="@/assets/hotel_images/hotel1.jpg" loading="lazy" class="w-full h-full object-cover" alt=""> -->
            </HotelsCard>


            <!-- <HotelsCard>
                <img src="@/assets/hotel_images/hotel2.jpg" loading="lazy" class="w-full h-full object-cover" alt="">
            </HotelsCard>

            <HotelsCard>
                <img src="@/assets/hotel_images/hotel3.jpg" loading="lazy" class="w-full h-full object-cover" alt="">
            </HotelsCard>

            <HotelsCard>
                <img src="@/assets/hotel_images/hotel4.jpg" loading="lazy" class="w-full h-full object-cover" alt="">
            </HotelsCard>

            <HotelsCard v-show="!topRated" >
                <img src="@/assets/hotel_images/hotel5.jpg" loading="lazy" class="w-full h-full object-cover" alt="">
            </HotelsCard>

            <HotelsCard v-show="!topRated" >
                <img src="@/assets/hotel_images/hotel6.jpg" loading="lazy" class="w-full h-full object-cover" alt="">
            </HotelsCard>

            <HotelsCard v-show="!topRated" >
                <img src="@/assets/hotel_images/hotel7.jpg" loading="lazy" class="w-full h-full object-cover" alt="">
            </HotelsCard>

            <HotelsCard v-show="!topRated" >
                <img src="@/assets/hotel_images/hotel8.jpg" loading="lazy" class="w-full h-full object-cover" alt="">
            </HotelsCard> -->

        </div>

        <button v-show="!topRated" @click="showMore" class="py-3 px-8 self-center rounded-full mt-10 text-sm text-black font-bold bg-gradient-to-b from-darkyellow to-semidarkyellow hover:from-semidarkyellow hover:to-darkyellow">View more</button>
    </section>

</template>