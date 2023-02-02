<script setup>
import { useAuthStore } from "~~/stores/authStore"
import { storeToRefs } from "pinia";

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const token = localStorage.getItem('token')

const image = ref(null)
const imageValue = ref('')

const emits = defineEmits(['onEditClick'])

const authStore = useAuthStore()
const { user, getFullName, getInitials } = storeToRefs(authStore)

defineProps({
    editMode: {
        type: Boolean,
        default: false
    }
})

const onChange = async (event) => {
    var input = event.target;
    if (input.files) {

        image.value = input.files[0];

        let formData = new FormData()

        formData.append('profilePic', image.value)

        const data = await $fetch(`${baseUrl}/api/user/profilepic/${user.value?._id}`, {
            method: 'PATCH',
            body: formData,
            headers: {
                authorization: `Bearer ${token}`
            }
        })

      authStore.setUser(data)
        
    }
    
}

const toggleProfileForm = () => {
    emits('onEditClick')
}

</script>

<template>
  <div
    class="shadow-md rounded-lg bg-white w-full px-6 py-6 flex flex-col gap-2"
  >
    <div
      class="
        w-2/3
        aspect-square
        rounded-full
        mx-auto
        overflow-hidden
        relative
        group
      "
    >
      <img v-if="user.profilePic"
        :src="user.profilePic"
        class="w-full h-full object-cover"
        alt=""
      />

        <div 
        v-if="!user.profilePic"
        class="flex items-center justify-center bg-gray-500 text-white w-full h-full">
            <h1 class="font-bold text-8xl">{{ getInitials }}</h1>
        </div>

      <div
        v-if="editMode"
        class="
          absolute
          left-0
          bottom-0
          right-0
          mx-auto
          w-full
          h-1/3
          hidden
          items-center
          justify-center
          bg-black bg-opacity-30
          group-hover:flex
        "
      >
        <label
          for="cover-img"
          class="text-blue-500 text-sm font-semibold cursor-pointer"
        >
          <font-awesome-icon
            icon="fa-solid fa-camera"
            class="text-blue-500 text-2xl"
          />
        </label>

        <input
          class="hidden"
          id="cover-img"
          type="file"
          @change="onChange"
          accept="image/*"
          ref="imageValue"
        />
      </div>
    </div>

    <h1 class="text-center font-semibold text-lg">{{ getFullName ? getFullName : user.username }}</h1>

    <div class="w-full flex flex-col items-center">
      <div 
      v-if="user.address"
      class="w-max flex items-center gap-2">
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          class="text-blue-600 text-base"
        />
        <p class="text-sm font-semibold text-gray-600">{{ user.address.city }}</p>
      </div>

      <div class="w-max flex items-center gap-2">
        <font-awesome-icon
          icon="fa-solid fa-envelope"
          class="text-blue-600 text-base"
        />
        <p class="text-sm font-semibold text-gray-600">{{ user.email }}</p>
      </div>
    </div>

    <!-- <div class="mt-8">
      <h2 class="font-semibold text-lg text-gray-700 mb-2">
        Identity Verification
      </h2>
      <p class="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
    </div> -->

    <div class="mt-8 flex flex-col gap-4">
      <h2 
      v-if="getFullName"
      class="font-semibold text-lg">{{ getFullName }}</h2>

      <div class="w-full flex items-center gap-2">
        <font-awesome-icon
          icon="fa-solid fa-check"
          class="text-green-600 text-lg"
        />
        <p class="font-medium text-base text-gray-700">Email Confirmed</p>
      </div>

      <div class="w-full flex items-center gap-2">
        <font-awesome-icon
          icon="fa-solid fa-check"
          class="text-green-600 text-xl"
        />
        <p class="font-medium text-base text-gray-700">Mobile Confirmed</p>
      </div>
    </div>

    <button
        v-if="editMode"
      @click="toggleProfileForm"
      class="px-6 py-2 gradient-btn rounded-full mt-8 my-4"
    >
      Edit Profile
    </button>
  </div>
</template>