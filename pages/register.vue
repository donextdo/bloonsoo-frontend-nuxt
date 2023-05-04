<script setup>

import { storeToRefs } from "pinia"
import { useAuthStore } from "~~/stores/authStore"

definePageMeta({
    layout: 'empty'
})

const router = useRouter()

const authStore = useAuthStore()

const { userEmail } = storeToRefs(authStore)

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const username = ref()
const email = ref()
const password = ref()
const confirmPassword = ref()
const confirmPasswordError = ref(false)
const usernameExistError = ref(false)
const emailExistError = ref(false)
const loading = ref(false)


const handleClick = async () => {

    try {
        if(password.value.trim() !== confirmPassword.value.trim()) {
            setTimeout(() => {
                confirmPasswordError.value = false
            },5000)

            return confirmPasswordError.value = true
        }

        const registerDto = {
            username: username.value,
            email: email.value,
            password: password.value
        }

        loading.value = true

        const user = await $fetch(`${baseUrl}/api/auth/signup`, {
            method: 'POST',
            body: registerDto
        })  
        
        // localStorage.setItem('token', user.token)
        // localStorage.setItem('user', JSON.stringify(user.userInfo))

        // await authStore.getAuthUser()
        console.log(userEmail)
        userEmail.value = email.value

        router.push({path: '/register-success'})

    } catch (error) {
        loading.value = false
        if (error.response) {
            if(error.response._data.duplicate){
                if(Object.values(error.response._data.duplicate).includes('username')) {
                    setTimeout(() => {
                        usernameExistError.value = false
                    },5000)
                    return usernameExistError.value = true
                }

                if(Object.values(error.response._data.duplicate).includes('email')) {
                    setTimeout(() => {
                        emailExistError.value = false
                    },5000)
                    return emailExistError.value = true
                }
            }
            else {
                console.log(error.response._data.message)
            }
        } else {
            console.error(error)
        }
    }

}

</script>


<template>

    <NavbarLoginNav/>

    <section class="login-section">

        <div class="w-full h-full px-12 col-start-2 bg-white bg-opacity-60 backdrop-blur-sm flex flex-col justify-center gap-6">

            <h3 class="text-4xl font-semibold mb-6">Sign Up</h3>

            <div class="relative w-full">

                <input type="text" placeholder="Username" 
                v-model="username"
                class="w-full pl-12 pr-6 py-3 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

                <font-awesome-icon icon="fa-solid fa-user" class="text-[#3A1C61] text-xl absolute left-4 top-0 bottom-0 my-auto"/>

                <small v-if="usernameExistError"
                    class="text-xs font-semibold text-red-700 absolute left-0 -bottom-5">
                        This username already exists
                </small>

            </div>

            <div class="relative w-full">

                <input type="email" placeholder="Email" 
                v-model="email"
                class="w-full pl-12 pr-6 py-3 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

                <font-awesome-icon icon="fa-solid fa-envelope" class="text-[#3A1C61] text-xl absolute left-4 top-0 bottom-0 my-auto"/>

                <small v-if="emailExistError"
                    class="text-xs font-semibold text-red-700 absolute left-0 -bottom-5">
                        This email already exists
                </small>

            </div>

            <div class="w-full grid grid-cols-2 gap-6">

                <SharedPassword
                    placeholder="Password"
                    v-model="password"
                />

                <SharedPassword
                    placeholder="Confirm Password"
                    v-model="confirmPassword"
                    :error="confirmPasswordError"
                    errorMessage="Passwords doesn't Match"
                />

            </div>

            <p class="text-sm font-normal">
                Bloonsoo may keep me informed with personalized emails about products and services. See our <NuxtLink to="#" class="font-bold">Privacy Policy </NuxtLink>for more details.
            </p>

            <div class="flex items-center">

                <input type="checkbox"
                id="checkbox-1"
                class="w-4 h-4 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

                <label for="checkbox-1" class="ml-2 text-sm text-gray-600">
                    Please contact me via e-mail
                </label>

            </div>

            <div class="flex items-center">

                <input type="checkbox"
                id="checkbox-2"
                class="w-4 h-4 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

                <label for="checkbox-2" class="ml-2 text-sm text-gray-600">
                    I have read and accept the Terms and Conditions
                </label>

            </div>

            <button
            @click="handleClick"
            :disabled="loading"
            class="w-full py-3 bg-[#3A1C61] text-white font-semibold text-base rounded-lg hover:bg-blue-900 text-bold"
            >
                <span v-if="!loading">Create Account</span>
                <SharedButtonSpinner v-if="loading"/>
            </button>

            <p class="text-sm text-gray-700 font-medium">
                Already have an account? <NuxtLink to="/login" class="text-[#3A1C61]">Sing In</NuxtLink>
            </p>

        </div>

    </section>
</template>


<style scoped>

    .login-section {
        @apply h-screen md:grid grid-cols-2 font-montserrat;
        background-image: url('../assets/login/hero.png');
        background-size: cover;
        background-repeat: no-repeat;
    }

</style>