<template>
    <div class="flex items-center justify-between h-screen">
        <div class="w-75 bg-gray-200 h-full border-r border-gray-300">
            <div class="overflow-y-auto h-[90%]">
                <ConversationList :items="conversations" />
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
import { ConversationProps } from './types';
import { Icon } from "@iconify/vue";
import ConversationList from './components/ConversationList.vue';
import { onMounted, ref } from 'vue';
import { db ,initProviders} from './db';

const conversations = ref<ConversationProps[]>([])

onMounted( async ()=>{
  await initProviders()
  conversations.value = await db.conversations.toArray()
  console.log("👋 This message is being logged by 'App.vue',included via Vite");
})
</script>

<style scoped></style>