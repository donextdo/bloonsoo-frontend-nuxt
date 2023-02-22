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
const password = ref()
const usernameNotFoundError = ref(false)
const passwordInvalidError = ref(false)

const handleClick = async () => {
    try {
        

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

        // router.push({path: '/'})
        router.go(-1)

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
    <section class="login-section">

        <div class="w-full h-full px-12 text-gray-700 bg-white bg-opacity-60 backdrop-blur-sm flex flex-col justify-center gap-6">

            <h1 class="text-4xl font-bold text-center">
                Thank you for registering!
            </h1>

            <p class="text-base font-medium tracking-wider max-w-xl text-center mx-auto">
                We have sent a verification email to {{ userEmail }}. Please check your inbox and click the verification link to complete your registration. If you did not receive the email, please check your spam folder. 
            </p>
             
            <NuxtLink to="/" class="w-max px-6 mx-auto py-3 bg-[#3A1C61] text-white font-semibold text-base rounded-lg hover:bg-blue-900 text-bold">
                Go to Home
            </NuxtLink>

        </div>

    </section>
</template>


<style scoped>

    .login-section {
        @apply h-screen font-montserrat;
        background-image: url('../assets/login/hero.png');
        background-size: cover;
        background-repeat: no-repeat;
    }

</style>