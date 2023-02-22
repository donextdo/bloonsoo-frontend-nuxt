<script setup>
import { useAuthStore } from "~~/stores/authStore"
import { storeToRefs } from "pinia";

defineProps({
    short: Boolean
})

const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
    authStore.getAuthUser()
})

const { user, getFullName, getInitials } = storeToRefs(authStore)
const menu = ref(false)

const toggleMenu = () => {
    menu.value = !menu.value
}

const logout = () => {
    user.value = null
    localStorage.removeItem('token')
    toggleMenu()
    router.push('/')
}

</script>

<template>
    
    <nav class="py-8 bg-darkblue text-white font-montserrat">
        <div class="px-4 flex items-center justify-between relative md:px-2 md:container md:mx-auto">
            
            <NuxtLink to="/">
                <h1 class="text-3xl font-bold">
                    LOGO
                </h1>
            </NuxtLink>

            <div class="flex gap-5">

                <div class="flex gap-2">
                    <NuxtLink v-if="user" to="/listing/" class="py-2 px-6 rounded-full gradient-btn">Become A Host</NuxtLink>

                    <button 
                    @click="toggleMenu"
                    class="flex gap-3 rounded-full px-1 bg-white items-center justify-between">
                        <font-awesome-icon v-if="!menu" icon="fa-solid fa-bars" 
                        class="text-blue-700 ml-3"/>

                        <font-awesome-icon v-if="menu" icon="fa-solid fa-times" 
                        class="text-blue-700 text-xl ml-3"/>

                        <div class="bg-blue-700 w-8 h-8 flex items-center justify-center rounded-full overflow-hidden">
                            <font-awesome-icon
                            v-if="!user"
                            icon="fa-solid fa-user" class="text-white"/>

                            <img 
                            v-if="user && user.profilePic"
                                :src="user.profilePic"
                                class="w-full h-full object-cover"
                                alt=""
                            />

                            <div 
                            v-if="user && !user.profilePic"
                            class="flex items-center justify-center text-white w-full h-full">
                                <h1 class="font-bold text-sm">{{ getInitials }}</h1>
                            </div>
                        </div>
                    </button>
                </div>

                <div v-if="!user" class="flex gap-2 text-white font-semibold">
                    <NuxtLink class="px-6 py-2 gradient-outline-btn" to="/login">Login</NuxtLink>

                    <NuxtLink class="px-6 py-2 gradient-outline-btn" to="/register">Register</NuxtLink>
                </div>

            </div>

            <div 
            :class="menu ? 'scale-y-100' : 'scale-y-0'"
            class="bg-white px-6 py-4 rounded-md w-56 absolute right-6 top-12 z-30 
            shadow-md transition-all duration-300 origin-top">
                <ul class="w-full flex flex-col gap-2 text-sm font-semibold text-gray-600">
                    <li 
                    v-if="user"
                    class="w-full border-b border-gray-300 py-1">
                        <NuxtLink to="/profile">
                            Profile
                        </NuxtLink>
                    </li>

                    <li class="w-full border-b border-gray-300 py-1">
                        <NuxtLink to="#">
                            Offers
                        </NuxtLink>
                    </li>

                    <li class="w-full border-b border-gray-300 py-1">
                        <NuxtLink to="#">
                            Rental Guides
                        </NuxtLink>
                    </li>

                    <li class="w-full border-b border-gray-300 py-1">
                        <NuxtLink to="#">
                            About us
                        </NuxtLink>
                    </li>

                    <button
                    v-if="user"
                    @click="logout"
                    class="btn-accent py-2">
                        Logout
                    </button>

                    
                </ul>
            </div>

        </div>

        <!-- <div class="px-4 mt-6 font-normal flex space-x-2 items-center justify-start sm:px-2 sm:container sm:mx-auto">
            <NuxtLink to="/" class="flex py-2 px-4 rounded-full border-2 border-white gap-2 items-center justify-center">
                <font-awesome-icon icon="fa-solid fa-hotel" class="w-4 h-4" />
                <span class="text-sm">Hotels</span>
            </NuxtLink>

            <NuxtLink to="/coming_soon" class="flex py-2 px-4 rounded-full border-white gap-2 items-center justify-center">
                <NavbarIconsFlight />
                <span class="text-sm">Flights</span>
            </NuxtLink>
            
            <NuxtLink to="/coming_soon" class="flex py-2 px-4 rounded-full border-white gap-2 items-center justify-center">
                <NavbarIconsRoom />
                <span class="text-sm">Rooms</span>
            </NuxtLink>

            <NuxtLink to="/coming_soon" class="flex py-2 px-4 rounded-full border-white gap-2 items-center justify-center">
                <NavbarIconsFlats />
                <span class="text-sm">Flats</span>
            </NuxtLink>

            <NuxtLink to="/coming_soon" class="flex py-2 px-4 rounded-full border-white gap-2 items-center justify-center">
                <font-awesome-icon icon="fa-solid fa-house-chimney" class="w-4 h-4" />
                <span class="text-sm">Villas</span>
            </NuxtLink>

        </div> -->

        <div :class="short ? 'h-32' : 'h-44'" class="relative mx-auto flex flex-col justify-center sm:container px-20">
            <h1 class=" text-3xl font-bold">
                Find your next stay
            </h1>

            <p class="mt-3 text-sm font-normal">
                Search low prices on hotels, homes and much more...
            </p>
        </div>

    </nav>

    <slot></slot>

</template>
