<template>
    <div class="ProviderSelect">
        <SelectRoot v-model="currentModel">
            <SelectTrigger class="flex w-full items-center justify-between 
            rounded-md py-1.5 px-3 shadow-sm border-gray-300 border outline-none data-[placeholder]:text-gray-500">
                <SelectValue placeholder="请选择模型" />
                <Icon icon="mdi:chevron-down" class="h-5 w-5" />
            </SelectTrigger>
            <SelectPortal>
                <SelectContent class="bg-white rounded-md shadow-md z-[100] border-gray-300 border">
                    <SelectViewport class="p-2">
                        <div v-for="provider in items">
                            <SelectLabel class="flex items-center px-6 h-7 text-gray-500">
                                <img :src="provider.avatar" :alt="provider.name" class="h-5 w-5 mr-2 rounded">
                                <span>{{ provider.name }}</span>
                            </SelectLabel>
                            <SelectGroup>
                                <SelectItem
                                    class="outline-none rounded flex items-center h-7 px-6 relative text-blue-400 cursor-pointer data-[highlighted]:bg-blue-700 data-[highlighted]:text-white"
                                    v-for="(model, index) in provider.models" :key="index" :value="`${provider.id}/${model}`">
                                    <SelectItemIndicator class="absolute left-2 w-6">
                                        <Icon icon="mdi:check" />
                                    </SelectItemIndicator>
                                    <SelectItemText>{{ model }}</SelectItemText>
                                </SelectItem>
                            </SelectGroup>
                            <SelectSeparator class="h-[1px] my-2 bg-gray-300" />
                        </div>
                    </SelectViewport>
                </SelectContent>
            </SelectPortal>
        </SelectRoot>
    </div>
</template>

<script setup lang="ts">
import { ProviderProps } from '../types';
import { Icon } from "@iconify/vue";
import {
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectItemIndicator,
    SelectItemText,
    SelectLabel,
    SelectPortal,
    SelectRoot,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
    SelectViewport,
} from 'radix-vue'
import { provide } from 'vue';

defineProps<{ items?: ProviderProps[] }>();
const currentModel = defineModel<string>()
</script>

<style scoped lang="scss">
.ProviderSelect {
    width: 100%;
}
</style>