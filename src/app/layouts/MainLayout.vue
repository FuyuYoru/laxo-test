<script setup lang="ts">
import { inject } from 'vue';
import type { AuthContextType } from '../providers/AuthProvider/index.vue';


const authContext = inject<AuthContextType>("AuthContext");
</script>
<template>
    <div class="grid h-full w-full grid-rows-[auto_1fr] overflow-hidden">
        <div class="w-full sticky top-0 border-b-[1px] border-b-black bg-[#edf1f5]">
            <div class="w-full px-4 py-4 flex flex-row justify-between">
                <div>
                    Laxo.one
                </div>
                <div>
                    <button @click="() => authContext?.logout()">
                        Выйти
                    </button>
                </div>
            </div>
        </div>
        <main class="grid grid-cols-1 lg:grid-cols-[1fr_4fr_1fr] bg-[#edf1f5] overflow-y-hidden">
            <!-- <div></div> -->
            <div class="col-start-2 bg-[#FFFFFF] h-full overflow-y-hidden">
                <slot></slot>
            </div>
            <!-- <div></div> -->
        </main>
        <!-- <div></div> -->
    </div>
</template>