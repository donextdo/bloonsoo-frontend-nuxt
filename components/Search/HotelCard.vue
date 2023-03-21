<script setup>

const props = defineProps({
    hotel: {
      type: Object
    }
})

</script>

<template>
    
    <div class="bg-white shadow-md w-full grid  md:grid-cols-5 mb-10 ">

        <img :src="hotel.cover_image" 
            class="w-full aspect-square object-cover col-span-3 md:col-span-2"
            alt=""
        >

        <div class="w-full col-span-3 h-full p-6 flex flex-col">

            <div class="flex items-start justify-between mb-5">

                <div class="">
                    <h3 class="text-lg font-bold text-blue-700"> 
                        {{ hotel.property_name }}
                    </h3>    

                    <p class="text-sm md:text-base font-medium text-gray-600">
                        {{ hotel.property_address.street_address }}, {{ hotel.property_address.country }}
                    </p>
                </div>

                <div class="flex gap-1 w-max">
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-sm"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-sm"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-sm"/>
                    <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-sm"/>
                    <font-awesome-icon icon="fa-regular fa-star" class="text-semidarkyellow text-sm"/>
                </div>

            </div>

            <div class="flex flex-col gap-6">

              <!-- <div class="col-span-3">
                <p class="text-gray-500 font-semibold text-sm mb-5 max-w-md p-2 border-2">
                  Recommended for your group
                </p>

                <p class="text-sm text-gray-600 w-4/5 mb-5">
                  Deluxe Double Room with Free Late check out till 4PM (STA), Free High Tea from Thursday to Sunday, 15% Off on F&B, 10% Off on Laundry & Free access to the Infinity Pool
                </p>

                <p class="text-sm font-bold text-gray-600 w-4/5 mb-7">
                  Free cancellation - No prepayment needed
                </p>

                <p class="text-sm text-gray-600 w-4/5">
                  You can cancel later, so lock in this great price today.
                </p>
              </div> -->

              <div class="w-full">
                <!-- <p class="p-2 text-gray-500 font-semibold text-sm mb-5">
                  18 nights, 2 adults, 1 child               
                </p>

                <p class="p-2 font-bold text-xl mb-5">
                  LKR 467,950 
                </p>

                <p class="p-2 text-gray-500 font-semibold text-sm mb-10">
                  +LKR 238,440 taxes and charges
                </p> -->

                <p class="text-sm text-gray-600 font-semibold">
                  {{ hotel?.about.substr(0, 400) }}...
                </p>

                <NuxtLink :to="`/hotels/${hotel._id}`"
                class=" flex items-center justify-center py-3 md:px-6  w-1/2 rounded-full mx-auto md:ml-auto mt-10 text-sm text-black font-semibold bg-gradient-to-b from-darkyellow to-semidarkyellow hover:from-semidarkyellow hover:to-darkyellow">
                  See Availability
                </NuxtLink>
              </div>

            </div>



        </div>
    </div>

</template>