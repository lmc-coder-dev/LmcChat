<template>
    <div class="Button">
        <button class="lmc-button 
        shadow-sm inline-flex items-center justify-center" :class="[colorClasses]">
            <slot></slot>
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

export type ButtonColor = 'blue' | 'purple' | 'green'
export type ButtonSize = 'large' | 'small'

export interface ButtonProps {
    color?: ButtonColor;
    size?: ButtonSize;
    plain?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

defineOptions({
    name: 'LmcButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
    color: 'blue',
})

const colorVariants = ref<Record<ButtonColor, any>>(
    {
        'blue': {
            plain: 'bg-blue-50   text-blue-700   hover:bg-blue-700 border   border-blue-700 hover:text-white',
            normal: 'bg-blue-700   text-white   hover:bg-blue-700/90 border   border-blue-700',
        },
        'green': {
            plain: 'bg-green-50   text-green-700   hover:bg-green-700 border   border-green-700 hover:text-white',
            normal: 'bg-green-700   text-white   hover:bg-green-700/90 border   border-green-700',
        },
        'purple': {
            plain: 'bg-purple-50   text-purple-700   hover:bg-purple-700 border   border-purple-700 hover:text-white',
            normal: 'bg-purple-700   text-white   hover:bg-purple-700/90 border   border-purple-700',
        }
    }
)

const colorClasses = computed(() => {
    if (props.plain) {
        return colorVariants.value[props.color].plain
    } else {
        return colorVariants.value[props.color].normal
    }
})

</script>

<style scoped lang="scss">
.Button {
    width: 100%;
}
</style>