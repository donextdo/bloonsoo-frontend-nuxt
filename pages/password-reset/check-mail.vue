<script setup>

import { storeToRefs } from "pinia"
import { useAuthStore } from "~~/stores/authStore"

definePageMeta({
    layout: 'listing'
})

const router = useRouter()

const authStore = useAuthStore()

const { userEmail } = storeToRefs(authStore)

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const email = ref()
const userNotFoundError = ref(false)
const invalidEmailError = ref(false)



</script>


<template>
    <section class="text-black font-montserrat md:container mx-auto px-5 md:px-10 py-20">

        <div class="w-56 md:w-96 h-full mx-auto space-y-10 text-center">

            <h1 class="text-2xl md:text-4xl font-bold ">
                Successfull !!
            </h1>

            <p class="text-sm md:text-base font-medium tracking-wider max-w-xl">
              We have sent a  email to {{ userEmail }}. Please check your inbox and click the reset password button to reset your password. If you did not receive the email, please check your spam folder. 
            </p>
            

            <NuxtLink to="/">
              <button
                class="px-4 py-3 bg-[#3A1C61] text-white font-semibold text-sm md:text-base rounded-lg hover:bg-blue-900 text-bold mt-10"
                >
                Go to Home
              </button>
            </NuxtLink>

        </div>

    </section>
</template>
