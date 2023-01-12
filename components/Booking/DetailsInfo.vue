<script setup>

import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import { ref } from 'vue'
import '@/assets/css/phoneNumberInput.css'
import { useHotelId } from '~~/composables/state';

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const router = useRouter()

const hotelId = useHotelId()

const propertyName = ref('')
const propertyNameError = ref(false)

const startRating = ref('N/A')

const firstName = ref('')
const firstNameError = ref(false)

const lastName = ref('')
const lastNameError = ref(false)

const guestName = ref('')
const guestNameError = ref(false)

const email = ref('')
const emailError = ref(false)



const phoneNumber = ref()
const phoneNumberRes = ref()
const phoneNumberError = ref(false)

const phoneNumberAlt = ref()
const phoneNumberAltRes = ref()

const ownMultipleHotels = ref()
const ownMultipleHotelsError = ref(false)

const channelManager = ref()
const channelManagerError = ref(false)

const streetAddress = ref()
const streetAddressError = ref(false)

const country = ref('Sri Lanka')
const countryError = ref(false)

const postalCode = ref('')
const postalCodeError = ref(false)

const about = ref('')
const aboutError = ref(false)


const createHotel = async () => {

    setTimeout(() => {
        propertyNameError.value = false
        contactNameError.value = false
        phoneNumberError.value = false
        ownMultipleHotelsError.value = false
        channelManagerError.value = false
        streetAddressError.value = false
        postalCodeError.value = false
        aboutError.value = false
    }, 10000)


    if(!propertyName.value) return propertyNameError.value = true
    if(!contactName.value) return contactNameError.value = true
    // if(!phoneNumberRes.value.isValid) return phoneNumberError.value = true
    // if(!ownMultipleHotels.value) return ownMultipleHotelsError.value = true
    // if(!channelManager.value) return channelManagerError.value = true
    // if(!streetAddress.value) return streetAddressError.value = true
    // if(!postalCode.value) return postalCodeError.value = true
    if(!about.value.length > 1200) return aboutError.value = true


    const hotelDto = {
        property_name: propertyName.value,
        star_rating: startRating.value,
        contact_name: contactName.value,
        contact_phone_number: phoneNumberRes.value.e164,
        contact_phone_number_alternative: phoneNumberAltRes.value.isValid ? phoneNumberAltRes.value.e164 : null,
        is_own_multiple_hotels: ownMultipleHotels.value === 'yes' ? true : false,
        use_channel_manager: channelManager.value === 'yes' ? true : false,
        property_address: {
            street_address: streetAddress.value,
            country: country.value,
            postal_code: postalCode.value
        },
        about: about.value
    }

    const hotel = await $fetch(`${baseUrl}/api/hotel/create`, {
        method: 'POST',
        body: hotelDto
    })

    hotelId.value = hotel._id

    console.log(hotel)

    router.push({path: '/listing/hotel/pricing'})

}

</script>


<template>
    
    <section class="w-full flex flex-col gap-6">

           
        <ListingFormCard label="Enter your details">

            <div class="grid grid-cols-2 gap-x-8 gap-y-6 px-4">



                <SharedRadioGroup 
                title="Are you traveling for work?"
                class="col-span-2" 
                v-model="ownMultipleHotels" 
                :options="[{data: 'yes', label: 'yes'}, {data: 'no', label: 'no'}]"
                :error="ownMultipleHotelsError"
                name="group1"
                errorMessage="Please select an option"
                />


                <div class="flex flex-col gap-2 items-start  col-start-1">

                  <SharedTextInput label="First Name" v-model="firstName" :error="firstNameError" errorMessage="First Name cannot be empty" placeholder="Regina" />


                </div>

                <div class="flex flex-col gap-2 items-start col-start-2">

                  <SharedTextInput label="Last Name" v-model="lastName" :error="lastNameError" errorMessage="Last Name cannot be empty" placeholder="George" />

                </div>

            </div>

            <SharedTextInput label="Email Address" v-model="email" :error="emailError" errorMessage="Email Address cannot be empty" placeholder="Regina@fun.com" class="w-3/5 px-4" />

            <p class="text-sm text-gray-500 px-4">
                This name will be seen to guests
            </p>

            <SharedTextInput label="Confirm Email Address" v-model="email" :error="emailError" errorMessage="Email Address cannot be empty" placeholder="Regina@fun.com" class="w-3/5 px-4" />

            
                    
                <p class=" mx-4 text-sm font-bold text-gray-700">Who are you booking for?</p>
                <div class="flex items-center  mx-8">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-1" class="ml-2 text-sm"> I'm the main guest</label>
                </div>
                <div class="flex items-center mx-8">
                    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-2" class="ml-2 text-sm "> I'm booking for someone else </label>
                </div>

                        
                



        </ListingFormCard>

        <ListingFormCard label="Standard Double City View with Early Check-in at 11 AM & Late Check-out at 3 PM (on Availability)">

            <div class="px-6 mb-6">
                <div class="w-full flex items-center mb-2">
                    <font-awesome-icon icon="fa fa-ban" class="text-gray-700 text-xl mx-6"/>
                    <p>Total cost to cancel</p>
                </div>

                <div class="w-full flex items-center mb-2 mx-6">
                    <HotelFacility class="!p-0 !w-max mr-3" icon="sparkle"/> 
                    <p class="text-gray-500">Sparkly clean rooms  </p>
                </div>

                <div class="w-full flex items-center mb-2">
                    <font-awesome-icon icon="fa-solid fa-ban-smoking" class="text-gray-500 text-xl mx-6" /> 
                    <p class="text-gray-500">No smoking </p>
                </div>

            </div>

            <div class="w-full flex items-center justify-between mt-auto mb-6 px-6">
                <HotelFacility class="!p-0 !w-max" icon="kitchen" label="Kitchen"/>
                <HotelFacility class="!p-0 !w-max" icon="ac" label="Air Conditioner"/>
                <HotelFacility class="!p-0 !w-max" icon="washer" label="Washer"/>
                <HotelFacility class="!p-0 !w-max" icon="kingbed" label="King size bed"/>
                <HotelFacility class="!p-0 !w-max" icon="cleaning" label="Cleaning Service"/>
            </div>

            <div>
              <p class="text-sm font-semibold text-gray-600 px-4 mb-6">
              Your Genius benefits
            </p>

            <div class=" flex row px-6 mb-2">
                <font-awesome-icon icon="fa-solid fa-circle-check" class="text-green-600 text-xl mx-6" />
              <p class=" text-sm font-semibold text-gray-600">10% discount</p>
            </div>

            <p class="mx-24 text-sm ">You're getting a 10% discount on the price of this option before taxes and fees apply. </p>
            </div>

            <p class="text-sm font-semibold text-gray-600 px-4 mb-6">
              Guests: 2 adults
            </p>

            <SharedTextInput label="Full guest name" v-model="guestName" :error="guestNameError" errorMessage="Full guest name cannot be empty" placeholder="Regina George" class="w-3/5 px-4" />


        </ListingFormCard>

        <ListingFormCard label="Your arrival time ">

            <div class="px-4 flex flex-col gap-6">

                <div class="w-full grid grid-cols-2 gap-6">

                    <SharedDropDown 
                    label="Add your estimated arrival time (optional) " 
                    v-model="country"
                    :options="['9:00 AM — 10:00 AM ', '10:00 AM — 11:00 AM ', '11:00 AM — 12:00 AM ']" 
                    class="col-start-1" />

                </div>
            </div>

        </ListingFormCard>




    </section>

</template>