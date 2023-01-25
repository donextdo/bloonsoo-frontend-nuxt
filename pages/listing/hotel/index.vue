<script setup>

definePageMeta({
    layout: 'listing',
    // middleware: ['auth']
})

</script>

<template>
    <section class="md:container mx-auto px-10 py-16 flex flex-col gap-8 text-black font-montserrat">

        <h2 class="text-2xl font-semibold mb-6">
            List your property on Bloonsoo.com
        </h2>

        <ListingHotelTabs active_1 />

        <ListingBasicInfo />

    </section>
</template>