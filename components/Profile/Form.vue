<script setup>

import { useBookingStore } from '~~/stores/bookingStore';
import { storeToRefs } from "pinia"
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import '@/assets/css/phoneNumberInput.css'

const emits = defineEmits(['onClose', 'onSubmit'])

const props = defineProps({
    propertyName: {
        type: String
    },
    propertyAddress: {
        type: Object
    },
    // bookings: {
    //     type: Array
    // },
    policies: {
        type: Object
    }
})

const bookingStore = useBookingStore()
const { bookings, totalPrice } = storeToRefs(bookingStore)

const firstName = ref()
const firstNameError = ref(false)

const lastName = ref()
const lastNameError = ref(false)

const location = ref()
const locationError = ref(false)

const phoneNumber = ref()
const phoneNumberRes = ref()
const phoneNumberError = ref(false)

const about = ref()
const aboutError = ref(false)

const handleClose = () => {
    emits('onClose')
}


const onSubmit = () => {
    emits('onSubmit')
}

</script>


<template>
  
    <div class="fixed inset-0 bg-black bg-opacity-40 grid place-items-center z-40 py-20">

        <div class="w-[60vw] max-h-full bg-white rounded-lg relative shadow-md overflow-visible flex flex-col gap-6 px-10 py-8 overflow-y-scroll !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-gray-500">

            
            <div class="w-full grid grid-cols-2 gap-6">

                <SharedTextInput 
                    label="First Name" 
                    v-model="firstName" 
                    :error="firstNameError" 
                    errorMessage="First name cannot be empty" 
                />

                <SharedTextInput 
                    label="Last Name" 
                    v-model="lastName" 
                    :error="lastNameError" 
                    errorMessage="Last name cannot be empty" 
                />

                <SharedTextInput 
                    label="Location" 
                    v-model="location" 
                    :error="locationError" 
                    errorMessage="Location cannot be empty" 
                />

                <div class="flex flex-col gap-2 items-start col-start-2">

                    <label :class="phoneNumberError ? 'text-red-600' : 'text-gray-600' " class="text-sm font-semibold">Phone Number</label>


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

                </div>

                <SharedTextArea 
                    label="About (up to 1200 characters)"
                    rows="4" 
                    :maxChars="1200"
                    v-model="about"
                    :error="aboutError"
                    error-message="content too long"   
                    class="col-span-2"
                />

            </div>

            
            <div class="w-full flex items-center justify-end gap-4">

                <button 
                @click="handleClose"
                class="px-6 py-2 btn-accent bg-gray-600 hover:bg-gray-800">
                    Cancel
                </button>

                <button 
                @click="onSubmit"
                class="px-6 py-2 gradient-btn rounded-md">
                    Save Changes
                </button>
            </div>    

            <button @click="handleClose" class="absolute right-4 top-4 w-6 h-6 z-50">
                <font-awesome-icon icon="fa-solid fa-times" class="text-red-600 text-xl"/>
            </button>

        </div>


    </div>

</template>