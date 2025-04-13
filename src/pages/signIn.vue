<script setup lang="ts">
import type { AuthContextType } from '@/app/providers/AuthProvider/index.vue';
import { inject, ref } from 'vue';

const authContext = inject<AuthContextType>('AuthContext');

const login = ref<string>('');
const password = ref<string>('');

const isLoading = ref<boolean>(false);

const handleLogin = async () => {
    isLoading.value = true
    if (authContext?.login) {
        await authContext.login(login.value, password.value);
        isLoading.value = false
    }
};
</script>

<template>
    <div class="h-screen w-screen flex items-center justify-center bg-gray-100">
        <form class="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4" @submit.prevent="handleLogin">
            <h1 class="text-xl font-semibold text-center">Laxo.One</h1>

            <input type="text" placeholder="Логин" v-model="login"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f85050]" />

            <input type="password" placeholder="Пароль" v-model="password"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f85050]" />

            <button type="submit" :disabled="isLoading"
                class="w-full bg-[#f85050] text-white py-2 px-4 rounded-lg transition hover:bg-[#e72f2f] disabled:opacity-60 disabled:cursor-not-allowed">
                {{ isLoading ? 'Вход...' : 'Войти' }}
            </button>
        </form>
    </div>
</template>
