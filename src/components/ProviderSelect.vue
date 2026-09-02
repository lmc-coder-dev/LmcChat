<template>
    <div class="ProviderSelect">
        <SelectRoot>
            <SelectTrigger>
                <SelectValue placeholder="请选择模型" />
            </SelectTrigger>
            <SelectPortal>
                <SelectContent>
                    <SelectViewport>
                        <div v-for="provider in items">
                            <SelectLabel>
                                <img :src="provider.avatar" :alt="provider.name">
                                <span>{{ provider.name }}</span>
                            </SelectLabel>
                            <SelectGroup>
                                <SelectItem v-for="(model, index) in provider.models" :key="index" :value="model">
                                    <SelectItemText>{{ model }}</SelectItemText>
                                </SelectItem>
                            </SelectGroup>
                        </div>
                    </SelectViewport>
                </SelectContent>
            </SelectPortal>
        </SelectRoot>
    </div>
</template>

<script setup lang="ts">
import { ProviderProps } from '../types';
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

defineProps<{ items?: ProviderProps[] }>();
</script>

<style scoped lang="scss">
.ProviderSelect {
    width: 100%;
}
</style>