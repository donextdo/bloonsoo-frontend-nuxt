<script setup>

import { ref } from 'vue'

definePageMeta({
    layout: 'listing'
})

const router = useRouter()

const roomType = ref('Please select')
const roomName = ref()
const smokingPolicy = ref('Non-smoking')
const nbrOfRooms = ref()
const bedType = ref('Single bed / 90-130 cm wide')
const noOfBeds = ref('Select the number of beds')
const guests = ref('1')
const roomSize = ref()
const roomSizeUnit = ref('Square meter')
const error = ref(false)
const priceUnit = ref('USD')
const price = ref()

const addRoom = () => {
    router.push({ path: '/listing/hotel/pricing' })
}

</script>


<template>
    <section class="md:container mx-auto px-10 py-16 flex flex-col gap-8 text-black font-montserrat">

        <h2 class="text-2xl font-semibold mb-6">
            List your property on Bloonsoo.com
        </h2>

        <ListingHotelTabs active_1 active_2/>

        <NuxtLink to="/listing/hotel/pricing" class="text-sm -mb-4 font-semibold text-blue-500" >
            Go back to overview 
        </NuxtLink>

        <ListingFormCard label="Please select " >

            <div class="grid grid-cols-2 gap-x-8 gap-y-6 px-4">

                <SharedDropDown 
                    label="Room Type" 
                    v-model="roomType" errorMessage="please enter country" 
                    :options="['Please select', 'Room 1', 'Room 2', 'Room 3']" />

                <SharedTextInput 
                    label="Room Name" 
                    v-model="roomName" errorMessage="please enter name" />

                <SharedDropDown 
                    label="Smoking policy " 
                    v-model="smokingPolicy" errorMessage="please enter country" 
                    :options="['Non-smoking']" />

                <SharedTextInput 
                    label="Number of rooms (of this type) " 
                    v-model="nbrOfRooms" errorMessage="please enter name" 
                    type="number" />

            </div>   

        </ListingFormCard>

        <ListingFormCard label="Bed options" >

            <div class="flex flex-col gap-y-6 px-4">

                <h4 class="text-sm font-semibold text-gray-600">
                    Tell us only about the existing beds in a room. Do not include extra beds. 
                </h4>

                <div class="grid grid-cols-2 gap-x-8 items-end">

                    <SharedDropDown 
                    label="What kind of beds are available in this room?" 
                    v-model="bedType" errorMessage="please enter country" 
                    :options="['Single bed / 90-130 cm wide', 'Bed 1', 'Bed 2', 'Bed 3']" />

                    <SharedDropDown 
                    v-model="noOfBeds" errorMessage="please enter country" 
                    :options="['Select the number of beds', '1', '2', '3']" />

                </div>

                <button class="w-max text-blue-500 font-semibold text-xs">
                    <font-awesome-icon icon="fa-solid fa-plus-circle" class="text-blue-500 text-base "/>
                    Add another bed 
                </button>

                <div class="grid grid-cols-2 gap-x-8 items-end">

                    <SharedDropDown 
                    label="How many guests can stay in this room? " 
                    v-model="guests" errorMessage="please enter country" 
                    :options="['1', '2', '3', '4']" />

                    <SharedDropDown 
                    v-model="noOfBeds" errorMessage="please enter country" 
                    :options="['Select the number of beds', '1', '2', '3']" />

                </div>

            </div>       

        </ListingFormCard>

        <ListingFormCard label="Room Size (Optional)">

            <div class="grid grid-cols-2 gap-x-8 px-4">

                <div class="w-full grid grid-cols-3 items-end">
                    <SharedTextInput 
                    label="How big is the room?" 
                    v-model="roomSize" errorMessage="please enter name" 
                    type="number" class="col-span-2" />

                    <SharedDropDown 
                    v-model="roomSizeUnit" errorMessage="please enter country" 
                    :options="['Square meter', 'Squeare feet']" />
                </div>

            </div>
            
        </ListingFormCard>

        <ListingFormCard label="Base price per night">

            <div class="flex flex-col gap-y-6 px-4">

                <p class="text-sm font-semibold text-gray-600">
                    This is the lowest price that we automatically apply to this room for all dates. Before your property goes live, you can set seasonal pricing in your property dashboard.  
                </p>

                <div class="grid grid-cols-3 gap-x-8">

                    <div class="flex flex-col gap-2 w-full">

                        <label :class="error ? 'text-red-600' : 'text-gray-600'" class="text-sm font-semibold">
                            Price for 1 person ( 1 night)
                        </label>

                        <div class="w-full grid grid-cols-3 items-end">

                            <SharedDropDown 
                            v-model="priceUnit" errorMessage="please enter country" 
                            :options="['USD', 'LKR', 'AUD']" />

                            <SharedTextInput 
                            v-model="price" errorMessage="please enter name" 
                            type="number" class="col-span-2" />

                        </div>

                    </div>

                </div>

            </div>

        </ListingFormCard>

        <button @click="addRoom" class="w-full py-4 bg-blue-700 text-white font-semibold text-base rounded-lg hover:bg-blue-900">
            Add Room
        </button>

    </section>
</template>