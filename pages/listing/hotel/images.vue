<script setup>

import { ref } from 'vue'

definePageMeta({
    layout: 'listing'
})

const router = useRouter()

const hotelId = useHotelId()

const image = ref(null)
const imageValue = ref('')
const preview = ref('')

const images = ref(null)
const previews = ref([])

const onChange = async (event) => {
    var input = event.target;
    if (input.files) {
        // var reader = new FileReader();
        // reader.onload = (e) => {
        //     preview.value = e.target.result;
        // }

        image.value = input.files[0];
        // reader.readAsDataURL(input.files[0]);

        let formData = new FormData()

        formData.append('cover_img', image.value)

        const hotel = await $fetch( `http://localhost:9000/api/hotel/coverphoto/${hotelId.value}`, {
            method: 'PATCH',
            body: formData
        } )

        console.log(hotel)

        preview.value = hotel.cover_image
        
    }
    
}

const onMultipleChange = async (event) => {
    var input = event.target;
    if (input.files) {

        images.value = input.files;

        console.log(images.value.length)

        for(let i = 0; i < images.value.length; i++){
            let formData = new FormData()
            formData.append('gallery_img', images.value[i])

            const path = await $fetch( `http://localhost:9000/api/hotel/gallery/${hotelId.value}`, {
                method: 'PATCH',
                body: formData
            } )

            console.log(path)
            previews.value.push(path)
        }
        
    }
    
}

const clear = () => {
    image.value = null
}

const clearGallery = (imglink) => {
    previews.value = previews.value.filter(path => {
        return path !== imglink
    })
}

const postNext = () => {
    router.push({ path: '/listing/hotel/policies'})
}

</script>


<template>
    <section class="md:container mx-auto px-10 py-16 flex flex-col gap-8 text-black font-montserrat">

        <h2 class="text-2xl font-semibold mb-6">
            List your property on Bloonsoo.com
        </h2>

        <ListingHotelTabs active_1 active_2 active_3 active_4/>

        <ListingFormCard label="Add Cover photo" >

            <div class="px-4 flex flex-col gap-6">

                <h4 class="text-sm font-semibold text-gray-600">
                    Add at least cover photo now. You can always add more later.
                </h4>

                <div class="w-full h-70vh border rounded-lg border-slate-500 border-dashed">

                    <div v-show="!image" class="w-full h-full py-24 flex flex-col items-center justify-between">

                        <div class="w-32 h-32">
                            <img src="@/assets/icons/image.png" class="w-full h-full object-contain" alt="">
                        </div>

                        <p class="text-base text-gray-400 text-center">
                            Upload your cover photo here 
                        </p>

                        <label for="cover-img" class="py-3 px-4 text-blue-500 text-sm font-semibold rounded-lg border border-blue-500 cursor-pointer">
                            <font-awesome-icon icon="fa-solid fa-camera" class="text-blue-500 text-base "/>
                            Upload photo
                        </label>

                        <input class="hidden" id="cover-img" type="file" @change="onChange" accept="image/*" ref="imageValue">

                    </div>

                    <div v-show="image" class="relative w-full h-full bg-slate-300">
                        <img :src="preview" loading="lazy" class="w-full h-full object-contain" alt="">

                        <button @click="clear" class="w-8 h-8 rounded-full bg-red-500 absolute top-2 right-2">
                            <font-awesome-icon icon="fa-solid fa-trash" class="text-white text-sm "/>
                        </button>
                    </div>

                </div>

            </div>

        </ListingFormCard>

        <ListingFormCard label="What does your place look like?" >

            <div class="px-4 flex flex-col gap-6">

                <h4 class="text-sm font-semibold text-gray-600">
                    Add at least 3 photos now. You can always add more later.
                </h4>

                <div class="w-full border rounded-lg border-slate-500 border-dashed">

                    <div v-show="!images" class="w-full h-full py-24 flex flex-col items-center gap-8">

                        <div class="w-32 h-32">
                            <img src="@/assets/icons/image.png" class="w-full h-full object-contain" alt="">
                        </div>

                        <p class="text-base text-gray-400 text-center">
                            Upload your gallery photos here 
                        </p>

                        <label for="gallery-img" class="py-3 px-4 text-blue-500 text-sm font-semibold rounded-lg border border-blue-500 cursor-pointer">
                            <font-awesome-icon icon="fa-solid fa-camera" class="text-blue-500 text-base "/>
                            Upload photo
                        </label>

                        <input class="hidden" id="gallery-img" type="file" multiple @change="onMultipleChange" accept="image/*">

                    </div>

                    <div v-show="images" class="w-full grid grid-cols-4 bg-slate-300">

                        <div v-for="(preview, index) in previews" :key="index" class="w-full aspect-square relative">
                            <img :src="preview" loading="lazy" class="w-full h-full object-cover" alt="">

                            <button @click="clearGallery(preview)" class="w-8 h-8 rounded-full bg-red-500 absolute top-2 right-2">
                                <font-awesome-icon icon="fa-solid fa-trash" class="text-white text-sm "/>
                            </button>
                        </div>

                        <div class="w-full aspect-square grid place-items-center">

                            <label for="gallery-img" class="py-3 px-4 text-blue-500 text-sm font-semibold rounded-lg border border-blue-500 cursor-pointer">
                                <font-awesome-icon icon="fa-solid fa-camera" class="text-blue-500 text-base "/>
                                Add more
                            </label>

                            <input class="hidden" id="gallery-img" type="file" multiple @change="onMultipleChange" accept="image/*">

                        </div>
                       
                        
                    </div>

                </div>

            </div>

            </ListingFormCard>

        <button @click="postNext" class="w-full py-4 bg-blue-700 text-white font-semibold text-base rounded-lg hover:bg-blue-900">
            Next
        </button>

    </section>
</template>