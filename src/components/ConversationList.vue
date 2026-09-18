<template>
    <div class="ConversationList">
        <div  class="item border-gray-300 border-t cursor-pointer bg-white hover:bg-gray-200 p-2" v-for="item in items"
            :key="item.id">
             <div @click="goToMessageList(item.id)">
                <div class="flex justify-between items-center text-sm leading-5 text-gray-500">
                    <span>{{ item.selectedModel }}</span>
                    <span>{{ item.updatedAt }}</span>
                </div>
                <h2 class="font-semibold loading-6 text-gray-900 truncate">{{ item.title }}</h2>
             </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ConversationProps } from '../types';
defineProps<{ items: ConversationProps[] }>();
import { useRouter } from 'vue-router';

const router = useRouter()

const goToMessageList = (id:number) => {
  router.push({path:`/conversation/${id}`,query: {name: 'viking'},hash: '#foo'})
}
</script>

<style scoped lang="scss">
.ConversationList {
    width: 100%;
}
</style>