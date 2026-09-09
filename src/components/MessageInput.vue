<template>
    <div class="MessageInput">
        <div class="flex items-center gap-2 w-full">
            <input type="text" class="flex-1 h-10 px-4 text-sm rounded-md
             border border-gray-300 bg-gray-50
             placeholder:text-gray-400
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" :value="modelValue"
                placeholder="请输入内容..." @input="handleInput"  @keyup.enter="handleCreate" />
            <button class="inline-flex items-center justify-center gap-2
             h-10 px-4 text-sm font-medium text-white
             bg-blue-600 hover:bg-blue-700 active:bg-blue-800
             rounded-md shadow-sm transition-colors cursor-pointer" @click="handleCreate">
                <Icon icon="akar-icons:send" class="w-4 h-4" />
                发送
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps<{ modelValue?: string }>();
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'create'): void;
}>();

function handleInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
}

function handleCreate() {
    emit('create');
}

</script>

<style scoped lang="scss">
.MessageInput {
    width: 100%;
}
</style>