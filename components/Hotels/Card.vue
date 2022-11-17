<script setup>
import { ref } from 'vue'

const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}.jpg`, import.meta.url).href
}

const isFav = ref(false)

// const props = defineProps([
//     'product'
// ])

</script>

<template>
    
    <nuxt-link to="#" class="group relative w-full h-80 shadow-lg text-white rounded-lg overflow-hidden hover:scale-105 transition">

        <slot></slot>

        <div class="absolute bottom-0 left-0 right-0 py-2 px-4 flex flex-col bg-black bg-opacity-20 group-hover:bg-opacity-40">

          <h4 class="text-md font-bold">Hotel Denshal</h4>

          <p class="text-xs font-semibold">100 Whatever Street, USA</p>

          <p class="text-sm font-bold mb-1">$1000 Night</p>

          <div class="flex gap-1 w-max self-end -mt-1 lg:-mt-2">
            <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-xs"/>
            <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-xs"/>
            <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-xs"/>
            <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-xs"/>
            <font-awesome-icon icon="fa-regular fa-star" class="text-semidarkyellow text-xs"/>
          </div>
        </div>

        <div class="absolute top-2 right-2">
          <font-awesome-icon class="text-white text-2xl" :icon="isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" @click.prevent="() => isFav = !isFav" />
        </div>

    </nuxt-link>

</template>