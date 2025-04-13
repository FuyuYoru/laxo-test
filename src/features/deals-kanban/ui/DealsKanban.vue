<script setup lang="tsx">
import type { AuthContextType } from '@/app/providers/AuthProvider/index.vue';
import type { Deal, DealStatus } from '@/entities/deal/model/model';
import { useDeals } from '@/entities/deal/model/store';
import { computed, inject, onMounted, ref } from 'vue';
import StageHeader from './StageHeader.vue';
import Card from '@/entities/deal/ui/Card.vue';
import { useUsers } from '@/entities/user/model/store';

interface Props {
    statuses: DealStatus[],
    deals: Deal[],
}

const props = defineProps<Props>();

const dealsStore = useDeals();
const users = useUsers();

const injected = inject<AuthContextType>('AuthContext');

onMounted(async () => {
    if (injected?.sid) {
        await users.fetchUsers(injected?.sid);
    }
});

const draggedDealID = ref<string | null>(null);
const dragoverStatusID = ref<string | null>(null);
const highlightedColumn = ref<string | null>(null);

const onDragStart = (dealID: string) => {
    draggedDealID.value = dealID;
    console.log(draggedDealID.value)
}

const onDragOver = (statusID: string) => {
    if (draggedDealID.value !== null) {
        dragoverStatusID.value = statusID
        highlightedColumn.value = statusID
        console.log(dragoverStatusID.value)
    }
}

const onDragEnd = async () => {
    if (draggedDealID.value !== null && dragoverStatusID.value !== null) {
        await dealsStore.changeStatus(injected?.sid, draggedDealID.value, dragoverStatusID.value)
    }
    draggedDealID.value = null
    dragoverStatusID.value = null
    highlightedColumn.value = null
}

const columns = computed(() => {
    return props.statuses.map(({ order_status_id, order_status_name, order_status_style }) => {
        const filteredDeals = props.deals.filter(d => d.order_status_id === order_status_id);
        let cost: number = 0;
        filteredDeals.map(deal => cost += Number(deal.order_sum))
        return {
            id: order_status_id,
            title: order_status_name,
            color: `#${order_status_style}`,
            deals: filteredDeals,
            summCost: cost
        }
    })
})


</script>
<template>
    <div class="w-full h-full flex flex-col gap-4 overflow-hidden">
        <div class="grid gap-2" :style="{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }">
            <StageHeader v-for="column in columns" :key="column.id" :id="column.id" :title="column.title"
                :summ-cost="column.summCost" :color="column.color" />
        </div>

        <div class="grid flex-1 gap-2 overflow-hidden"
            :style="{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }">
            <div v-for="column in columns" :key="column.id" class="flex h-full w-full flex-col overflow-hidden">
                <div class="flex h-full w-full flex-col gap-4 overflow-y-auto border-l border-dashed border-[#707070] p-2"
                    :ondragover="() => onDragOver(column.id)"
                    :class="{ 'bg-[#eef0f3] transition-colors': highlightedColumn === column.id }">

                    <Card v-for="deal in column.deals" :key="deal.order_id" :id="deal.order_id" :cost="deal.order_sum"
                        :created-at="deal.order_create_date" :creator-id="deal.order_user_creator"
                        :executor-id="deal.order_user_worker" :title="deal.order_name" v-on:drag-start="onDragStart"
                        v-on:drag-end="onDragEnd" />
                </div>
            </div>
        </div>
    </div>

</template>