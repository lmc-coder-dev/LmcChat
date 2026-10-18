<template>
    <div class="Conversation">
        <div class="h-[10%] bg-gray-200 border-b border-gray-300 flex items-center px-3 justify-between">
            <h3 class="font-semibold text-gray-900">
                {{ filteredConversationMessage?.title ?? '加载中...' }}
            </h3>
            <span class="text-sm text-gray-500">{{ dayjs(filteredConversationMessage?.updatedAt).format('YYYY-MM-DD HH:mm:ss')}}</span>
        </div>
        <div class="pt-2 w-[80%] mx-auto h-[75%] overflow-y-auto">
            <MessageList :messages="filteredMessages" />
        </div>
        <div class="w-[80%] mx-auto h-[15%] flex items-center">
            <MessageInput />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { MessageProps, ConversationProps } from '../types'
import MessageInput from '../components/MessageInput.vue';
import MessageList from '../components/MessageList.vue';
import { useRoute } from 'vue-router';
import { db } from '../db';
import dayjs from 'dayjs';

const route = useRoute()

const ConversationId = computed(() => Number(route.params.id))

const initMessageId = computed(()=>Number(route.query.init))

const creatingInitialMessage = async () => {
    const createData: Omit<MessageProps, 'id'> = {
        content: "",
        conversationId:ConversationId.value,
        type: "answer",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: "loading"
    }
    const newMessageId = await db.messages.add(createData)
    filteredMessages.value.push({...createData,id:newMessageId})
}

const filteredMessages = ref<MessageProps[]>([])

const filteredConversationMessage = ref<ConversationProps>()

watch(()=>ConversationId.value,async ()=>{
  filteredConversationMessage.value = await db.conversations.where({id:ConversationId.value}).first()
  filteredMessages.value = await db.messages.where({conversationId:ConversationId.value}).toArray()
})

onMounted( async ()=>{
   filteredConversationMessage.value = await db.conversations.where({id:ConversationId.value}).first()
   filteredMessages.value = await db.messages.where({conversationId:ConversationId.value}).toArray()
   if(initMessageId.value){
    creatingInitialMessage()
  }
})
</script>


<style scoped lang="scss">
.Conversation {
    width: 100%;
    height: 100%;
}
</style>