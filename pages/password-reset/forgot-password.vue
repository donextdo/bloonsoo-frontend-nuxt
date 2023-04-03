<script setup>

definePageMeta({
    layout: 'listing'
})


const router = useRouter()
const route = useRoute()

const config = useRuntimeConfig()

const baseUrl = config.public.baseUrl

const email = ref()
const userNotFoundError = ref(false)
const loading = ref(false)

const handleClick = async () => {
    try {
        
        loading.value = true

        const loginDto = {
            email: email.value,
        }

        const res = await $fetch(`${baseUrl}/api/auth/send-password-reset-email`, {
            method: 'POST',
            body: loginDto
        })  

        console.log(res)

        setTimeout(() => {
          router.push({path: '/password-reset/check-mail'})
          loading.value = false
        }, 3000)
        
        
    } catch (error) {

        if (error.response) {
            if(error.response._data.message){
                if(error.response._data.message === 'USER_NOT_FOUND') {
                    setTimeout(() => {
                        userNotFoundError.value = false
                    },5000)
                    loading.value = false
                    return userNotFoundError.value = true
                    
                }
            }
            else {
                console.log(error.response._data.message)
            }
        } else {
            console.error(error)
        }
        loading.value = false
    }
}

</script>


<template>
    <section class="text-black font-montserrat md:container mx-auto px-5 md:px-10 py-20">

      <div class="w-56 md:w-96 h-full mx-auto space-y-10">


        <h3 class="text-lg md:text-2xl font-semibold ">Find Your Account</h3>

        <hr>

        <p class="text-sm">Please enter your email address or mobile number to search for your account</p>

        <div class="relative w-full mb-2">

          <input type="email" placeholder="Enter your email" 
          v-model="email"
          class="w-full pl-12 pr-6 py-3 border-2 border-[#3A1C61] text-gray-600 text-sm font-semibold focus:outline-none bg-transparent">

          <font-awesome-icon icon="fa-solid fa-user" class="text-[#3A1C61] text-xl absolute left-4 top-0 bottom-0 my-auto"/>

          <small v-if="userNotFoundError"
              class="text-xs font-semibold text-red-700 absolute left-0 -bottom-5">
                  Cannot find user with this email!
          </small>

        </div>

        <button
        @click="handleClick"
        :disabled="!email"
        class="w-full py-3 bg-[#3A1C61] text-white font-semibold text-base rounded-lg hover:bg-blue-900 text-bold"
        >
          <span v-if="!loading">Send email</span>
          <SharedButtonSpinner v-else/>
        </button>


      </div>



    </section>
</template>
