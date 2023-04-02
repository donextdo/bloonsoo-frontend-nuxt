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

const password = ref()
const passwordInvalidError = ref(false)


</script>


<template>
    <section class="text-black font-montserrat md:container mx-auto px-5 md:px-10 py-20">

      <div class="w-56 md:w-96 h-full mx-auto space-y-10">


        <h3 class="text-lg md:text-2xl font-semibold mb-6 ">Create a new password</h3>

        <p class="text-sm">Use a minimum of 10 characters, including uppercase letters, lowercase letters, and numbers.</p>

        <SharedPassword
            placeholder="Password"
            v-model="password"
            :error="passwordInvalidError"
            errorMessage="incorrect password"
        />

        <SharedPassword
            placeholder="Confirm password"
            v-model="password"
            :error="passwordInvalidError"
            errorMessage="incorrect password"
        />

        <button
        @click="handleClick"
        class="w-full py-3 bg-[#3A1C61] text-white font-semibold text-base rounded-lg hover:bg-blue-900 text-bold"
        >
        Set new password
        </button>


      </div>



    </section>
</template>
