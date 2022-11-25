<script setup>

    import { ref } from 'vue'

    defineProps({
        title: {
            type: [String, Boolean],
            default: false,
        },
        modelValue: {
            type: String,
            default: "",
        },
        error: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String
        },
        vertical: {
            type: Boolean,
            default: false
        },
        options: {
            type: Array
        }
    })
</script>

<template>
    <div class="flex flex-col gap-2 items-start">
        <h4 :class="error ? 'text-red-600' : 'text-gray-600' " v-if="title" class="text-sm font-semibold">{{ title }}</h4>

        <div :class="vertical ? 'flex-col': 'flex-row'" class="flex gap-6">

            <div 
            v-for="(option, index) in options" :key="index"
            class="flex gap-2 items-center">
                <input
                type="radio"
                :id="option.data"
                name="radiobtn"
                :value="option.data"
                @input="$emit('update:modelValue', $event.target.value)"
                class="w-4 h-4 cursor-pointer"
                /> 

                <label :for="option.data" class="text-gray-600 text-sm h-max w-max font-semibold"> {{ option.label }}</label>
            </div>
            
        </div>

        

        <small v-if="error" class="text-xs text-red-600">
            {{ errorMessage }}
        </small>

    </div>
</template>