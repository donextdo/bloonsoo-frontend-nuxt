<script setup>

import { ref } from 'vue'

definePageMeta({
    layout: 'listing'
})

const router = useRouter()

const parkingType = ref('Yes, paid')
const parkingType2 = ref('Private')
const parkingType3 = ref('On site')
const reservation = ref('No reservation needed')
const priceUnit = ref('USD')
const parkingPrice = ref()
const breakpastOption = ref()
const languages = ref([])
const facilities = ref([])
const extraBedOpt = ref()
const noOfBeds = ref('2')
const extraBedOptions = ref([])
const amenities = ref([])

const facilitiesData = [
    {data: 'Non-smoking rooms', label: 'Non-smoking rooms'}, 
    {data: 'Restaurant', label: 'Restaurant'}, 
    {data: 'Free WiFi', label: 'Free WiFi'}, 
    {data: 'Airport shuttle', label: 'Airport shuttle'},
    {data: 'Hot tub', label: 'Hot tub'},
    {data: 'Water park', label: 'Water park'},

    {data: 'Non-smoking rooms', label: 'Non-smoking rooms'}, 
    {data: 'Restauran', label: 'Restauran'}, 
    {data: 'Free WiFi', label: 'Free WiFi'}, 
    {data: 'Airport shuttle', label: 'Airport shuttle'},
    {data: 'Hot tub', label: 'Hot tub'},
    {data: 'Water park', label: 'Water park'},

    {data: 'Non-smoking rooms', label: 'Non-smoking rooms'}, 
    {data: 'Restauran', label: 'Restauran'}, 
    {data: 'Free WiFi', label: 'Free WiFi'}, 
    {data: 'Airport shuttle', label: 'Airport shuttle'},
    {data: 'Hot tub', label: 'Hot tub'},
    {data: 'Water park', label: 'Water park'},

    {data: 'Non-smoking rooms', label: 'Non-smoking rooms'}, 
    {data: 'Restauran', label: 'Restauran'}, 
    {data: 'Free WiFi', label: 'Free WiFi'}, 
    {data: 'Airport shuttle', label: 'Airport shuttle'},
    {data: 'Hot tub', label: 'Hot tub'},
    {data: 'Water park', label: 'Water park'}
]


const amenitiesData = [
    {data: 'A/C', label: 'A/C'}, 
    {data: 'Spa bath', label: 'Spa bath'}, 
    {data: 'Bath', label: 'Bath'}, 
    {data: 'Flat-screen TV', label: 'Flat-screen TV'},
    {data: 'Electric kettle', label: 'Electric kettle'},
    {data: 'Balcony', label: 'Balcony'},

    {data: 'A/C', label: 'A/C'}, 
    {data: 'Spa bath', label: 'Spa bath'}, 
    {data: 'Bath', label: 'Bath'}, 
    {data: 'Flat-screen TV', label: 'Flat-screen TV'},
    {data: 'Electric kettle', label: 'Electric kettle'},
    {data: 'Balcony', label: 'Balcony'},

    {data: 'A/C', label: 'A/C'}, 
    {data: 'Spa bath', label: 'Spa bath'}, 
    {data: 'Bath', label: 'Bath'}, 
    {data: 'Flat-screen TV', label: 'Flat-screen TV'},
    {data: 'Electric kettle', label: 'Electric kettle'},
    {data: 'Balcony', label: 'Balcony'},

    {data: 'A/C', label: 'A/C'}, 
    {data: 'Spa bath', label: 'Spa bath'}, 
    {data: 'Bath', label: 'Bath'}, 
    {data: 'Flat-screen TV', label: 'Flat-screen TV'},
    {data: 'Electric kettle', label: 'Electric kettle'},
    {data: 'Balcony', label: 'Balcony'}

]


const error = ref(false)


const addRoom = () => {
    router.push({ path: '/listing/hotel/pricing' })
}

</script>


