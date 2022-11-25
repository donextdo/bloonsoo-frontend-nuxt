<script setup>

    import { ref } from 'vue'

    defineProps({
        label: {
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
        // options: {
        //     type: [Array, Boolean],
        //     default: false
        // },
    })

    const code = ref(42)

    const options = ref([
        13, 23, 42, 33, 5, 56, 64
    ])

</script>

<template>
    <div class="flex flex-col gap-2 items-start">

        <label :class="error ? 'text-red-600' : 'text-gray-600' " v-if="label" class="text-sm font-semibold">{{ label }}</label>

        <div class="flex items-center w-full">

            <div class="w-28 h-max relative">

                <select
                id="dropdown"
                v-model="code"
                :class="error ? 'border-red-600' : 'border-slate-400'" 
                class="w-full px-6 py-2 border border-r-0 bg-white border-slate-400 text-gray-600 text-sm font-semibold focus:outline-none appearance-none"
                >

                    <option v-if="options" 
                    v-for="(option, index) in options" :key="index"
                    :value="option" 
                    class="text-sm font-semibold text-gray-500 appearance-none">
                        {{ option }}
                    </option>

                </select>

                <font-awesome-icon icon="fa-solid fa-caret-down" class="text-gray-600 text-lg absolute right-4 top-0 bottom-0 my-auto cursor-pointer pointer-events-none"/>

            </div>

            <input
            type="text"
            :value="modelValue"
            @input="$emit('update:modelValue', `${code} ${$event.target.value}`)"
            :class="error ? 'border-red-600' : 'border-slate-400'" 
            class="w-full px-6 py-2 border border-slate-400 text-gray-600 text-sm font-semibold focus:outline-none appearance-none"
            v-bind="$attrs"
            />

        </div>

        <small v-if="error" class="text-xs text-red-600">
            {{ errorMessage }}
        </small>

    </div>
</template>