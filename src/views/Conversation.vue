<template>
  <div class="Conversation">
       <div class="pt-2 w-[80%] mx-auto h-[85%] overflow-y-auto">
        <MessageList :messages="messages" />
       </div>
       <div class="w-[80%] mx-auto h-[15%] flex items-center">
        <MessageInput />
       </div>
  </div>
</template>

<script lang="ts" setup>
import { MessageProps } from '../types'
import MessageInput from '../components/MessageInput.vue';
import MessageList from '../components/MessageList.vue';

const messages: MessageProps[] = [
  { id: 1, content: '什么是光合作用？', type: 'question', conversationId: 1, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
  { id: 2, content: '光合作用是植物利用阳光、水和二氧化碳合成有机物并释放氧气的过程。', type: 'answer', conversationId: 1, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
  { id: 3, content: '请告诉我更多', type: 'question', conversationId: 1, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
  { id: 4, content: '主要发生在叶绿体中，分为光反应和暗反应两个阶段。', type: 'answer', conversationId: 1, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
  { id: 5, content: '还有更多的信息吗', type: 'question', conversationId: 1, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
  { id: 6, content: ' ', type: 'answer', conversationId: 1, status: 'loading', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
]
</script>


<style scoped lang="scss">
.Conversation {
  width: 100%;
  height: 100%;
}
</style>