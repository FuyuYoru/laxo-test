<script setup lang="ts">
import { useUsers } from '@/entities/user/model/store'
import { computed } from 'vue'

interface Props {
    id: string
    title: string
    creatorId: string
    executorId: string
    cost: string
    createdAt: string
    onDragStart: (dealID: string) => void;
    onDragEnd: () => void;
}

const props = defineProps<Props>()

const formattedDate = computed(() => {
    const date = new Date(Number(props.createdAt) * 1000)
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
})

const executor = computed(() =>
    useUsers().users.find(user => user.user_id === props.executorId)
);

const creator = computed(() =>
    useUsers().users.find(user => user.user_id === props.creatorId)
);

</script>

<template>
    <div class="rounded-xl bg-[#edf1f5] p-4 text-[#1f1f1f] shadow-sm flex flex-col gap-2 w-full max-w-md"
        :draggable="true" v-on:dragstart="() => onDragStart(props.id)" v-on:dragend="onDragEnd">
        <div class="flex flex-col lg:flex-row justify-between items-start text-sm text-[#9A9A9A]">
            <div class="flex flex-col items-start gap-1">
                <span>Пост.: {{ creator?.contact_name }}</span>
                <span>Исп.: {{ executor?.contact_name }}</span>
            </div>
            <div>{{ formattedDate }}</div>
        </div>

        <div class="font-semibold line-clamp-2 break-words">
            {{ props.title }}
        </div>

        <div class="flex flex-col lg:flex-row justify-between items-center text-sm text-[#9A9A9A]">
            <div class="flex flex-col lg:flex-row items-center gap-1">
                <span>Комментарии:</span>
                <span> 0</span>
            </div>
            <div class="text-[#00C48C] font-semibold">
                {{ props.cost }} RUB
            </div>
        </div>
    </div>
</template>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
