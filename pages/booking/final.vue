<script setup>

import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import { ref } from 'vue'
import '@/assets/css/phoneNumberInput.css'
import { storeToRefs } from "pinia"
import { useBookingStore } from "~~/stores/bookingStore"
import { useAuthStore } from "~~/stores/authStore"

definePageMeta({
    layout: 'mini-searchbar',
})



const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const router = useRouter()

const bookingStore = useBookingStore()
const authStore = useAuthStore()

const { hotel } = storeToRefs(bookingStore)
const { user } = storeToRefs(authStore)

const loading = ref(false)

const country = ref()
const countryError = ref()

const phoneNumber = ref()
const phoneNumberRes = ref()
const phoneNumberError = ref(false)

const paperlessConfirmation = ref(false)

const updatesEmailConfirmation = ref(false)

const marketingEmailConfirmation = ref(false)

const paymentOption = ref()
const paymentOptionError = ref(false)

const setDefaults = () => {
    // country.value = user.value?.address.country ? user.value.adress.country : ''
    phoneNumber.value = user.value?.mobile ? user.value?.mobile : ''
}

onMounted(async () => {
    console.log(user.value)
    bookingStore.setHotel(baseUrl)
    setDefaults()
})

const promoCode = ref()
const promoCodeError = ref(false)

const showBookingCheckOut = ref(false)

const toggleCheckOutPopup = () => {
    showBookingCheckOut.value = !showBookingCheckOut.value
}

const handleBooking = async () => {

    setTimeout(() => {
        paymentOptionError.value = false
    }, 5000)

    if(!paymentOption.value) return paymentOptionError.value = true

    try {    
        bookingStore.setBookingInfoSecondPage(
            country.value,
            phoneNumberRes.value.e164,
            paymentOption.value
        )

        if(paymentOption.value == 'card') return toggleCheckOutPopup()

        loading.value = true

        await bookingStore.createBooking()

        router.push({path: `/profile/reservations`})

        loading.value = false

        setTimeout(() => {
            bookingStore.$reset()
        }, 1000)  
    } catch (error) {
        if(error.response){
            console.log(error.response._data)
        }

        console.log(error)
    }
}

const launchPayhere = async () => {
    toggleCheckOutPopup()
}

</script>

