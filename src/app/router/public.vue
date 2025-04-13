<script setup lang="ts">
import { inject, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import type { AuthContextType } from '../providers/AuthProvider/index.vue';

const router = useRouter();
const injected = inject<AuthContextType>('AuthContext');

watchEffect(() => {
    if (injected && injected.isAuthenticated === true) {
        router.push('/leads/')
    }
})
</script>

<template>
    <router-view />
</template>
