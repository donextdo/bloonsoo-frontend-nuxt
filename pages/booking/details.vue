<script setup>

definePageMeta({
    layout: 'listing'
})

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

</script>


<template>
    
   <section class="text-black font-montserrat md:container mx-auto px-2 flex flex-col gap-14 py-6">

        <BookingTabs/>

        <main class="grid grid-cols-3 gap-8 w-full">

            <section class="w-full col-span-2 grid grid-col gap-4">

                <BookingHotelCard />

                <div class="  shadow-md  w-full h-40 p-5 mb-4">
                    <p class="font-bold mb-5">Your booking details </p>
                    
                    <div class=" flex row px-6 mb-2">
                        <font-awesome-icon icon="fa-solid fa-circle-check" class="text-green-600 text-xl mx-6" />
                        <p class=" text-md  ">No payment is required to secure this booking. You'll pay during your stay. </p>
                    </div>

                </div>

                <BookingDetailsInfo />

            </section>

            <aside class="w-full col-span-1 h-full flex flex-col gap-4">

                <BookingCheckIn />

            </aside>

            

        </main>
        <button @click="createHotel" class="w-full py-4 btn-accent">
            Next
        </button>
   </section>

</template>
