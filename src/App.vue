<template>
    <div class="flex items-center justify-between h-screen">
        <div class="w-75 bg-gray-200 h-full border-r border-gray-300">
            <div class="overflow-y-auto h-[90%]">
                <ConversationList :items="items" />
            </div>
            <div class="h-[10%] grid grid-cols-2 gap-2 p-2">
                <!-- 蓝色实心按钮：新建聊天 -->
                <RouterLink to="/">
                    <button class="shadow-sm inline-flex items-center justify-center
    bg-blue-700   text-white   hover:bg-blue-700/90 border   border-blue-700
    h-[32px] py-[8px] px-[15px] text-sm rounded-[4px]">
                        <Icon icon="akar-icons:chat-bubble" class="mr-2" />
                        新建聊天
                    </button>
                </RouterLink>

                <RouterLink to="/settings">
                    <!-- 蓝色描边按钮：应用设置 -->
                    <button class="shadow-sm inline-flex items-center justify-center
    bg-blue-50   text-blue-700   hover:bg-blue-700 border   border-blue-700   hover:text-white
    h-[32px] py-[8px] px-[15px] text-sm rounded-[4px]">
                        <Icon icon="akar-icons:gear" class="mr-2" />
                        应用设置
                    </button>
                </RouterLink>

            </div>
        </div>
        <div class="h-full flex-1">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ConversationProps, ProviderProps } from './types';
import { Icon } from "@iconify/vue";
import ConversationList from './components/ConversationList.vue';

const items: ConversationProps[] = [
    {
        id: 1,
        title: '什么是光合作用',
        selectedModel: 'GPT-3.5-Turbo',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 1,
    },
    {
        id: 2,
        title: '帮我写一段 Python 爬虫代码',
        selectedModel: 'GPT-4o',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 2,
    },
    {
        id: 3,
        title: '解释一下 JS 闭包',
        selectedModel: 'DeepSeek-V3',
        createdAt: '2026-09-01 ',
        updatedAt: '2026-09-01',
        providerId: 3,
    },
    {
        id: 4,
        title: '推荐几本前端入门书籍',
        selectedModel: 'GPT-3.5-Turbo',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 1,
    },
    {
        id: 5,
        title: '什么是闭包和原型链的区别',
        selectedModel: 'GPT-4o',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 2,
    },
    {
        id: 6,
        title: '帮我规划一个学习路线',
        selectedModel: 'Claude-3.5',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 4,
    },
    {
        id: 7,
        title: '什么是光合作用',
        selectedModel: 'GPT-3.5-Turbo',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 1,
    },
    {
        id: 8,
        title: '帮我写一段 Python 爬虫代码',
        selectedModel: 'GPT-4o',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 2,
    },
    {
        id: 9,
        title: '解释一下 JS 闭包',
        selectedModel: 'DeepSeek-V3',
        createdAt: '2026-09-01 ',
        updatedAt: '2026-09-01',
        providerId: 3,
    },
    {
        id: 10,
        title: '推荐几本前端入门书籍',
        selectedModel: 'GPT-3.5-Turbo',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 1,
    },
    {
        id: 11,
        title: '什么是闭包和原型链的区别',
        selectedModel: 'GPT-4o',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 2,
    },
    {
        id: 12,
        title: '帮我规划一个学习路线',
        selectedModel: 'Claude-3.5',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 4,
    },
    {
        id: 13,
        title: '什么是光合作用',
        selectedModel: 'GPT-3.5-Turbo',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 1,
    },
    {
        id: 14,
        title: '帮我写一段 Python 爬虫代码',
        selectedModel: 'GPT-4o',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 2,
    },
    {
        id: 15,
        title: '解释一下 JS 闭包',
        selectedModel: 'DeepSeek-V3',
        createdAt: '2026-09-01 ',
        updatedAt: '2026-09-01',
        providerId: 3,
    },
    {
        id: 16,
        title: '推荐几本前端入门书籍',
        selectedModel: 'GPT-3.5-Turbo',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 1,
    },
    {
        id: 17,
        title: '什么是闭包和原型链的区别',
        selectedModel: 'GPT-4o',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 2,
    },
    {
        id: 18,
        title: '帮我规划一个学习路线',
        selectedModel: 'Claude-3.5',
        createdAt: '2026-09-01',
        updatedAt: '2026-09-01',
        providerId: 4,
    },
];


console.log("👋 This message is being logged by 'App.vue',included via Vite");
</script>

<style scoped></style>