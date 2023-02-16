<script setup>
import { storeToRefs } from "pinia"
import { useBookingStore } from "~~/stores/bookingStore"
import { useAuthStore } from "~~/stores/authStore"

const emits = defineEmits(['onClose', 'onSubmit'])

const bookingStore = useBookingStore()
const { hotel, bookings, totalPrice } = storeToRefs(bookingStore)

const nameError = ref(false)

const emailError = ref(false)

const addressError = ref(false)

const cityError = ref(false)

const stateError = ref(false)

const zipError = ref(false)

const cardNameError = ref(false)

const expMonthError = ref(false)

const expYearError = ref(false)

const cvvError = ref(false)

const handleClose = () => {
  emits('onClose')
}

const handleSubmit = () => {
  emits('onSubmit')
}


</script>

<template>
  
    <div class="fixed inset-0 bg-black bg-opacity-40 grid place-items-center z-40 py-10">

        <div class="w-[80vw] max-h-full bg-white rounded-lg relative shadow-md overflow-visible flex flex-col gap-6 px-8 py-6 overflow-y-scroll !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-500">

          <div class="grid grid-cols-3 gap-10">
            <div class="col-span-1 flex flex-col gap-6">
              <h3 class="text-xl font-bold"> 
                  Card Holder Details
              </h3>

              <div class="flex flex-col gap-4">
                <SharedTextInput label="Full Name" v-model="name" :error="nameError" errorMessage="Full Name cannot be empty" class="" placeholder="Regina" />

                <SharedTextInput label="Email Address" v-model="email" :error="emailError" errorMessage="Email Address cannot be empty" class="" placeholder="Regina@fun.com" />

                <SharedTextInput label="Address" v-model="address" :error="addressError" errorMessage="Address cannot be empty" class="" placeholder="285 15/2" />

                <SharedTextInput label="City" v-model="city" :error="cityError" errorMessage="City cannot be empty" class="" placeholder="Colombo" />


                <div class="grid grid-cols-2 gap-6">

                  <SharedTextInput label="State" v-model="state" :error="stateError" errorMessage="State cannot be empty" class="" placeholder="WP" />

                  <SharedTextInput label="Zip" v-model="zip" :error="zipError" errorMessage="Zip cannot be empty" class="" placeholder="50000" />

                </div>
              </div>

            </div>

            <div class="col-span-1">

                <div class="flex flex-col gap-4">
                  <div class="mb-[0.4rem] mt-12">
                  <label class=" text-gray-600 text-sm font-semibold">Accepted Card</label>
                  <div class="flex gap-3 w-max mt-4 ">
                    <font-awesome-icon icon="fab fa-cc-visa" class="text-blue-900 text-2xl"/>
                    <font-awesome-icon icon="fa-brands fa-cc-amex" class="text-blue-600 text-2xl"/>
                    <font-awesome-icon icon="fa-brands fa-cc-mastercard" class="text-red-600 text-2xl"/>
                    <font-awesome-icon icon="fa-brands fa-cc-discover" class="text-yellow-500 text-2xl"/>
                    <font-awesome-icon icon="fa-brands fa-bitcoin" class="text-semidarkyellow text-2xl" />
                  </div>
                </div>

                <SharedTextInput label="Name on Card" v-model="cardName" :error="cardNameError" errorMessage="Name on Card cannot be empty" class="" placeholder="Master Card" />

                <SharedTextInput label="Credit card number" v-model="cardNumber" :error="cardNumberError" errorMessage="Credit card number cannot be empty" class="" placeholder="1111-2222-3333-4444" />

                <SharedTextInput label="Exp Month" v-model="expMonth" :error="expMonthError" errorMessage="Exp Month cannot be empty" class="" placeholder="September" />


                <div class="grid grid-cols-2 gap-6">

                  <SharedTextInput label="Exp Year" v-model="expYear" :error="expYearError" errorMessage="Exp Year cannot be empty" class="" placeholder="2024" />

                  <SharedTextInput label="CVV" v-model="cvv" :error="cvvError" errorMessage="CVV cannot be empty" class="" placeholder="858" />

                </div>
              </div>
              
            </div>

            <div class="col-span-1">

              <div class="grid grid-cols-2 gap-6 pb-5">
                
                <div>
                  <h3 class="text-xl font-bold"> 
                    {{ hotel.property_name }}
                  </h3>
                </div>


              </div>

              <div class="flex flex-col gap-4 border-b border-gray-400 mb-5">
                
                <p class="font-semibold mb-3">You selected: </p>
                <p 
                v-for="(booking, index) in bookings" :key="index"
                class="text-gray-600 text-base">
                    {{ booking.rooms }} x {{ booking.roomType }} {{ booking.roomName }}
                </p>

              </div>


              <div class="flex items-center justify-between">
                  <div class="font-medium text-base">
                      <p class="mb-4">Total Price</p>


                  </div>

                  <div class="font-medium text-base">
                      <p class="text-gray-600 mb-4"> {{ totalPrice }} </p>

                  </div>
              </div>
          </div>



          </div>



          <button @click="handleClose" class="absolute right-4 top-4 w-6 h-6 z-50">
              <font-awesome-icon icon="fa-solid fa-times" class="text-red-600 text-xl"/>
          </button>

          <button @click="handleSubmit" class="w-full py-4 btn-accent">
            Complete Checkout
          </button>
        </div>


    </div>

</template>