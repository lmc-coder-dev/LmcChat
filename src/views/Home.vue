<template>
    <div class="Home">
        <div class="w-[80%] mx-auto h-full">
            <div class="flex items-center h-[85%]">
                <ProviderSelect :items="providers" v-model:currentModel="currentProvider" />
            </div>
            <div class="flex items-center h-[15%]">
                <MessageInput v-model:model-value="inputText" @create="handleCreate" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import ProviderSelect from '../components/ProviderSelect.vue';
import MessageInput from '../components/MessageInput.vue';
import { ProviderProps } from '../types';
import { db } from '../db';
import { useRouter } from 'vue-router'

const router = useRouter()

const currentProvider = ref('')

const inputText = ref('');

function handleCreate() {
    if (!inputText.value.trim()) return;
    createConversation(inputText.value)
    inputText.value = '';
}

const modelInfo = computed(() => {
    const [providerId, selectedModel] = currentProvider.value.split('/')
    return {
        providerId: parseInt(providerId),
        selectedModel
    }
})

const providers = ref<ProviderProps[]>([])

const createConversation = async (question: string) => {
    console.log('用户输入的问题是：', question);
    if (!currentProvider.value) {
        console.warn('请先选择模型')
        return
    }
    const { providerId, selectedModel } = modelInfo.value;
    const currentDate = new Date().toISOString()
    const conversationId = await db.conversations.add({
        title: question,
        selectedModel,
        providerId,
        createdAt: currentDate,
        updatedAt: currentDate,
    })
    const newMessageId = await db.messages.add({
        content: question,
        type: 'question',
        conversationId,
        status: 'finished',
        createdAt: currentDate,
        updatedAt: currentDate,
    })
    router.push(`/conversation/${conversationId}?init=${newMessageId}`)
}

onMounted(async () => {
    providers.value = await db.providers.toArray()
})
</script>

<style scoped lang="scss">
.Home {
    width: 100%;
    height: 100%;

}
</style>