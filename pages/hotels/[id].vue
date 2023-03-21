<script setup>
import { useBookingStore } from '~~/stores/bookingStore';
import { useAuthStore } from "~~/stores/authStore"
import { storeToRefs } from "pinia"

definePageMeta({
    layout: 'mini-searchbar'
})

const hotel = ref({})

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

// CREATE BOOKING STORE INSTANCE
const bookingStore = useBookingStore()
const authStore = useAuthStore()

const router = useRouter()

const { user } = storeToRefs(authStore)

const showGallery = ref(false)
const showRoomModal = ref(false)
const showAuthPopup = ref(false)
const currentRoom = ref(null)
const showBookingPopup = ref(false)
const roomIdOnBooking = ref(null)

const showBookingDetails = ref(false)

const { bookings, totalPrice } = storeToRefs(bookingStore)

onMounted(async () => {
    const { id } = useRoute().params

    const hotelData = await $fetch(`${baseUrl}/api/hotel/${id}`)
    console.log(hotelData)

    hotel.value = hotelData
    console.log(hotelData)
})

/**
 * METHODS FOR SHOW GALLERY 
 */
const toggleGallery = () => {
    showGallery.value = !showGallery.value
}

/**
 * METHODS FOR SHOW ROOM MODAL 
 */
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

/**
 * METHODS FOR HANDLING BOOKING PROCESS
 */
// SET CURRENT ROOM ID AND SHOW BOOKING POPUP
const handleReserve = (id) => {
    roomIdOnBooking.value = id
    showBookingPopup.value = true
}

// CLOSE BOOKING POPUP WHEN POPUP EMITS ONCLOSE
const closeBookingPopup = () => {
    showBookingPopup.value = !showBookingPopup.value
}

// POPUP SUBMIT EVENT. OCCURS WHEN POPUP EMITS ONSUBMIT
const onPopupSubmit = (payload) => {
    // GET THE CURRENT ROOM
    const room = hotel.value.rooms.filter(room => {
        return room._id === payload._id
    })
    
    const priceSplit = room[0].price_for_one_night.split(' ')

    const currency = priceSplit[0]
    const basePrice = parseInt(priceSplit[1])

    // CALCULATE PRICE FOR NIGHTS
    const totalPriceForRoom = basePrice * payload.nights * payload.rooms

    // bookings.value.push({
    bookingStore.addBooking({
        id: payload._id,
        nights: payload.nights,
        rooms: payload.rooms,
        adults: payload.adults,
        children: payload.children,
        checkInDate: payload.checkInDate,
        checkOutDate: payload.checkOutDate,
        roomName: room[0].room_name,
        roomType: room[0].room_type,
        totalPrice: `${currency} ${totalPriceForRoom}`
    })

    setTimeout(() => {
        showBookingPopup.value = !showBookingPopup.value
    }, 200)
    
}

// COMPUTING BOOKED ROOMS. RETURNS LIST OF BOOKED ROOM IDS
/**
 * THIS HELPS TO DETERMINE WHETHER ROOM IS BOOKED OR NOT IN THE TABLE
 * IF BOOKEDROOMS INCLUDES THAT ROW ID. IT ASSUMES THAT ROOM IS BOOKED
 */
const bookedRooms = computed(() => {
    return bookings.value.map(b => b.id)
})

// GET THE TOTAL PRICE 
/**
 * CALLING FROM THE TABLE TO GET TOTAL ROOM PRICE TO DISPLAY IN THE TABLE
 */
const checkForBookings = (id) => {
    const match = bookings.value.filter(b => b.id === id).find(b => b.id === id)
    return {
        price: match.totalPrice,
        rooms: match.rooms
    } 
}

const removeFromBookings = (id) => {
    // bookings.value = bookings.value.filter(b => b.id !== id)
    bookingStore.removeBooking(id)
}

/**
 * METHODS FOR SHOW BOOKING DETAILS
 */
const toggleBookingDetails = () => {
    console.log(bookings.value)
    showBookingDetails.value = !showBookingDetails.value
}

