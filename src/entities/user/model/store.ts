import { defineStore } from "pinia";
import { ref } from "vue";
import type { IUser } from "./model";
import { getList } from "../api/getList";

export const useUsers = defineStore("usersStore", () => {
  const users = ref<IUser[]>([]);
  const isLoaded = ref<boolean>(false);

  const fetchUsers = async (sid: string) => {
    if (isLoaded.value === true) return;
    try {
      const data = await getList(sid);
      users.value = data;
    } catch (err) {
      throw "Ошибка при загрузке пользователей";
    }
  };

  return { users, isLoaded, fetchUsers };
});