<template>
    
   <section class="text-black font-montserrat md:container mx-auto px-5 md:px-2 flex flex-col gap-14 py-6">

        <BookingTabs final/>

        <main class="grid md:grid-cols-3 gap-8 items-start w-full">

            <section class="w-full col-span-2 grid grid-col gap-6">

                <BookingHotelCard 
                    :coverImg="hotel?.cover_image" 
                    :property-name="hotel?.property_name"
                    :address="hotel?.property_address"
                />

                 <ListingFormCard label="Enter Your Information" class="shadow-md">

                    <div class="md:grid grid-cols-2 gap-x-16 gap-y-6 px-4 space-y-4">

                        <SharedDropDown 
                            label="Country/Region" 
                            v-model="country" :error="countryError" errorMessage="Please select a country" 
                            :options="['Sri Lanka', 'Australia', 'India']" 
                        />

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

                            <p class="text-sm text-gray-500 ">Needed by the property to validate your booking</p>

                        </div>

                        <div class="flex item-center gap-3 col-span-2">
                            <input 
                            type="checkbox" 
                            id="default-checkbox" value="" 
                            v-model="paperlessConfirmation"
                            class="w-4 h-4 text-blue-600">

                            <label for="default-checkbox" 
                                class="text-sm font-semibold text-gray-600 ">Yes, I want free paperless confirmation (recommended)</label>
                        </div>

                    </div>

                </ListingFormCard>  

                 <ListingFormCard label="Select a Payment Option" class="shadow-md !bg-gray-300 ">
                    <div class="px-4 w-full flex gap-4 text-gray-600 text-sm font-semibold space-y-10 md:space-y-0">

                        <div class="flex flex-col items-center gap-2 flex-1">
                            <label for="credit-card" class="cursor-pointer">
                                <font-awesome-icon icon="fa-solid fa-credit-card" class="text-blue-600 text-2xl md:text-5xl" />
                            </label>

                            <label for="credit-card" class="cursor-pointer">
                                Credit/Debit Card
                            </label>

                            <input 
                                type="radio"
                                id="credit-card"
                                name="payment-options"
                                value="0"
                                v-model="paymentOption"
                                class="w-5 h-5 cursor-pointer"
                                disabled
                            >
                        </div>

                        <div class="flex flex-col items-center gap-2 flex-1">
                            <label for="crypto" class="cursor-pointer">
                                <font-awesome-icon icon="fa-brands fa-bitcoin" class="text-blue-600 text-2xl md:text-5xl" />
                            </label>

                            <label for="crypto" class="cursor-pointer">
                                Crypto Currency
                            </label>

                            <input 
                                type="radio"
                                id="crypto"
                                name="payment-options"
                                value="1"
                                v-model="paymentOption"
                                class="w-5 h-5 cursor-pointer"
                                disabled
                            >
                        </div>

                        <div class="flex flex-col items-center gap-2 flex-1">
                            <label for="on-site" class="cursor-pointer">
                                <font-awesome-icon icon="fa-solid fa-hotel" class="text-blue-600 text-2xl md:text-5xl" />
                            </label>

                            <label for="on-site" class="cursor-pointer">
                                Onsite
                            </label>

                            <input 
                                type="radio"
                                id="on-site"
                                name="payment-options"
                                value="2"
                                v-model="paymentOption"
                                class="w-5 h-5 cursor-pointer"
                            >
                        </div>

                    </div>

                    <small 
                    v-if="paymentOptionError"
                    class="text-red-600 font-semibold text-sm px-4">
                        Please select a payment method
                    </small>

                </ListingFormCard> 

                <div class="flex item-center gap-3 mt-6">
                    <input 
                    type="checkbox" 
                    id="checkbox-confirm" value="" 
                    v-model="updatesEmailConfirmation"
                    class="w-5 h-5 text-blue-600">

                    <label for="checkbox-confirm" 
                        class="text-sm ">
                        Yes, I consent to receiving marketing emails including deals, travel inspiration, and updates on products and services from Bloonsoo.com. 
                    </label>
                </div> 

                 <div class="flex item-center gap-3 mt-2">
                    <input 
                    type="checkbox" 
                    id="checkbox-confirm-1" value="" 
                    v-model="marketingEmailConfirmation"
                    class="w-4 h-4 text-blue-600">

                    <label for="checkbox-confirm-1" 
                        class="text-sm ">
                        Yes, I consent to receiving marketing emails from  Bloonsoo.com about transportation deals.
                    </label>
                </div>

                <p class="text-sm mt-2">
                    You can unsubscribe at any time. View our 
                    <NuxtLink to="#" class="text-blue-700 font-semibold">privacy policy.</NuxtLink>
                </p>

                <p class="text-sm mt-2">
                    Your booking is directly with French Garden Kandy and by completing this booking you agree to the
                    <NuxtLink to="#" class="text-blue-700 font-semibold block">booking  conditions, general terms, and privacy policy.</NuxtLink>
                </p> 

               

            </section>

            <aside class="w-[90vw] md:w-full col-span-1 flex flex-col gap-6">

                <BookingDetailsCard />

                <BookingPriceCard />

                <div class="shadow-md rounded-lg bg-white w-full px-5 py-8">
                    <h4 class="font-semibold mb-4 text-sm md:text-base">Payment shedule</h4>
                    <p class="text-sm md:text-base text-green-600">No payment today. You’ll pay when you stay</p>
                </div>

                <div class="shadow-md rounded-lg bg-white w-full px-5 py-8">
                            
                    <h4 class="font-semibold mb-4 text-sm md:text-base">Cancellation fee</h4>

                    <div class="flex items-center justify-between gap-8">
                        <div>
                            <p class="text-gray-600 text-sm md:text-base" >If you cancel you will pay </p>
                        </div>

                        <div>
                            <p class=" float-right text-gray-600 text-sm md:text-base"> LKR 4900</p>
                        </div>

                    </div>

                </div>


            </aside> 

        </main>

        <button @click="handleBooking" class="w-full py-3 md:py-4 btn-accent">
            <span v-if="!loading">Complete booking </span>
            <SharedButtonSpinner v-else/>
        </button>

        <BookingCheckOut v-if="showBookingCheckOut" @onClose="toggleCheckOutPopup" @onSubmit="launchPayhere"/>
   </section>

</template>
