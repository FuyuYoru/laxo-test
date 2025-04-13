<script setup lang="ts">
import { inject, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import type { AuthContextType } from '../providers/AuthProvider/index.vue'
import MainLayout from '../layouts/MainLayout.vue'

const router = useRouter()
const authContext = inject<AuthContextType>('AuthContext')

watchEffect(() => {
    if (authContext && authContext.isAuthenticated === false) {
        router.push('/auth/signIn')
    }
})
</script>

<template>
    <MainLayout>
        <router-view />
    </MainLayout>
</template>