/**
 * TRIGGERS WHEN BOOKING DETAILS ONSUBMIT
 */
const onConfirm = () => {
    showBookingDetails.value = !showBookingDetails.value
    bookingStore.setHotelId(hotel.value._id)
    // bookingStore.setBookings(bookings.value)

    if(!user.value) {
        showAuthPopup.value = !showAuthPopup.value
    } 
    else {
        router.push({ path: '/booking/details'})
    }
}

const toggleAuthPopup = () => {
    showAuthPopup.value = !showAuthPopup.value
}

</script>


<template>
    
   <section class="flex flex-col gap-14 bg-gray-50 text-black font-montserrat">
        <main class="md:container md:mx-auto pl-5 md:px-2 pt-16 pb-6 grid md:grid-cols-3 gap-4 w-full">

            <section class="w-56 md:w-full md:col-span-2 grid grid-col gap-4">

                <HotelGallery :images="hotel.gallery_images" @onClick="toggleGallery" />

                <HotelDetails :hotel="hotel"/>

            </section>

            <aside class="w-96 md:w-full md:col-span-1 h-full flex flex-col gap-4">

                <HotelMap />


                <HotelRatings  :hotel="hotel"/>

                <HotelBlog />

            </aside>

        </main>

        <section class="md:container mx-auto px-5 md:px-12 flex flex-col gap-6">

            <h4 class="text-xl font-bold">
                Facilities
            </h4>

            <div class="md:px-20 grid md:grid-cols-3 grid-cols-2">

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

         <section class="md:container mx-auto px-5 md:px-12 flex flex-col gap-6">

            <h4 class="text-xl font-bold">
                Safety and Hygiene
            </h4>

            <div class="md:px-20 grid md:grid-cols-3 grid-cols-2">

                <HotelFacility icon="dailycleaning" label="Daily Cleaning"/>
                <HotelFacility icon="fireext" label="Fire Extinguishers"/>
                <HotelFacility icon="disinfections" label="Disinfections and Sterilizations"/>
                <HotelFacility icon="smoke" label="Smoke Detectors"/>


            </div>

        </section>

         <section id="rooms-area" class="md:container mx-auto pt-4 px-12 flex flex-col gap-6 ">

            <h4 class="text-xl font-bold">
                Availability
            </h4>
            

             <SharedTable :headers="[
                'Room Type',
                'Sleeps',
                'Price for 1 nights',
                'Your Choices',
                'Rooms'
            ]"
            :bookings="bookedRooms.length > 0"
            :total="totalPrice"
            @onResAllClick="toggleBookingDetails"
            class="invisible md:visible"
            >
            
            <SharedRow v-for="room in hotel.rooms" :key="room._id" :dto="room" @onClick="toggleRoomModal">
                
            
                <template v-slot:rooms>
                    <h4 class="text-base text-gray-800 font-semibold">
                        {{ room.nbr_of_rooms }}
                    </h4>
                </template>

                <template v-slot:actions>

                    <button
                    v-if="!bookedRooms.includes(room._id)"
                    @click="handleReserve(room._id)" 
                    class="px-10 py-2 gradient-outline-btn" to="#">
                        Reserve
                    </button>

                    <div 
                    v-if="bookedRooms.includes(room._id)"
                    class="self-start">
                        <p 
                        class="text-sm text-left text-gray-800 font-medium">
                            {{  
                            bookedRooms.includes(room._id) ? 
                            `${checkForBookings(room._id).rooms} room(s) for`
                            : '' 
                            }}
                        </p>

                        <h4 
                        class="text-base text-gray-800 font-semibold">
                            {{  
                            bookedRooms.includes(room._id) ? 
                            `${checkForBookings(room._id).price}`
                            : '' 
                            }}
                        </h4>

                    </div>

                    <button
                    v-if="bookedRooms.includes(room._id)"
                    @click="removeFromBookings(room._id)"
                    class="px-10 py-2 gradient-outline-btn">
                        Cancel
                    </button>
                    

                </template>

            </SharedRow>

            </SharedTable> 

            <!-- <HotelRooms v-for="room in hotel.rooms" :key="room._id" :dto="room" @onClick="toggleRoomModal" class="visible md:invisible"/> -->

            

        </section>  

        <section class="md:container mx-auto px-6 md:px-12 flex flex-col gap-6 mb-14">
            <h4 class="text-xl font-bold">
                House Rules
            </h4>

            <div class="bg-gray-200 p-5 md:p-10 flex flex-col gap-10">
                <div class="grid md:grid-cols-4 grid-cols-2">

                    <div class="flex items-center gap-3">
                        <font-awesome-icon icon="fa-solid fa-calendar" class="text-lg text-blue-700" />
                        <span class="text-sm font-semibold">Check In</span>
                    </div>

                    <p class="md:col-span-3 col-span-1 text-sm font-normal">
                        Check in from {{ hotel.policies?.check_in_form }} until {{ hotel.policies?.check_in_untill }}
                    </p>

                </div>

                <div class="grid md:grid-cols-4 grid-cols-2">

                    <div class="flex items-center gap-3">
                        <font-awesome-icon icon="fa-solid fa-calendar" class="text-lg text-blue-700" />
                        <span class="text-sm font-semibold">Check Out</span>
                    </div>

                    <p class="md:col-span-3 col-span-1 text-sm font-normal">
                        Check out from {{ hotel.policies?.check_out_form }} until {{ hotel.policies?.check_out_untill }}
                    </p>
                </div>

                <div class="grid md:grid-cols-4 grid-cols-2">

                    <div class="flex items-center gap-3">
                        <SharedLogosCancel />
                        <span class="text-sm font-semibold">Cancellation/ <br> prepayment</span>
                    </div>

                    <p class="md:col-span-3 col-span-1 text-sm font-normal">
                        Advance can guests cancel free of charge within {{ hotel.policies?.cancellation_duration }} days.
                    </p>
                </div>

                <div class="grid md:grid-cols-4 grid-cols-2">

                    <div class="flex items-center gap-3">
                        <font-awesome-icon icon="fa-solid fa-paw" class="text-lg text-blue-700" />
                        <span class="text-sm font-semibold">Pets</span>
                    </div>

                    <p class="md:col-span-3 col-span-1 text-sm font-normal">
                        {{ hotel.policies?.pets ? 'Pets are allowed' : 'Not allowed' }}
                    </p>
                </div>

                <div class="grid md:grid-cols-4 grid-cols-2">

                    <div class="flex items-center gap-3">
                        <font-awesome-icon icon="fa-solid fa-credit-card-alt" class="text-lg text-blue-700" />
                        <span class="text-sm font-semibold">Card <br> Payments</span>
                    </div>

                    <p class="md:col-span-3 col-span-1 text-sm font-normal">
                        {{ hotel.credit_card_options ? 'Available' : 'Not available' }}
                    </p>
                </div>

            </div>

        </section> 

        <GalleryModal 
            v-if="showGallery" 
            @onClose="toggleGallery" 
            :images="hotel.gallery_images"
        /> 

        <RoomModal 
            v-if="showRoomModal" 
            @onClose="closeRoomModal" 
            :room="currentRoom" 
            :address="hotel.property_address" 
        /> 

        <BookingPopup 
            v-if="showBookingPopup" 
            @onClose="closeBookingPopup" 
            @onSubmit="onPopupSubmit" 
            :roomId="roomIdOnBooking" 
        /> 

        <BookingDetails 
            v-if="showBookingDetails" 
            @onClose="toggleBookingDetails" 
            @onSubmit="onConfirm"
            :propertyName="hotel.property_name"
            :propertyAddress="hotel.property_address"
            :bookings="bookings"
            :policies="hotel.policies"
        /> 

        <AuthLoginPopup 
            v-if="showAuthPopup"
            @onClose="toggleAuthPopup"
        />   

   </section>

</template>
