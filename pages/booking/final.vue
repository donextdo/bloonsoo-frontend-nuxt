<script setup>

import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import { ref } from 'vue'
import '@/assets/css/phoneNumberInput.css'
import { useHotelId } from '~~/composables/state';
definePageMeta({
    layout: 'listing'
})

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const phoneNumber = ref()
const phoneNumberRes = ref()
const phoneNumberError = ref(false)

const phoneNumberAlt = ref()
const phoneNumberAltRes = ref()

const ownMultipleHotels = ref()
const ownMultipleHotelsError = ref(false)

</script>


<template>
    
   <section class="text-black font-montserrat md:container mx-auto px-2 flex flex-col gap-14 py-6">

        <BookingTabs final/>

        <main class="grid grid-cols-3 gap-4 w-full">

            <section class="w-full col-span-2 grid grid-col gap-4">

                <!-- <BookingHotelCard /> -->

                <div class="bg-blue-400 w-full"></div>

                <!-- <BookingFinalInfo /> -->
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

            <aside class="w-full col-span-1 h-full flex flex-col gap-4">

                <!-- <BookingCheckIn /> -->

                <div class="  shadow-md  w-full p-5 mb-4">
                <p class="font-semibold mb-8 text-gray-700 text-md">Your booking details  </p>

                <div class="grid grid-cols-2 gap-1 mb-5 ">

                    <div class="border-r-2 border-gray-400 p-2 ">
                        <p>Check-in</p>
                        <p class="font-semibold text-gray-700">Mon, Dec 5, 2022</p>
                        <p>2:00 PM — 11:30 PM </p>

                    </div>

                    <div class="p-2">
                        <p>Check-out</p>
                        <p class="font-semibold text-gray-700">Mon, Dec 5, 2022</p>
                        <p>2:00 PM — 11:30 PM </p>
                    </div>

                </div>

                <p class="font-semibold mb-5 pb-5 border-b-2 border-gray-400 text-gray-700">Total length of stay: 1 night. 3 adults </p>

                <p class="font-semibold mb-3 text-gray-700">You selected: </p>
                <p class="mb-5 text-gray-600">Standard Double City View with Early Check-in at 11 AM & Late Check-out at 3 PM (on Availability) </p>

                <p class="font-semibold text-blue-600">Change your selection </p>

            </div>

            <div class="  shadow-md  w-full mb-4">

            <div class="grid grid-cols-2 gap-2 border-b-2 border-gray-300 p-6 mb-5">
                <div>
                    <p class="font-semibold text-lg text-gray-700">Price</p>
                    <p class="text-gray-500">( your currency )</p>
                </div>

                <div>
                    <p class="font-semibold text-lg text-gray-700 float-right"> LKR 158,239.99</p>
                </div>

            </div>

            <div class="border-b-2 border-gray-300 p-6 mb-5">
                <div class="grid grid-cols-2 gap-2  ">
                <div>
                    <p class=" text-lg">Property's Currency</p>
                    
                </div>

                <div>
                    <p class=" text-lg float-right"> US$430.57</p>
                </div>

            </div>

            <p class="text-gray-500"> in USS ( for 2 nights & all guests ) </p>

            </div>



            <p class="px-6 text-gray-500">*This price is converted to show you the approximate cost in LKR. You'll pay in USS or LKR. The exchange rate might change before you pay. </p>
            <p class="p-6 mb-2 text-gray-500">Keep in mind that your card issuer may charge you a foreign transaction fee. </p>
            </div>

            <div class="  shadow-md  w-full p-5 mb-6">

            <p class="font-semibold text-lg mb-2 text-gray-700">Payment shedule</p>
            <p class=" text-md mb-5 text-green-600">No payment today. You’ll pay when you stay</p>

            </div>

            <div class="  shadow-md w-full p-5 mb-6">
                        
                        <p class="font-semibold text-lg mb-2 text-gray-700">Cancellation fee</p>

                        <div class="grid grid-cols-2 gap-2 mb-5">
                            <div>
                                <p class="text-gray-600" >If you cancel you will pay </p>
                            </div>

                            <div>
                                <p class=" float-right text-gray-600"> LKR 4900</p>
                            </div>

                        </div>

            </div>

                <div class="  shadow-md  w-full p-5 mb-6">
                
                    <p class="font-semibold text-lg mb-2 text-gray-700">Do you have a promo code</p>
                    <SharedTextInput label="Enter your promo code" />

                    <button class="border-2 border-orange-300 rounded-full px-9 py-3 my-5">Apply</button>

                </div>

            </aside>

            

        </main>
        <button @click="createHotel" class="w-full py-4 btn-accent">
          Complete booking 
        </button>
   </section>

</template>
