<script setup>
import { useAuthStore } from "~~/stores/authStore"
import { storeToRefs } from "pinia";
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import '@/assets/css/phoneNumberInput.css'

definePageMeta({

  layout: 'listing',
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
      console.log(error)
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

            <ProfileCard @onEditClick="toggleEditMode" editMode/>

          </aside>      

          <section class="w-full col-span-3 flex flex-col relative">

            <!-- <div class="w-full">
                <h1 class="text-3xl font-semibold ">Hello, Regina George</h1>
                <p class="text-gray-500 text-md font-medium">Joined in {{ getYear }}</p>
            </div> -->

            <div class="w-full pb-6 border-b border-gray-300">
              <div class="flex items-center gap-4">
                <h4 class="text-lg font-bold">Your information</h4>
                <button
                    v-if="!editMode"
                    @click="toggleEditMode"
                >
                    <font-awesome-icon
                        icon="fa-solid fa-pen-to-square"
                        class="text-blue-600 text-base"
                    />
                </button>
              </div>
              
              <p
              v-if="!user.isProfileComplete"
              class="text-sm font-semibold text-red-800">*Please complete your profile</p>
            </div>

            <div class="w-[80%] flex flex-col gap-6 mt-6">
            
              <div class="w-full grid grid-cols-2 gap-6">

                  <SharedTextInput 
                      label="First Name" 
                      v-model="firstName" 
                      :error="firstNameError" 
                      errorMessage="First name cannot be empty" 
                      :readonly="!editMode"
                  />

                  <SharedTextInput 
                      label="Last Name" 
                      v-model="lastName" 
                      :error="lastNameError" 
                      errorMessage="Last name cannot be empty" 
                      :readonly="!editMode"
                  />

                  <SharedTextInput 
                      label="Address Line 1" 
                      v-model="addressLine1" 
                      :error="addressLine1Error" 
                      errorMessage="Location cannot be empty" 
                      :readonly="!editMode"
                  />

                  <SharedTextInput 
                      label="Address Line 2 (optional)" 
                      v-model="addressLine2" 
                      :readonly="!editMode" 
                  />

                  <SharedTextInput 
                      label="City" 
                      v-model="city" 
                      :error="cityError" 
                      errorMessage="Location cannot be empty" 
                      :readonly="!editMode"
                  />

                  <SharedTextInput 
                      label="Country or Region" 
                      v-model="country" 
                      :error="countryError" 
                      errorMessage="Location cannot be empty" 
                      :readonly="!editMode"
                  />

                  <SharedTextInput 
                      label="Postal code" 
                      v-model="postalCode" 
                      :error="postalCodeError" 
                      errorMessage="Location cannot be empty" 
                      :readonly="!editMode"
                  />

                  <SharedTextInput 
                      v-if="!editMode"
                      label="Phone Number" 
                      v-model="phoneNumber" 
                      readonly
                  />

                  <div
                  v-if="editMode"
                  class="flex flex-col gap-2 items-start col-start-2">

                      <!-- <div class="flex items-center gap-4"> -->
                        <label :class="phoneNumberError ? 'text-red-600' : 'text-gray-600' " class="text-sm font-semibold">Phone Number</label>

                        <!-- <button
                            v-if="!editMode"
                            @click="toggleEditMode"
                        >
                            <font-awesome-icon
                                icon="fa-solid fa-pen-to-square"
                                class="text-blue-600 text-sm"
                            />
                        </button> -->
                      <!-- </div> -->
                      

                      <ClientOnly>
                      <MazPhoneNumberInput
                          v-model="phoneNumber"
                          show-code-on-list
                          :preferred-countries="['LK', 'FR', 'BE', 'DE', 'US', 'GB']"
                          no-example size="sm"
                          @update="phoneNumberRes = $event"
                          :success="phoneNumberRes?.isValid"
                      />
                      </ClientOnly>

                      <small v-if="phoneNumberError" class="text-xs text-red-600">
                          Please enter a mobile number
                      </small>

                  </div>

                  <div
                  v-if="!editMode"
                  class="flex flex-col gap-2 items-start col-span-2">
                    <!-- <div class="flex items-center gap-4"> -->
                      <h4 class="text-sm font-semibold text-gray-600">
                        About
                      </h4>

                      <!-- <button
                          v-if="!editMode"
                          @click="toggleEditMode"
                      >
                          <font-awesome-icon
                              icon="fa-solid fa-pen-to-square"
                              class="text-blue-600 text-sm"
                          />
                      </button>
                    </div> -->
                    
                    <div class="w-full px-6 py-4 border border-slate-400 font-semibold text-gray-600">
                      {{ about }}
                    </div>
                  </div>
                  

                  <SharedTextArea 
                      v-if="editMode"
                      label="About (up to 1200 characters)"
                      rows="4" 
                      :maxChars="1200"
                      v-model="about"
                      :error="aboutError"
                      error-message="content too long"   
                      class="col-span-2"
                  />

              </div>


              <div 
              v-if="editMode"
              class="w-full flex items-center justify-end gap-4">

                  <button 
                  @click="handleCancel"
                  class="px-6 py-2 btn-accent bg-gray-600 hover:bg-gray-800">
                      Cancel
                  </button>

                  <button 
                  @click="handleSave"
                  class="px-6 py-2 gradient-btn rounded-md">
                      Save Changes
                  </button>
              </div> 

            </div>
            
            <!-- <div class="w-full mt-6">
                <h1 class="text-lg font-semibold">About me</h1>
                <p class="text-gray-500 text-base max-w-[85%] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,</p>
            </div> -->

            <!-- <div class="mt-8 flex flex-col gap-4">
              <div class="flex items-center gap-2">
                  <font-awesome-icon icon="fa-solid fa-star" class="text-semidarkyellow text-lg"/>
                  <p class="font-semibold text-base">0 Reviews</p>
              </div>

              <NuxtLink to="#" class="text-blue-700 font-semibold underline text-base">Reviewed By You</NuxtLink>
            </div> -->
            

            <!-- <div class="mt-6 w-[85%] flex flex-col gap-4">
                <button class="w-full h-16 font-semibold mb-2 bg-gray-100 border-gray-300 border-2">
                  <div class="w-full flex items-center gap-3 mx-3">
                    <HotelFacility class="!p-0 !w-max" icon="message" label="Message"/>
                  </div>
                </button>

                <button class="w-full h-16 font-semibold mb-2 bg-gray-100 border-gray-300 border-2">
                  <div class="w-full flex items-center gap-3 mx-3">
                    <HotelFacility class="!p-0 !w-max" icon="notification" label="Notifications"/>
                  </div>
                </button>

                <button class="w-full h-16 font-semibold mb-2 bg-gray-100 border-gray-300 border-2">
                  <div class="w-full flex items-center gap-3 mx-3">
                    <HotelFacility class="!p-0 !w-max" icon="reservation" label="Reservations"/>
                  </div>
                </button>

                <button class="w-full h-16 font-semibold mb-2 bg-gray-100 border-gray-300 border-2">
                  <div class="w-full flex items-center gap-3 mx-3">
                    <HotelFacility class="!p-0 !w-max" icon="wishlist" label="Wishlists"/>
                  </div>
                </button>
            </div> -->

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
