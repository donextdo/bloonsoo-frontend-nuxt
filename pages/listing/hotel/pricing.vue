    <script setup>

    import { useHotelId } from '~~/composables/state';

    definePageMeta({
        layout: 'listing',
        // middleware: ['auth']
    })

    const router = useRouter()

    const hotelId = useHotelId()

    const config = useRuntimeConfig()

    const baseUrl = config.public.baseUrl

    const token = localStorage.getItem('token')

    const rooms = ref([])

    const groupedRooms = ref()

    onMounted( async () => {
        const roomsArr = await $fetch(`${baseUrl}/api/rooms/bypropertyid/${hotelId.value}`)
        
        rooms.value = roomsArr
        
    })

    const postNext = () => {
        router.push({ path: '/listing/hotel/facilities'})
    }

    </script>


    <template>
        <section class="md:container mx-auto px-10 py-16 flex flex-col gap-8 text-black font-montserrat">

            <h2 class="text-2xl font-semibold mb-6">
                List your property on Bloonsoo.com
            </h2>

            <ListingHotelTabs active_1 active_2/>

            <ListingFormCard v-if="(rooms.length == 0)" label="Layout and pricing" >

                <div class="px-4 flex flex-col gap-6">

                    <h4 class="text-sm text-gray-600 font-semibold">
                        Give us the information of the room that you willing to add first.
                    </h4>

                    <div class="w-full h-70vh bg-white shadow-lg flex flex-col items-center gap-10 justify-center">

                        <ListingBed />

                        <p class="text-sm font-semibold text-gray-500 text-center max-w-lg">
                            No rooms have been added to your property. Start adding rooms to describe bed options, layout and pricing for guests. 
                        </p>

                        <NuxtLink to="/listing/hotel/addroom" class="py-3 px-10 w-max rounded-lg text-sm text-white font-semibold cursor-pointer bg-blue-700 hover:bg-blue-900">
                            Add Room
                        </NuxtLink>

                    </div>

                    <h4 class="text-sm text-gray-600 font-semibold">
                        After you complete registration, you will still be able to make changes to your listing before it goes live. 
                    </h4>

                    

                </div>

            </ListingFormCard>

            <SharedTable v-if="(rooms.length > 0)" :headers="[
                'Room Type',
                'Sleeps',
                'Price for one night',
                'Your Choices',
                'Rooms',
                'Actions'
            ]"> 
            
                <SharedRow v-for="dto in rooms" :key="dto._id" :dto="dto">
                
                    <template v-slot:rooms>
                        <h4 class="text-base text-gray-800 font-semibold">
                            {{ dto.nbr_of_rooms }}
                        </h4>
                    </template>

                    <template v-slot:actions>

                        <button class="w-8 h-8 rounded-full bg-blue-500">
                            <font-awesome-icon icon="fa-solid fa-pen-square" class="text-white text-base"/>
                        </button>

                        <button class="w-8 h-8 rounded-full bg-red-500">
                            <font-awesome-icon icon="fa-solid fa-trash" class="text-white text-base"/>
                        </button>

                    </template>

                </SharedRow>

            </SharedTable>

            <NuxtLink to="/listing/hotel/addroom" v-if="(rooms.length > 0)" class="self-end w-max px-8 py-3 bg-blue-700 text-white font-semibold text-sm rounded-lg hover:bg-blue-900">
                Add Another Room
            </NuxtLink>

            <button @click="postNext" class="w-full py-4 bg-blue-700 text-white font-semibold text-base rounded-lg hover:bg-blue-900">
                Next
            </button>

        </section>
    </template>