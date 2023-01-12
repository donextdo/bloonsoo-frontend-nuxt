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



const phoneNumber = ref()
const phoneNumberRes = ref()
const phoneNumberError = ref(false)

const phoneNumberAlt = ref()
const phoneNumberAltRes = ref()

const ownMultipleHotels = ref()
const ownMultipleHotelsError = ref(false)





const country = ref('Sri Lanka')
const countryError = ref(false)






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




        <ListingFormCard label="Enter Your Address ">

            <div class="px-4 flex flex-col gap-6">

                    <SharedDropDown 
                    label="Country/Region" 
                    v-model="country" :error="countryError" errorMessage="Please select a country" 
                    :options="['Sri Lanka', 'Australia', 'India']" 
                    class="col-start-1 w-2/5" />

                    <div class="flex flex-col gap-2 items-start col-start-1">

                        <label :class="phoneNumberError ? 'text-red-600' : 'text-gray-600' " class="text-sm font-semibold">Telephone (mobile number preferred</label>


                        <ClientOnly>
                        <MazPhoneNumberInput
                            v-model="phoneNumber"
                            show-code-on-list
                            :preferred-countries="['LK', 'FR', 'BE', 'DE', 'US', 'GB']"
                            no-example size="sm"
                            @update="phoneNumberRes = $event"
                            :success="phoneNumberRes?.isValid"
                        />
                        </ClientOnly>

                        <small v-if="phoneNumberError" class="text-xs text-red-600">
                            Please enter a mobile number
                        </small>

                        <p class="text-sm text-gray-500 ">Needed by the property to validate your booking </p>

                    </div>

                    <div class="flex item-center mb-4">
                        <input  type="checkbox" value="" class="w-3 h-3 text-blue-600 mt-1">
                        <label for="default-checkbox" class="ml-2  text-md text-gray-700 "> Yes, I want free paperless confirmation (recommended)</label>
                    </div>



            </div>

        </ListingFormCard>

        <div class="mx-4">
          <div class="flex item-center mb-8">
              <input  type="checkbox" value="" class="w-4 h-4 text-blue-600 mt-1">
              <label for="default-checkbox" class="ml-2  text-gray-700 "> Yes, I consent to receiving marketing emails including deals, travel inspiration, and updates on products and services from Bloonsoo.com. </label>
          </div>

          <div class="flex item-center mb-10">
              <input  type="checkbox" value="" class="w-4 h-4 text-blue-600 mt-1">
              <label for="default-checkbox" class="ml-2 text-gray-700  "> Yes, I consent to receiving marketing emails from  Bloonsoo.com about transportation deals </label>
          </div>

          <div class="flex row mb-6">
              <p class="mr-1 text-gray-700">You can unsubscribe at any time. View our</p>
              <p class="text-blue-500"> privacy policy. </p>
          </div>

          <div class=" mb-6">
              <p class="mr-1 text-gray-700">Your booking is directly with French Garden Kandy and by completing this booking you agree to the</p>
              <p class="text-blue-500">  booking  conditions, general terms, and privacy policy. </p>
          </div>

        </div>

    </section>

</template>
