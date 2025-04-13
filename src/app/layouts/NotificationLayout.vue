<script setup lang="ts">
import { reactive, provide } from 'vue';

type Notification = {
    id: number;
    message: string;
};

const notifications = reactive<Notification[]>([]);
let idCounter = 0;

function notify(message: string) {
    const id = ++idCounter;
    notifications.push({ id, message });

    setTimeout(() => {
        const index = notifications.findIndex((n) => n.id === id);
        if (index !== -1) notifications.splice(index, 1);
    }, 2000);
}

// Provide notify to children
provide('notify', notify);
</script>

<template>
    <div class="relative w-full h-full">
        <slot />

        <div class="fixed top-4 right-4 z-50 space-y-2">
            <transition-group name="fade" tag="div">
                <div v-for="n in notifications" :key="n.id"
                    class="bg-black text-white text-sm px-4 py-2 rounded shadow-lg">
                    {{ n.message }}
                </div>
            </transition-group>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
