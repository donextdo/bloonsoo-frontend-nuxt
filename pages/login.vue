<script setup>

import { storeToRefs } from "pinia"
import { useAuthStore } from "~~/stores/authStore"

definePageMeta({
    layout: 'empty'
})

const router = useRouter()
const route = useRoute()

const authStore = useAuthStore()

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const username = ref()
const password = ref()
const usernameNotFoundError = ref(false)
const passwordInvalidError = ref(false)

const handleClick = async () => {
    try {
        
        const verified = route.query.verified

        const loginDto = {
            email: username.value,
            password: password.value
        }

        const user = await $fetch(`${baseUrl}/api/auth/signin`, {
            method: 'POST',
            body: loginDto
        })  
        
        localStorage.setItem('token', user.token)
        // localStorage.setItem('user', JSON.stringify(user.userInfo))

        await authStore.getAuthUser()

        if(verified) {
            router.push({path: '/'})
        }
        else {
            router.go(-1)
        }
        
    } catch (error) {

        if (error.response) {
            if(error.response._data.code){
                if(error.response._data.code === 'USER_NOT_FOUND') {
                    setTimeout(() => {
                        usernameNotFoundError.value = false
                    },5000)
                    return usernameNotFoundError.value = true
                }
                else if(error.response._data.code === 'INVALID_PASSWORD') {
                    setTimeout(() => {
                        passwordInvalidError.value = false
                    },5000)
                    return passwordInvalidError.value = true
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

            <h3 class="text-4xl font-semibold mb-6">Login</h3>

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

            <!-- <div class="relative w-full mb-2">

                <input type="password" placeholder="Password" 
                v-model="password"
                class="w-full pl-12 pr-6 py-3 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

                <font-awesome-icon icon="fa-solid fa-lock" class="text-[#3A1C61] text-xl absolute left-4 top-0 bottom-0 my-auto"/>

                <small v-if="passwordInvalidError"
                    class="text-xs font-semibold text-red-700 absolute left-0 -bottom-5">
                        Invalid Password
                </small>

            </div> -->

            <SharedPassword
                placeholder="password"
                v-model="password"
                :error="passwordInvalidError"
                errorMessage="incorrect password"
            />

            <div class="flex items-center mb-2">

                <input type="checkbox"
                id="checkbox-1"
                class="w-4 h-4 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

                <label for="checkbox-1" class="ml-2 text-sm text-gray-600">
                    Keep me logged in
                </label>
            </div>

            <button
            @click="handleClick"
            class="w-full py-3 bg-[#3A1C61] text-white font-semibold text-base rounded-lg hover:bg-blue-900 text-bold"
            >
            Login
            </button>

            <NuxtLink to="/password-reset/forgot-password" class="ml-auto text-sm font-semibold">
                Forgot Password ?
            </NuxtLink>

            <p class="text-sm text-gray-700 font-medium -mt-4">
                Don't have an account? <NuxtLink to="/register" class="text-[#3A1C61]">Sing Up</NuxtLink>
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