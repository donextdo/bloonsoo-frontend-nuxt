<script setup>
import { useAuthStore } from "~~/stores/authStore"
import { storeToRefs } from "pinia";

definePageMeta({
    layout: 'listing',
    middleware: ['auth']
})

const menu = ref(false)
const router = useRouter()

const authStore = useAuthStore()
const { user, getFullName, getYear } = storeToRefs(authStore)

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const token = localStorage.getItem('token')

const bookings = ref([])

onMounted( async () => {

  try {
    const data = await $fetch(`${baseUrl}/api/booking/my/bookings`, {
          headers: {
              authorization: `Bearer ${token}`
          }
    })

    bookings.value = data
  }
  catch(error) {
    console.log(error)
  }
})


const toggleMenu = () => {
    menu.value = !menu.value
}

const logout = () => {
    user.value = null
    localStorage.removeItem('token')
    router.push('/')
}


</script>


<template>
    
   <section class="text-black font-montserrat md:container mx-auto px-5 md:px-2 flex flex-col gap-14 py-10">


        <main class="md:grid grid-cols-4 items-start gap-12 w-full">

          <aside class="w-full col-span-1 h-full mb-10 md:mb-0">

            <ProfileCard />

          </aside>      

          <section class="w-full col-span-3 flex flex-col relative">

            <div class="w-full pb-6 border-b border-gray-300">
              <h4 class="text-lg font-bold">Reservations</h4>
            </div>


            <div class="mt-6 flex flex-col gap-4 w-full">

              <BookingCard
                v-for="book in bookings"
                :key="book._id"
                :booking="book"
              />

            </div>


            <button 
            @click="toggleMenu"
            class="absolute top-0 right-10">
              <font-awesome-icon v-if="!menu" icon="fa-solid fa-bars" class="text-2xl md:text-4xl text-blue-700" />
              <font-awesome-icon v-if="menu" icon="fa-solid fa-times" class="text-2xl md:text-4xl text-blue-700" />
            </button>

            <div 
            :class="menu ? 'scale-y-100' : 'scale-y-0'"
            class="bg-white px-6 py-4 rounded-md w-56 absolute right-10 top-12 z-30 
            shadow-md transition-all duration-300 origin-top">
                <ul class="w-full flex flex-col gap-2 text-sm font-semibold text-gray-600">
                    <li 
                    class="w-full border-b border-gray-300 py-1">
                        <NuxtLink to="/profile">
                            Profile
                        </NuxtLink>
                    </li>

                    <li class="w-full border-b border-gray-300 py-1">
                        <NuxtLink to="/profile/reservations">
                            Reservations
                        </NuxtLink>
                    </li>

                    <li class="w-full border-b border-gray-300 py-1">
                        <NuxtLink to="#">
                            Wish List
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

          </section>
            
        </main>

   </section>

</template>
