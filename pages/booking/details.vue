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

            </section>

            <aside class="w-full col-span-1 h-full flex flex-col gap-4">

            </aside>

        </main>

   </section>

</template>
