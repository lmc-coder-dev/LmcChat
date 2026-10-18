<template>
    <div class="MessageList">
        <div class="message-item mb-3" v-for="message in messages" :key="message.id">
            <div class="flex" :class="{ 'justify-end': message.type === 'question' }">
                <div>
                    <div class="text-sm text-gray-500 mb-2" :class="{ 'text-right': message.type === 'question' }">
                        {{  dayjs(message.createdAt).format('YYYY-MM-DD HH:mm:ss')}}
                    </div>
                    <div class="message-question bg-blue-700 text-white p-2 rounded-md"
                        v-if="message.type === 'question'">
                        {{ message.content }}
                    </div>
                    <div class="message-answer bg-gray-200 text-gray-700 p-2 rounded-md" v-else>
                        <template v-if="message.status === 'loading'">
                            <Icon icon="eos-icons:three-dots-loading"></Icon>
                        </template>
                        <template v-else>
                            {{ message.content }}
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MessageProps } from 'src/types';
import { Icon } from '@iconify/vue';
import dayjs from 'dayjs';

defineProps<{ messages: MessageProps[] }>();
</script>

<style scoped lang="scss">
.MessageList {
    width: 100%;
}
</style>