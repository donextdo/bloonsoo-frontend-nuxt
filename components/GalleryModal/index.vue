<script setup>

const emits = defineEmits(['onClose'])

defineProps({
    images: {
        type: Array,
        default: []
    }
})

const handleClose = () => {
    emits('onClose')
}


</script>

<template>
  
    <div class="fixed inset-0 bg-black bg-opacity-40 grid place-items-center z-40 overflow-hidden">

        <div class="w-[70vw] h-max bg-white rounded-lg relative shadow-md overflow-hidden">
            <GalleryModalSwiper :images="images"/>
        </div>

        <button @click="handleClose" class="fixed left-10 top-10 w-6 h-6 z-50">
            <font-awesome-icon icon="fa-solid fa-times" class="text-white text-3xl"/>
        </button>

    </div>

</template>