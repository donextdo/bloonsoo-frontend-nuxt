<script setup>

definePageMeta({
    layout: 'listing'
})

</script>


<template>

    <section class="md:container mx-auto px-10 py-16 flex flex-col gap-6 text-black font-montserrat">

        <div>
            <h2 class="text-2xl font-semibold mb-8">
                List your property on Bloonsoo.com
            </h2>

            <p class="text-base text-gray-500 font-normal">
                What kind of place will you host?
            </p>
        </div>

        <div class="grid grid-cols-2 gap-4 justify-items-center lg:grid-cols-4 md:gap-8">
            
            <ListingCard title="Room" path="#">
                <img src="../../assets/listing/Room.png" loading="lazy" class="w-full h-full object-contain" alt="">
            </ListingCard>

            <ListingCard title="Flat" path="#">
                <img src="../../assets/listing/Flat.png" loading="lazy" class="w-full h-full object-contain" alt="">
            </ListingCard>

            <ListingCard title="Hotel" path="/listing/hotel">
                <img src="../../assets/listing/Hotel.png" loading="lazy" class="w-full h-full object-contain" alt="">
            </ListingCard>

            <ListingCard title="Villa" path="#">
                <img src="../../assets/listing/Villa.png" loading="lazy" class="w-full h-full object-contain" alt="">
            </ListingCard>

        </div>

    </section>

</template>