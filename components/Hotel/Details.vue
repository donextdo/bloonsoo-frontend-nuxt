<script setup>

defineProps({
  hotel: {
    type: Object
  }
})

const isFav = ref(false)



</script>


<template>
    
      <div class="px-8 py-8 bg-white rounded-lg shadow-lg flex flex-col gap-6">

        <div class="flex items-center justify-between ">

            <div class="flex flex-col">
                <h2 class="text-2xl font-bold">{{ hotel.property_name ? hotel.property_name : '' }}</h2>
                <p class="text-sm text-gray-600">{{ hotel.property_address ? hotel.property_address.street_address : ''  }}, {{ hotel.property_address ? hotel.property_address.country : ''  }}</p>
            </div>

          <div class="flex items-center justify-center gap-6">
            
            <button @click="() => isFav = !isFav">
                <font-awesome-icon class="text-red-500 text-3xl" :icon="isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"/>
            </button>

            <button>
                <font-awesome-icon class="text-3xl" icon="fa-solid fa-share-alt"/>
            </button>

            <a href="#rooms-area" 
                class="py-3 px-10 rounded-full 
                w-max gradient-btn">
                Reserve Now
            </a>

          </div>
        </div>


        <div class="flex flex-col gap-2">

          <p class="text-xl font-bold">$ 1000 - $ 2000</p>

          <div class="flex items-center text-sm text-gray-600 gap-10">
            <p>Short Period: $ 1000</p>
            <p>Medium Period: $ 2000</p>
            <p>Long Period: $ 2000</p>
          </div>

          <div class="mt-2 flex items-center gap-10 text-blue-700">
            
            <button class="py-4 text-sm font-semibold flex items-center gap-4">
                <font-awesome-icon class="text-xl" icon="fa-solid fa-phone"/>
                <span>Contact Host</span> 
            </button>

            <button class="py-4 text-sm font-semibold flex items-center gap-4">
                <font-awesome-icon class="text-xl" icon="fa-solid fa-building"/>
                <span>Property Inquiry</span> 
            </button>

          </div>
        </div>

        <div class="pr-4">
          <p class="text-xl font-bold">About Hotel</p>

          <p class="text-justify mt-3 text-gray-600 text-sm">
            {{ hotel.about ? hotel.about : ''}}
          </p>

          <!-- <p class="text-justify mt-3 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p> -->
        </div> 
      </div>
      

</template>