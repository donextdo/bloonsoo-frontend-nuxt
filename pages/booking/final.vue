<script setup>

definePageMeta({
    layout: 'listing'
})

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

</script>


<template>
    
   <section class="text-black font-montserrat md:container mx-auto px-2 flex flex-col gap-14 py-6">

        <BookingTabs final/>

        <main class="grid grid-cols-3 gap-4 w-full">

            <section class="w-full col-span-2 grid grid-col gap-4">

                <!-- <BookingHotelCard /> -->

                <div class="bg-blue-400 w-full"></div>

                <BookingFinalInfo />

            </section>

            <aside class="w-full col-span-1 h-full flex flex-col gap-4">

                <BookingCheckIn />

                <div class="  shadow-md  w-full p-5 mb-6">
                
                    <p class="font-semibold text-lg mb-2 text-gray-700">Do you have a promo code</p>
                    <SharedTextInput label="Enter your promo code" />

                    <button class="border-2 border-orange-300 rounded-full px-9 py-3 my-5">Apply</button>

                </div>

            </aside>

            

        </main>
        <button @click="createHotel" class="w-full py-4 btn-accent">
          Complete booking 
        </button>
   </section>

</template>
