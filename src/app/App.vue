<script setup lang="ts">
// import { signIn } from "../shared/api/endpoints/signIn";
import AuthProvider from "@/app/providers/AuthProvider/index.vue";
import NotificationLayout from "./layouts/NotificationLayout.vue";
// const fetch = async () => {
//   const resp = await signIn('vvelichko.2000@mail.ru', '3pCEGpxBn47');
//   console.log(resp)
// }
</script>

<template>
  <NotificationLayout>
    <AuthProvider>
      <router-view></router-view>
    </AuthProvider>
  </NotificationLayout>
</template>
