<script setup>

definePageMeta({
    layout: 'empty'
})

const router = useRouter()

const handleClick = () => {
    router.push({path: '/'})
}

</script>


<template>
    <section class="login-section">

        <div class="w-full h-full px-12 col-start-2 bg-white bg-opacity-60 backdrop-blur-sm flex flex-col justify-center gap-6">

            <h3 class="text-4xl font-semibold mb-6">Sign Up</h3>

            <div class="relative w-full">

                <input type="text" placeholder="Username" 
                class="w-full pl-12 pr-6 py-3 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

                <font-awesome-icon icon="fa-solid fa-user" class="text-[#3A1C61] text-xl absolute left-4 top-0 bottom-0 my-auto"/>

            </div>

            <div class="relative w-full">

                <input type="email" placeholder="Email" 
                class="w-full pl-12 pr-6 py-3 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

                <font-awesome-icon icon="fa-solid fa-envelope" class="text-[#3A1C61] text-xl absolute left-4 top-0 bottom-0 my-auto"/>

            </div>

            <div class="w-full grid grid-cols-2 gap-6">

                <div class="relative">

                    <input type="password" placeholder="Password" 
                    class="w-full pl-12 pr-6 py-3 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

                    <font-awesome-icon icon="fa-solid fa-lock" class="text-[#3A1C61] text-xl absolute left-4 top-0 bottom-0 my-auto"/>

                </div>

                <div class="relative">

                    <input type="password" placeholder="Confirm Password" 
                    class="w-full pl-12 pr-6 py-3 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

                    <font-awesome-icon icon="fa-solid fa-lock" class="text-[#3A1C61] text-xl absolute left-4 top-0 bottom-0 my-auto"/>

                </div>

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
            class="w-full py-3 bg-[#3A1C61] text-white font-semibold text-base rounded-lg hover:bg-blue-900 text-bold"
            >
            Create Account
            </button>

            <NuxtLink to="#" class="ml-auto text-sm font-semibold">
                Forgot Password ?
            </NuxtLink>

        </div>

    </section>
</template>


<style scoped>

    .login-section {
        @apply h-screen grid grid-cols-2 font-montserrat;
        background-image: url('../assets/login/hero.png');
        background-size: cover;
        background-repeat: no-repeat;
    }

</style>