<template>
    <section class="md:container mx-auto px-10 py-16 flex flex-col gap-8 text-black font-montserrat">

        <h2 class="text-2xl font-semibold mb-6">
            List your property on Bloonsoo.com
        </h2>

        <ListingHotelTabs active_1 active_2 active_3/>

        <ListingFormCard label="Parking" >

            <div class="grid grid-cols-3 gap-x-8 gap-y-6 px-4 items-end">

                <SharedDropDown 
                    label="Is parking available to the guests?" 
                    v-model="parkingType" errorMessage="please enter country" 
                    :options="['Yes, paid', 'Yes, free']" />

                <SharedDropDown 
                    v-model="parkingType2" errorMessage="please enter country" 
                    :options="['Private']" />

                <SharedDropDown 
                    v-model="parkingType3" errorMessage="please enter country" 
                    :options="['On site']" />

                <SharedDropDown 
                    label="Do guests need to reserve a parking space ?" 
                    v-model="reservation" errorMessage="please enter country" 
                    :options="['No reservation needed']" />

                <div class="flex flex-col gap-2 w-full">

                    <label :class="error ? 'text-red-600' : 'text-gray-600'" class="text-sm font-semibold">
                        Price for parking (per day)
                    </label>

                    <div class="w-full grid grid-cols-3 items-end">

                        <SharedDropDown 
                        v-model="priceUnit" errorMessage="please enter country" 
                        :options="['USD', 'LKR', 'AUD']" />

                        <SharedTextInput 
                        v-model="parkingPrice" errorMessage="please enter name" 
                        type="number" class="col-span-2" />

                    </div>

                </div>

            </div>   

        </ListingFormCard>

        <div class="flex gap-6">
            
            <ListingFormCard label="Breakfast" >

                <div class="px-4">

                    <SharedRadioGroup 
                    title="Do you serve Breakfast ?"
                    v-model="breakpastOption" 
                    vertical
                    :options="[{data: 'yes', label: 'yes'}, {data: 'no', label: 'no'}]
                    "/>

                </div>

            </ListingFormCard>

            <ListingFormCard label="Languages spoken" >

                <div class="px-4 flex flex-col gap-6">

                    <SharedCheckboxGroup
                    title="What languages do you or your staff speak ?"
                    v-model="languages"
                    :options="[
                        {data: 'English', label: 'English'}, 
                        {data: 'Sinhala', label: 'Sinhala'}, 
                        {data: 'Tamil', label: 'Tamil'}, 
                        {data: 'French', label: 'French'}]"
                        />

                    <button class="w-max text-blue-500 font-semibold text-xs">
                        <font-awesome-icon icon="fa-solid fa-plus-circle" class="text-blue-500 text-base "/>
                        Add More 
                    </button>

                </div>

            </ListingFormCard>
        </div>
        

        <ListingFormCard label="Facilities that are popular with guests ">

            <div class="px-4">

                <SharedCheckboxGroup
                v-model="facilities"
                row_6
                :options="facilitiesData"
                />

            </div>
            
        </ListingFormCard>

        <ListingFormCard label="Extra bed options">

            <div class="px-4 flex flex-col gap-6">

                <SharedRadioGroup 
                title="Do you provide extra beds ?"
                v-model="extraBedOpt" 
                :options="[{data: 'yes', label: 'yes'}, {data: 'no', label: 'no'}]
                "/>

                <div v-if="extraBedOpt === 'yes'" class="w-full grid grid-cols-2 gap-x-8">

                    <SharedDropDown 
                    label="Select the number of extra beds that can be provided" 
                    v-model="noOfBeds" errorMessage="please enter country" 
                    :options="['1', '2', '3']" />

                </div>

                <div v-if="extraBedOpt === 'yes'" class="w-full flex flex-col gap-4">

                    <h4 class="text-gray-600 text-sm font-semibold">
                        Tick the box if you can accommodate the following guests in extra beds
                    </h4>

                    <div class="flex gap-2 items-center">
                        <input
                        type="checkbox"
                        v-model="extraBedOptions"
                        id="box-1"
                        value="Children up to 2 years old in cots"
                        class="w-3 h-3 cursor-pointer"
                        /> 

                        <label for="box-1" class="text-gray-600 text-sm h-max w-max font-semibold"> Children up to 2 years old in cots </label>
                    </div>

                    <div class="flex gap-2 items-center">
                        <input
                        type="checkbox"
                        v-model="extraBedOptions"
                        id="box-2"
                        value="Children"
                        class="w-3 h-3 cursor-pointer"
                        /> 

                        <label for="box-2" class="text-gray-600 text-sm h-max w-max font-semibold"> Children</label>
                    </div>

                    <div class="flex gap-2 items-center">
                        <input
                        type="checkbox"
                        v-model="extraBedOptions"
                        id="box-3"
                        value="Adults"
                        class="w-3 h-3 cursor-pointer"
                        /> 

                        <label for="box-3" class="text-gray-600 text-sm h-max w-max font-semibold"> Adults</label>
                    </div>

                </div>

            </div>

        </ListingFormCard>

        <ListingFormCard label="Amenities">

            <div class="px-4">

                <SharedCheckboxGroup
                v-model="amenities"
                row_6
                :options="amenitiesData"
                />

            </div>
            
        </ListingFormCard>

        <button @click="addRoom" class="w-full py-4 bg-blue-700 text-white font-semibold text-base rounded-lg hover:bg-blue-900">
            Add Room
        </button>

    </section>

</template>