<script setup>

definePageMeta({
    layout: 'listing'
})

const { id } = useRoute().params

</script>


<template>
    
   <section class="flex flex-col gap-8 bg-gray-100 text-black font-montserrat">

        <main class="md:container mx-auto px-2 py-16 grid grid-cols-3 gap-4 w-full">

            <section class="w-full col-span-2 grid grid-col gap-4">

                <HotelGallery />

                <HotelDetails />

            </section>

            <aside class="w-full col-span-1 h-full flex flex-col gap-4">

                <HotelMap />

                <HotelRatings />

                <HotelBlog />

            </aside>

        </main>

   </section>

</template>