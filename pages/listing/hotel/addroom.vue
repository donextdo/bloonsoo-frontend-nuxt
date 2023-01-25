<script setup>

import { ref } from 'vue'

definePageMeta({
    layout: 'listing',
    // middleware: ['auth']
})

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const router = useRouter()

const hotelId = useHotelId()

const facilitiesData = [
    {data: 'Non-smoking rooms', label: 'Non-smoking rooms'}, 
    {data: 'Restaurant', label: 'Restaurant'}, 
    {data: 'Free WiFi', label: 'Free WiFi'}, 
    {data: 'Airport shuttle', label: 'Airport shuttle'},
    {data: 'Hot tub', label: 'Hot tub'},
    {data: 'Water park', label: 'Water park'},

    {data: 'Non-smoking rooms', label: 'Non-smoking rooms'}, 
    {data: 'Restaurant', label: 'Restaurant'}, 
    {data: 'Free WiFi', label: 'Free WiFi'}, 
    {data: 'Airport shuttle', label: 'Airport shuttle'},
    {data: 'Hot tub', label: 'Hot tub'},
    {data: 'Water park', label: 'Water park'},

    {data: 'Non-smoking rooms', label: 'Non-smoking rooms'}, 
    {data: 'Restaurant', label: 'Restaurant'}, 
    {data: 'Free WiFi', label: 'Free WiFi'}, 
    {data: 'Airport shuttle', label: 'Airport shuttle'},
    {data: 'Hot tub', label: 'Hot tub'},
    {data: 'Water park', label: 'Water park'},

    {data: 'Non-smoking rooms', label: 'Non-smoking rooms'}, 
    {data: 'Restaurant', label: 'Restaurant'}, 
    {data: 'Free WiFi', label: 'Free WiFi'}, 
    {data: 'Airport shuttle', label: 'Airport shuttle'},
    {data: 'Hot tub', label: 'Hot tub'},
    {data: 'Water park', label: 'Water park'}
]

const roomType = ref('0')
const roomTypeError = ref(false)

const roomName = ref('')
const roomNameError = ref(false)

const smokingPolicy = ref('Non-smoking')

const nbrOfRooms = ref()
const nbrOfRoomsError = ref(false)

const bedType = ref('0')
const bedTypeError = ref(false)

const noOfBeds = ref('0')
const noOfBedsError = ref(false)

const beds = useState('beds', () => [])
const addAnotherBed = ref(false)
const bedsError = ref(false)

const guests = ref('1')

const breakfastOption = ref()
const breakfastPriceUnit = ref('USD')
const breakfastPrice = ref()

const roomSize = ref()
const roomSizeUnit = ref('Square meter')

const priceUnit = ref('USD')
const price = ref()
const priceError = ref(false)

const facilities = ref([])
const facilitiesError = ref(false)

const images = ref(null)
const galleryImages = ref([])

const addBed = () => {
    setTimeout(() => {
        bedTypeError.value = false
        noOfBedsError.value = false
    }, 10000)


    if(bedType.value == '0') return bedTypeError.value = true
    if(noOfBeds.value == '0') return noOfBedsError.value = true

    const bedDto = {
        bed_type: bedType.value,
        no_of_beds: noOfBeds.value
    }

    beds.value.push(bedDto)

    setTimeout(() => {
        addAnotherBed.value = false
    }, 1000)
}

const removeBed = (bedType) => {
    beds.value = beds.value.filter(bed => {
        return bed.bed_type !== bedType
    })
}

const addAnotherBedFunc = () => {
    bedType.value = '0'
    noOfBeds.value = '0'

    addAnotherBed.value = true
}

const onMultipleChange = async (event) => {
    var input = event.target;
    if (input.files) {

        images.value = input.files;

        console.log(images.value.length)

        for(let i = 0; i < images.value.length; i++){
            
            let formData = new FormData()
            formData.append('gallery_img', images.value[i])

            const path = await $fetch( `${baseUrl}/api/rooms/gallery`, {
                method: 'POST',
                body: formData
            } )

            console.log(path)
            galleryImages.value.push(path)
        }
        
    }
    
}

const clearGallery = (imglink) => {
    galleryImages.value = galleryImages.value.filter(path => {
        return path !== imglink
    })
}

