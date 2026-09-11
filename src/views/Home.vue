<template>
  <div class="Home">
      <div class="w-[80%] mx-auto h-full">
                <div class="flex items-center h-[85%]">
                   <ProviderSelect :items="modelItems" v-model="selectedModel"/>
                </div>
                <div class="flex items-center h-[15%]">
                   <MessageInput v-model="inputText" @create="handleCreate" />
                </div>
            </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProviderSelect from '../components/ProviderSelect.vue';
import MessageInput from '../components/MessageInput.vue';
import {  ProviderProps} from '../types';

const selectedModel = ref()
const inputText = ref('');
function handleCreate() {
  if (!inputText.value.trim()) return;   // 空内容不发送
  console.log('发送：', inputText.value);
  inputText.value = '';                  // 发送后清空，放在父组件处理更干净
}
const modelItems: ProviderProps[] = [
    {
        id: 1,
        name: '文心一言',
        desc: '文心一言 百度出品的大模型',
        models: ['ERNIE-4.0-8K', 'ERNIE-3.5-8K', 'ERNIE-Speed-8K'],
        avatar: 'https://pic.hartlive.com/default_head.png',
        createdAt: '2024-07-03',
        updatedAt: '2024-07-03',
    },
    {
        id: 2,
        name: '通义千问',
        desc: '通义千问 阿里巴巴出品的大模型',
        models: ['qwen-plus', 'qwen-turbo', 'qwen-max'],
        avatar: 'https://pic.hartlive.com/default_head.png',
        createdAt: '2024-07-03',
        updatedAt: '2024-07-03',
    },
    {
        id: 3,
        name: '智谱清言',
        desc: '智谱清言 出品的大模型',
        models: ['GLM-4.0', 'GLM-4-Long', 'GLM-4-Flash'],
        avatar: 'https://pic.hartlive.com/default_head.png',
        createdAt: '2024-07-03',
        updatedAt: '2024-07-03',
    },
    {
        id: 4,
        name: 'DeepSeek',
        desc: 'DeepSeek 深度求索出品的大模型',
        models: ['DeepSeek-V3', 'DeepSeek-R1', 'DeepSeek-V2'],
        avatar: 'https://pic.hartlive.com/default_head.png',
        createdAt: '2024-07-03',
        updatedAt: '2024-07-03',
    },
    {
        id: 5,
        name: 'Kimi',
        desc: 'Kimi 月之暗面出品的大模型',
        models: ['kimi-k2', 'moonshot-v1-32k', 'moonshot-v1-128k'],
        avatar: 'https://pic.hartlive.com/default_head.png',
        createdAt: '2024-07-03',
        updatedAt: '2024-07-03',
    },
    {
        id: 6,
        name: '讯飞星火',
        desc: '讯飞星火 科大讯飞出品的大模型',
        models: ['Spark-4.0-Ultra', 'Spark-3.5-Max', 'Spark-Lite'],
        avatar: 'https://pic.hartlive.com/default_head.png',
        createdAt: '2024-07-03',
        updatedAt: '2024-07-03',
    },
];
</script>

<style scoped lang="scss">
.Home {
  width: 100%;
  height: 100%;
  
}
</style>