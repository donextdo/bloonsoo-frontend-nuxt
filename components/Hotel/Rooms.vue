<script setup>
const props = defineProps({
    dto: {
        type: Object
    }
})

const emits = defineEmits(['onClick'])

const handleClick = () => {
    emits('onClick', 
        props.dto._id
    )
}

</script>

<template>
    
    <div class="bg-white shadow-md w-full grid md:grid-cols-5 mb-10 ">

        <div class="w-full col-span-3 h-full p-6 flex flex-col">



        </div>
    </div>

</template>