const addRoom = async () => {

    setTimeout(() => {
        roomTypeError.value = false
        roomNameError.value = false
        nbrOfRoomsError.value = false
        bedsError.value = false
        priceError.value = false
        facilitiesError.value = false
    }, 10000)

    console.log('first')

    if(roomType.value == '0') return roomTypeError.value = true
    if(!roomName.value) return roomNameError.value = true
    if(!nbrOfRooms.value) return nbrOfRoomsError.value = true
    if(beds.value.length == 0) return bedsError.value = true
    if(!price.value) return priceError.value = true
    if(facilities.value.length == 0) return facilitiesError.value = true

    console.log('second')
    const roomDto = {
        property_id: hotelId.value,
        room_type: roomType.value,
        room_name: roomName.value,
        smoking_policy: smokingPolicy.value,
        nbr_of_rooms: nbrOfRooms.value,
        beds: beds.value,
        guests: guests.value,
        is_breakfast_available: breakfastOption.value === 'yes' ? true : false,
        breakfast_price: `${breakfastPriceUnit.value} ${breakfastPrice.value ? breakfastPrice.value : '0'}`,
        room_size: `${roomSize.value} ${roomSizeUnit.value === 'Square meter' ? 'm' : 'f'}`,
        price_for_one_night: `${priceUnit.value} ${price.value}`,
        facilities: facilities.value,
        gallery_images: galleryImages.value
    }


    const room = await $fetch(`${baseUrl}/api/rooms/create`, {
        method: 'POST',
        body: roomDto
    })  

    console.log(room)

    beds.value = []

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
                    v-model="roomType" 
                    :error="roomTypeError"
                    errorMessage="Please select room type" 
                    :selected-option="{value: '0', label: 'Please select'}"
                    :options="[
                        'Single Room', 
                        'Double Room', 
                        'Twin Room',
                        'Twin/double Room',
                        'Triple Room',
                        'Quadruple Room',
                        'Family Room',
                        'Suite Room',
                        'Apartment Room',
                        'Dormitory room',
                        'Bed in dormitor'
                    ]" />


                <SharedTextInput 
                    label="Room Name" 
                    v-model="roomName" 
                    :error="roomNameError"
                    errorMessage="please enter room name" />

                <SharedDropDown 
                    label="Smoking policy " 
                    v-model="smokingPolicy" errorMessage="please enter country" 
                    :options="['Non-smoking', 'Smoking', 'Both options']" />

                <SharedTextInput 
                    label="Number of rooms (of this type) " 
                    v-model="nbrOfRooms" 
                    :error="nbrOfRoomsError"
                    errorMessage="Please enter numbr rooms" 
                    type="number" />

            </div>   

        </ListingFormCard>

        <ListingFormCard label="Bed options" >

            <div class="flex flex-col gap-y-6 px-4">

                <h4 class="text-sm font-semibold text-gray-600">
                    Tell us only about the existing beds in a room. Do not include extra beds. 
                </h4>

                <div class="flex flex-col gap-2">

                    <h4 :class="bedsError ? 'text-red-500': 'text-gray-600'" class="text-sm font-semibold">
                        What kind of beds are available in this room? 
                    </h4>

                    <div v-if="(beds.length > 0)" v-for="(bed, index) in beds" :key="index" class="grid grid-cols-12 gap-x-8 items-end">

                        <SharedDropDown 
                        class="col-span-6"
                        v-model="bed.bed_type"
                        :options="[
                            'Single bed / 90-130 cm wide', 
                            'Double bed / 90-130 cm wide', 
                            'Large bed (king size) / 151-180 cm wide', 
                            'Extra-large double bed (Super-king size) / 181-210 cm wide',
                            'Bunk bed / variable Size',
                            'Sofa bed / variable Size',
                            'Futon Mat / variable Size'
                        ]" />

                        <SharedDropDown 
                        class="col-span-4"
                        v-model="bed.no_of_beds" 
                        :options="['1', '2', '3', '4', '5']" />

                        <button 
                        @click="removeBed(bed.bed_type)"
                        class="w-full h-9 col-span-2 bg-red-500 text-sm font-semibold text-white flex items-center justify-center gap-2 hover:bg-red-700">

                            <font-awesome-icon icon="fa-solid fa-plus-circle" class="text-white text-base "/>
                            <span>Remove</span>

                        </button>

                    </div>

                    <div v-if="((beds.length == 0) || addAnotherBed)" class="grid grid-cols-12 gap-x-8 items-end">

                        <SharedDropDown 
                        class="col-span-6"
                        v-model="bedType"
                        :error="bedTypeError"
                        errorMessage="Please select bed type" 
                        :selected-option="{value: '0', label: 'Please select a bed type'}"
                        :options="[
                            'Single bed / 90-130 cm wide', 
                            'Double bed / 90-130 cm wide', 
                            'Large bed (king size) / 151-180 cm wide', 
                            'Extra-large double bed (Super-king size) / 181-210 cm wide',
                            'Bunk bed / variable Size',
                            'Sofa bed / variable Size',
                            'Futon Mat / variable Size'
                        ]" />

                        <SharedDropDown 
                        class="col-span-4"
                        v-model="noOfBeds" 
                        :error="noOfBedsError"
                        errorMessage="please enter number of beds" 
                        :selected-option="{value: '0', label: 'Select the number of beds'}"
                        :options="['1', '2', '3', '4', '5']" />

                        <button 
                        @click="addBed" 
                        class="w-full h-9 col-span-2 bg-blue-500 text-sm font-semibold text-white flex items-center justify-center gap-2 hover:bg-blue-700">

                            <font-awesome-icon icon="fa-solid fa-plus-circle" class="text-white text-base "/>
                            <span>Add</span>

                        </button>

                    </div>

                    <small v-if="bedsError" class="text-xs text-red-600">
                        Please add room(s)
                    </small>

                    <button 
                    v-if="((beds.length > 0) && !addAnotherBed)" 
                    @click="addAnotherBedFunc" 
                    class="w-max text-blue-500 font-semibold text-xs">
                        <font-awesome-icon icon="fa-solid fa-plus-circle" class="text-blue-500 text-base "/>
                        Add another bed 
                    </button>

                </div>

                <div class="grid grid-cols-2 gap-x-8 items-end">

                    <SharedDropDown 
                    label="How many guests can stay in this room? " 
                    v-model="guests" errorMessage="please enter country" 
                    :options="['1', '2', '3', '4', '5', '6', '7', '8']" />

                    <!-- <SharedDropDown 
                    v-model="noOfBeds" errorMessage="please enter country" 
                    :options="['Select the number of beds', '1', '2', '3']" /> -->

                </div>

            </div>       

        </ListingFormCard>

        <ListingFormCard label="Breakfast">

            <div class="px-4 w-full grid grid-cols-2 gap-x-8">

                <SharedRadioGroup 
                title="Do you provide breakfast ?"
                v-model="breakfastOption"
                :options="[{data: 'yes', label: 'yes'}, {data: 'no', label: 'no'}]
                "/>


                <div v-if="breakfastOption === 'yes'" class="flex flex-col gap-2 w-full">

                    <label :class="priceError ? 'text-red-600' : 'text-gray-600'" class="text-sm font-semibold">
                        Price for Breakfast
                    </label>

                    <div class="w-full grid grid-cols-6 items-start">

                        <SharedDropDown 
                        v-model="breakfastPriceUnit" errorMessage="please enter price unit" 
                        :options="['USD', 'LKR', 'AUD']" />

                        <SharedTextInput 
                        v-model="breakfastPrice" 
                        errorMessage="please enter a price" 
                        type="number" class="col-span-3" />

                    </div>

                </div>

            </div>

        </ListingFormCard>

        <ListingFormCard label="Room Size (Optional)">

            <div class="grid grid-cols-2 gap-x-8 px-4">

                <div class="w-full grid grid-cols-3 items-end">
                    <SharedTextInput 
                    label="How big is the room?" 
                    v-model="roomSize"
                    type="number" class="col-span-2" />

                    <SharedDropDown 
                    v-model="roomSizeUnit"
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

                        <label :class="priceError ? 'text-red-600' : 'text-gray-600'" class="text-sm font-semibold">
                            Price for 1 person ( 1 night)
                        </label>

                        <div class="w-full grid grid-cols-3 items-start">

                            <SharedDropDown 
                            v-model="priceUnit" errorMessage="please enter country" 
                            :options="['USD', 'LKR', 'AUD']" />

                            <SharedTextInput 
                            v-model="price" 
                            :error="priceError"
                            errorMessage="please enter a price" 
                            type="number" class="col-span-2" />

                        </div>

                    </div>

                </div>

            </div>

        </ListingFormCard>

        <ListingFormCard label="Facilities that are popular with guests ">

            <div class="px-4">

                <SharedCheckboxGroup
                v-model="facilities"
                row_6
                :error="facilitiesError"
                error-message="Please select facilities"
                :options="facilitiesData"
                />

            </div>

        </ListingFormCard>

        <ListingFormCard label="What does your room look like?" >

            <div class="px-4 flex flex-col gap-6">

                <h4 class="text-sm font-semibold text-gray-600">
                    Add at least 3 photos now. You can always add more later.
                </h4>

                <div class="w-full border rounded-lg border-slate-500 border-dashed">

                    <div v-show="!images" class="w-full h-full py-24 flex flex-col items-center gap-8">

                        <div class="w-32 h-32">
                            <img src="@/assets/icons/image.png" class="w-full h-full object-contain" alt="">
                        </div>

                        <p class="text-base text-gray-400 text-center">
                            Upload your gallery photos here 
                        </p>

                        <label for="gallery-img" class="py-3 px-4 text-blue-500 text-sm font-semibold rounded-lg border border-blue-500 cursor-pointer">
                            <font-awesome-icon icon="fa-solid fa-camera" class="text-blue-500 text-base "/>
                            Upload photo
                        </label>

                        <input class="hidden" id="gallery-img" type="file" multiple @change="onMultipleChange" accept="image/*">

                    </div>

                    <div v-show="images" class="w-full grid grid-cols-4 bg-slate-300">

                        <div v-for="(preview, index) in galleryImages" :key="index" class="w-full aspect-square relative">
                            <img :src="preview" loading="lazy" class="w-full h-full object-cover" alt="">

                            <button @click="clearGallery(preview)" class="w-8 h-8 rounded-full bg-red-500 absolute top-2 right-2">
                                <font-awesome-icon icon="fa-solid fa-trash" class="text-white text-sm "/>
                            </button>
                        </div>

                        <div class="w-full aspect-square grid place-items-center">

                            <label for="gallery-img" class="py-3 px-4 text-blue-500 text-sm font-semibold rounded-lg border border-blue-500 cursor-pointer">
                                <font-awesome-icon icon="fa-solid fa-camera" class="text-blue-500 text-base "/>
                                Add more
                            </label>

                            <input class="hidden" id="gallery-img" type="file" multiple @change="onMultipleChange" accept="image/*">

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