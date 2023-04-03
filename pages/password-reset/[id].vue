<script setup>

import { storeToRefs } from "pinia"
import { useAuthStore } from "~~/stores/authStore"

definePageMeta({
    layout: 'listing'
})

const { id } = useRoute().params
const router = useRouter()
const route = useRoute()

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const password = ref()
const confirmPassword = ref()
const passwordLengthError = ref(false)
const passwordMatchError = ref(false)
const errorResponse = ref(false)
const loading = ref(false)

const handleClick = async () => {
    setTimeout(() => {
      passwordLengthError.value = false
      passwordMatchError.value = false
    }, 5000)

    if (password.value.length < 8) {
      return passwordLengthError.value = true
    }

    if (password.value !== confirmPassword.value) {
      return passwordMatchError.value = true
    }

    loading.value = true

    try {
        
        const data = await $fetch(`${baseUrl}/api/auth/reset-password`, {
            method: 'POST',
            body: {
                token: id,
                password: password.value
            }
        })

        setTimeout(() => {
          loading.value = false
          router.push({path: '/login', query: {verified:true}})
        }, 4000)
        

    } catch (error) {
        loading.value = false
        errorResponse.value = true
        console.log(error.response)
    }
}

</script>


<template>
    <section class="text-black font-montserrat md:container mx-auto px-5 md:px-10 py-20">

      <div class="w-56 md:w-96 h-full mx-auto space-y-10">


        <h3 class="text-lg md:text-2xl font-semibold mb-6 ">Create a new password</h3>

        <h4 
            v-if="errorResponse"
            class="text-lg font-semibold text-center text-gray-700">
                Oops... Something went wrong. Please try again later
        </h4>

        <p class="text-sm font-semibold">Use a minimum of 8 characters, including uppercase letters, lowercase letters, and numbers.</p>

        <SharedPassword
            placeholder="Password"
            v-model="password"
            :error="passwordLengthError"
            errorMessage="Invalid Password"
        />

        <SharedPassword
            placeholder="Confirm password"
            v-model="confirmPassword"
            :error="passwordMatchError"
            errorMessage="Password doesn't match!"
        />

        <button
        @click="handleClick"
        :disabled="!password"
        class="w-full py-3 bg-[#3A1C61] text-white font-semibold text-base rounded-lg hover:bg-blue-900 text-bold"
        >
          <span v-if="!loading">Set new password</span> 
          <SharedButtonSpinner v-else/>
        </button>


      </div>



    </section>
</template>
