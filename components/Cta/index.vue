<script setup>

defineProps({
    content: Object,
    noCard: Boolean
})

</script>


<template>
    
    <section class="relative w-full h-70vh">

        <slot name="image"></slot>


        <CtaCard v-if="!noCard" :content="content">
            <slot name="button"></slot>
        </CtaCard>

    </section>

</template>