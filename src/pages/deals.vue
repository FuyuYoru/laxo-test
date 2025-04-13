<script setup lang="ts">
import { inject, onMounted } from 'vue';
import type { AuthContextType } from '@/app/providers/AuthProvider/index.vue';
import { useDeals } from '@/entities/deal/model/store';
import DealsKanban from '@/features/deals-kanban/ui/DealsKanban.vue';

const injected = inject<AuthContextType>('AuthContext');
const dealsStore = useDeals();

const notify = inject<(message: string) => void>('notify');

onMounted(async () => {
    try {
        await dealsStore.loadDeals(injected?.sid);
    } catch (err) {
        notify?.(err.message || 'Ошибка получения данных');
    }
});

const reloadDeals = async () => {
    try {
        await dealsStore.loadDeals(injected?.sid);
    } catch (err) {
        notify?.(err.message || 'Ошибка получения данных');
    }
}
</script>

<template>
    <div class="w-full h-full px-2 py-4 flex flex-col overflow-y-hidden">
        <div class="flex flex-row w-full overflow-hidden">
            <button @click="reloadDeals">Обновить</button>
        </div>
        <DealsKanban :statuses="dealsStore.dealStatuses" :deals="dealsStore.deals">
        </DealsKanban>
    </div>
</template>