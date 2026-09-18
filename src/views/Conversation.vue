<template>
    <div class="Conversation">
        <div class="h-[10%] bg-gray-200 border-b border-gray-300 flex items-center px-3 justify-between">
            <h3 class="font-semibold text-gray-900">{{ filteredConversationMessage.title }}</h3>
            <span class="text-sm text-gray-500">{{ filteredConversationMessage.updatedAt }}</span>
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
import { computed } from 'vue'
import { MessageProps, ConversationProps } from '../types'
import MessageInput from '../components/MessageInput.vue';
import MessageList from '../components/MessageList.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const ConversationId = computed(() => Number(route.params.id))

const messages: MessageProps[] = [
    { id: 1, content: '什么是光合作用？', type: 'question', conversationId: 1, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 2, content: '光合作用是植物利用阳光、水和二氧化碳合成有机物并释放氧气的过程。', type: 'answer', conversationId: 1, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 3, content: '请告诉我更多', type: 'question', conversationId: 1, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 4, content: '主要发生在叶绿体中，分为光反应和暗反应两个阶段。', type: 'answer', conversationId: 1, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 5, content: '还有更多的信息吗', type: 'question', conversationId: 2, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 6, content: ' ', type: 'answer', conversationId: 2, status: 'loading', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 7, content: '光反应和暗反应有什么区别？', type: 'question', conversationId: 2, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 8, content: '光反应需要光照，在类囊体薄膜上进行，产生 ATP 和 NADPH；暗反应不需要光，在叶绿体基质中进行，利用它们固定二氧化碳。', type: 'answer', conversationId: 2, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 9, content: '影响光合作用的因素有哪些？', type: 'question', conversationId: 2, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 10, content: '主要有光照强度、二氧化碳浓度、温度和水分等，它们都会直接影响光合作用的速率。', type: 'answer', conversationId: 2, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 11, content: '那呼吸作用呢？', type: 'question', conversationId: 3, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 12, content: '呼吸作用是细胞分解有机物并释放能量的过程，与光合作用相反，它在有光和无光条件下都能进行。', type: 'answer', conversationId: 3, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 13, content: '两者之间有什么联系？', type: 'question', conversationId: 3, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 14, content: '光合作用为呼吸作用提供有机物和氧气，呼吸作用则为光合作用提供二氧化碳和水，二者相互依存。', type: 'answer', conversationId: 3, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 15, content: '最后帮我总结一下吧', type: 'question', conversationId: 4, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 16, content: '光合作用与呼吸作用是植物能量代谢的两大核心过程，共同维持着生态系统的物质循环与能量流动。', type: 'answer', conversationId: 4, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 17, content: '讲得很清楚，谢谢！', type: 'question', conversationId: 4, status: 'finished', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
    { id: 18, content: '不客气，如果还有其他问题随时问我。', type: 'answer', conversationId: 4, status: 'streaming', createdAt: '2024-07-03', updatedAt: '2024-07-03' },
]
const Conversation: ConversationProps[] = [
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

const filteredMessages = computed(() =>
    messages.filter(message => message.conversationId === ConversationId.value)
)
const filteredConversationMessage = computed(() => 
    Conversation.find(item => item.id === ConversationId.value)
)
</script>


<style scoped lang="scss">
.Conversation {
    width: 100%;
    height: 100%;
}
</style>