<script setup>

definePageMeta({
    layout: 'listing'
})

const hotel = ref({})

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

onMounted(async () => {
    const { id } = useRoute().params

    const hotelData = await $fetch(`${baseUrl}/api/hotel/${id}`)
    console.log(hotelData)

    hotel.value = hotelData
    console.log(hotelData)
})

const showGallery = ref(false)

const toggleGallery = () => {
    showGallery.value = !showGallery.value
}

const showRoomModal = ref(false)
const currentRoom = ref(null)

const toggleRoomModal = (id) => {
    const room = hotel.value.rooms.filter(room => {
        return room._id === id
    })

    currentRoom.value = room[0]
    showRoomModal.value = !showRoomModal.value
}

const closeRoomModal = () => {
    showRoomModal.value = !showRoomModal.value
}

const handleReserve = () => {
    useRouter().push({path: '/coming_soon'})
}

</script>


<template>
    
   <section class="flex flex-col gap-14 bg-gray-100 text-black font-montserrat">
        <main class="md:container mx-auto px-2 pt-16 pb-6 grid grid-cols-3 gap-4 w-full">

            <section class="w-full col-span-2 grid grid-col gap-4">

                <HotelGallery :images="hotel.gallery_images" @onClick="toggleGallery" />

                <HotelDetails :hotel="hotel"/>

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

            <SharedTable :headers="[
                'Room Type',
                'Sleeps',
                'Price for 10 nights',
                'Your Choices',
                'Rooms'
            ]">
            
            <SharedRow v-for="room in hotel.rooms" :key="room._id" :dto="room" @onClick="toggleRoomModal">
            
                <template v-slot:rooms>
                    <h4 class="text-base text-gray-800 font-semibold">
                        {{ room.nbr_of_rooms }}
                    </h4>
                </template>

                <template v-slot:actions>

                    <button
                    @click="handleReserve" 
                    class="px-10 py-2 rounded-full border w-max  border-darkyellow text-sm font-semibold hover:bg-gradient-to-b hover:from-darkyellow hover:to-semidarkyellow hover:text-black" to="#">
                        Reserve
                    </button>

                </template>

            </SharedRow>

            </SharedTable>

        </section>

        <section class="md:container mx-auto px-12 flex flex-col gap-6 mb-14">
            <h4 class="text-xl font-bold">
                House Rules
            </h4>

            <div class="bg-gray-200 p-10 flex flex-col gap-10">
                <div class="grid grid-cols-4">

                    <div class="flex items-center gap-3">
                        <font-awesome-icon icon="fa-solid fa-calendar" class="text-lg text-blue-700" />
                        <span class="text-sm font-semibold">Check In</span>
                    </div>

                    <p class="col-span-3 text-sm font-normal">
                        Check in from {{ hotel.policies?.check_in_form }} until {{ hotel.policies?.check_in_untill }}
                    </p>

                </div>

                <div class="grid grid-cols-4">

                    <div class="flex items-center gap-3">
                        <font-awesome-icon icon="fa-solid fa-calendar" class="text-lg text-blue-700" />
                        <span class="text-sm font-semibold">Check Out</span>
                    </div>

                    <p class="col-span-3 text-sm font-normal">
                        Check out from {{ hotel.policies?.check_out_form }} until {{ hotel.policies?.check_out_untill }}
                    </p>
                </div>

                <div class="grid grid-cols-4">

                    <div class="flex items-center gap-3">
                        <SharedLogosCancel />
                        <span class="text-sm font-semibold">Cancellation/ <br> prepayment</span>
                    </div>

                    <p class="col-span-3 text-sm font-normal">
                        Advance can guests cancel free of charge within {{ hotel.policies?.cancellation_duration }} days.
                    </p>
                </div>

                <div class="grid grid-cols-4">

                    <div class="flex items-center gap-3">
                        <font-awesome-icon icon="fa-solid fa-paw" class="text-lg text-blue-700" />
                        <span class="text-sm font-semibold">Pets</span>
                    </div>

                    <p class="col-span-3 text-sm font-normal">
                        {{ hotel.policies?.pets ? 'Pets are allowed' : 'Not allowed' }}
                    </p>
                </div>

                <div class="grid grid-cols-4">

                    <div class="flex items-center gap-3">
                        <font-awesome-icon icon="fa-solid fa-credit-card-alt" class="text-lg text-blue-700" />
                        <span class="text-sm font-semibold">Card <br> Payments</span>
                    </div>

                    <p class="col-span-3 text-sm font-normal">
                        {{ hotel.credit_card_options ? 'Available' : 'Not available' }}
                    </p>
                </div>

            </div>

        </section>

        <GalleryModal v-if="showGallery" @onClose="toggleGallery" :images="hotel.gallery_images"/>
        <RoomModal v-if="showRoomModal" @onClose="closeRoomModal" :room="currentRoom" :address="hotel.property_address" />

   </section>

</template>