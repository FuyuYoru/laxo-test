<script setup lang="ts">
interface Props {
    id: string,
    title: string,
    color: string,
    summCost: number,
}

const props = defineProps<Props>();
</script>
<template>
    <div class="w-full border-b-[1px] flex flex-col lg:flex-row lg:justify-between lg:items-end"
        :style="{ borderBottomColor: props.color }">
        <span class="text-xl">{{ props.title }}</span>
        <span class="text-[#9299A2] text-sm">{{ props.summCost }} Рублей</span>
    </div>
</template>