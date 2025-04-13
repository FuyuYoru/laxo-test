<script setup lang="ts">
import { reactive, ref, provide, readonly, onBeforeMount, inject } from 'vue'
import { signIn } from '@/shared/api/endpoints/signIn'
import { RouterView } from 'vue-router'

export interface AuthContextType {
  isAuthenticated: boolean
  sid: string | null
  error: string | null
  isReady: boolean
  login: (login: string, pass: string) => Promise<void>
  logout: () => void
}

const notify = inject<(message: string) => void>('notify')

const state = reactive({
  isAuthenticated: false,
  sid: null as string | null,
  error: null as string | null,
})

const isReady = ref(false)

const login = async (login: string, pass: string) => {
  try {
    const response = await signIn(login, pass)
    state.sid = response.sid
    localStorage.setItem('sid', response.sid)

    state.isAuthenticated = true
    state.error = null
  } catch (err) {
    state.error = err instanceof Error ? err.message : 'Неизвестная ошибка'
    notify?.('Ошибка авторизации')
    logout()
  } finally {
    isReady.value = true
  }
}

const logout = () => {
  state.isAuthenticated = false
  state.sid = null
  localStorage.removeItem('sid')
}

onBeforeMount(() => {
  const savedSid = localStorage.getItem('sid')
  if (savedSid) {
    state.sid = savedSid
    state.isAuthenticated = true
  }
  isReady.value = true
})

const authContext: AuthContextType = {
  get isAuthenticated() {
    return state.isAuthenticated
  },
  get sid() {
    return state.sid
  },
  get error() {
    return state.error
  },
  get isReady() {
    return isReady.value
  },
  login,
  logout,
}

provide('AuthContext', readonly(authContext))
</script>


<template>
  <router-view />
</template>
