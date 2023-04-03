<script setup>

import { storeToRefs } from "pinia"
import { useAuthStore } from "~~/stores/authStore"

definePageMeta({
    layout: 'listing'
})


const router = useRouter()
const route = useRoute()

const authStore = useAuthStore()

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const username = ref()
const usernameNotFoundError = ref(false)


</script>


<template>
    <section class="text-black font-montserrat md:container mx-auto px-5 md:px-10 py-20">

      <div class="w-56 md:w-96 h-full mx-auto space-y-10">


        <h3 class="text-lg md:text-2xl font-semibold ">Find Your Account</h3>

        <hr>

        <p class="text-sm">Please enter your email address or mobile number to search for your account</p>

        <div class="relative w-full mb-2">

        <input type="email" placeholder="Email or Username" 
        v-model="username"
        class="w-full pl-12 pr-6 py-3 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

        <font-awesome-icon icon="fa-solid fa-user" class="text-[#3A1C61] text-xl absolute left-4 top-0 bottom-0 my-auto"/>

        <small v-if="usernameNotFoundError"
            class="text-xs font-semibold text-red-700 absolute left-0 -bottom-5">
                Cannot find username or email
        </small>

        </div>

        <button
        @click="handleClick"
        class="w-full py-3 bg-[#3A1C61] text-white font-semibold text-base rounded-lg hover:bg-blue-900 text-bold"
        >
        Send email
        </button>


      </div>



    </section>
</template>
