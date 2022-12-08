<script setup>

definePageMeta({
    layout: 'listing'
})

const { id } = useRoute().params

</script>


<template>
    
   <section class="flex flex-col gap-14 bg-gray-100 text-black font-montserrat">

        <main class="md:container mx-auto px-2 pt-16 pb-6 grid grid-cols-3 gap-4 w-full">

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

        <section class="md:container mx-auto px-12 flex flex-col gap-6">

            <h4 class="text-xl font-bold">
                Facilities
            </h4>

            <div class="px-20 grid grid-cols-3">

                <HotelFacility icon="kitchen" label="Kitchen"/>
                <HotelFacility icon="television" label="Television with Netflix"/>
                <HotelFacility icon="cleaning" label="Cleaning Service"/>
                <HotelFacility icon="ac" label="Air Conditioner"/>
                <HotelFacility icon="wifi" label="Free Wireless Internet"/>
                <HotelFacility icon="telephone" label="Telephone Connection"/>
                <HotelFacility icon="washer" label="Washer"/>
                <HotelFacility icon="balcony" label="Balcony or Patio"/>
                <HotelFacility icon="kingbed" label="King size bed"/>


            </div>

        </section>

        <section class="md:container mx-auto px-12 flex flex-col gap-6">

            <h4 class="text-xl font-bold">
                Safety and Hygiene
            </h4>

            <div class="px-20 grid grid-cols-3">

                <HotelFacility icon="dailycleaning" label="Daily Cleaning"/>
                <HotelFacility icon="fireext" label="Fire Extinguishers"/>
                <HotelFacility icon="disinfections" label="Disinfections and Sterilizations"/>
                <HotelFacility icon="smoke" label="Smoke Detectors"/>


            </div>

        </section>

        <section class="md:container mx-auto px-12 flex flex-col gap-6">

            <h4 class="text-xl font-bold">
                Availability
            </h4>

            <SharedTable />

        </section>

   </section>

</template>