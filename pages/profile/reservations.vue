<script setup>
import { useAuthStore } from "~~/stores/authStore"
import { storeToRefs } from "pinia";
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import '@/assets/css/phoneNumberInput.css'

definePageMeta({
    layout: 'mini-searchbar',
    middleware: ['auth']
})

const showProfileForm = ref(false)
const menu = ref(false)
const router = useRouter()

const authStore = useAuthStore()
const { user, getFullName, getYear } = storeToRefs(authStore)

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const token = localStorage.getItem('token')

const editMode = ref(false)

const firstName = ref()
const firstNameError = ref(false)

const lastName = ref()
const lastNameError = ref(false)

const addressLine1 = ref()
const addressLine1Error = ref(false)

const addressLine2 = ref()

const city = ref()
const cityError = ref(false)

const country = ref()
const countryError = ref(false)

const postalCode = ref()
const postalCodeError = ref(false)

const phoneNumber = ref()
const phoneNumberRes = ref()
const phoneNumberError = ref(false)

const about = ref()
const aboutError = ref(false)


function setDefaults() {
  firstName.value = user.value?.firstName ? user.value?.firstName : ''
  lastName.value = user.value?.lastName ? user.value?.lastName: ''
  addressLine1.value = user.value?.address ? user.value?.address.addressLine1 : ''
  addressLine2.value = user.value?.address ? user.value?.address.addressLine2 : ''
  city.value = user.value?.address ? user.value?.address.city : ''
  country.value = user.value?.address ? user.value?.address.country : ''
  postalCode.value = user.value?.address ? user.value?.address.postalCode : ''
  phoneNumber.value = user.value?.mobile ? user.value?.mobile : ''
  about.value = user.value?.about ? user.value?.about : ''
}

onMounted(() => {
  setDefaults()
})


const toggleEditMode = () => {
  editMode.value = !editMode.value
}

const handleCancel = () => {
  editMode.value = !editMode.value
  setDefaults()
}


const handleSave = async () => {

    setTimeout(() => {
        firstNameError.value = false
        lastNameError.value = false
        addressLine1Error.value = false
        cityError.value = false
        countryError.value = false
        phoneNumberError.value = false
    }, 10000)

    if(!firstName.value) return firstNameError.value = true
    if(!lastName.value) return lastNameError.value = true
    if(!addressLine1.value) return addressLine1Error.value = true
    if(!city.value) return cityError.value = true
    if(!country.value) return countryError.value = true
    if(!phoneNumberRes.value.isValid) return phoneNumberError.value = true

    const updateProfileDto = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: {
        addressLine1: addressLine1.value,
        addressLine2: addressLine2.value,
        city: city.value,
        country: country.value,
        postalCode: postalCode.value,
      },
      mobile: phoneNumberRes.value.e164,
      about: about.value,
      isProfileComplete: true
    }

  try {
      const data = await $fetch(`${baseUrl}/api/user/${user.value?._id}`, {
          method: 'PATCH',
          body: updateProfileDto,
          headers: {
              authorization: `Bearer ${token}`
          }
      })

      authStore.setUser(data)
      setDefaults()
      toggleEditMode()

  } catch (error) {
      throw error
  }

}

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
    
   <section class="text-black font-montserrat md:container mx-auto px-2 flex flex-col gap-14 py-10">


        <main class="grid grid-cols-4 items-start gap-12 w-full">

          <aside class="w-full col-span-1 h-full">

            <ProfileCard />

          </aside>      

          <section class="w-full col-span-3 flex flex-col relative">

            <div class="w-full pb-6 border-b border-gray-300">
              <h4 class="text-lg font-bold">Resarvations</h4>
            </div>

            
            <button 
            @click="toggleMenu"
            class="absolute top-0 right-10">
              <font-awesome-icon v-if="!menu" icon="fa-solid fa-bars" class="text-4xl text-blue-700" />
              <font-awesome-icon v-if="menu" icon="fa-solid fa-times" class="text-4xl text-blue-700" />
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


        <ProfileForm 
        v-if="showProfileForm"
        @onSubmit="onProfileFormSubmit" @onClose="toggleProfileForm" />

   </section>

</template>
