<script setup>

defineProps({
    content: Object
})

</script>


<template>
    
    <section class="relative w-full h-70vh">

        <slot name="image"></slot>


        <CtaCard :content="content">
            <slot name="button"></slot>
        </CtaCard>

    </section>

</template>