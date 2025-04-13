import { defineStore } from "pinia";
import { ref } from "vue";
import type { Deal, DealStatus } from "./model";
import { getList } from "../api/getList";
import { getStatuses } from "../api/getStatuses";
import { updateStatus } from "../api/updateStatus";

export const useDeals = defineStore("DealsStore", () => {
  const deals = ref<Deal[]>([]);
  const dealStatuses = ref<DealStatus[]>([]);
  const isLoading = ref<boolean>(false);
  const isLoaded = ref<boolean>(false);
  const error = ref<string | null>(null);

  const fetchDeals = async (sid: string) => {
    isLoading.value = true;

    try {
      const data = await getList(sid);
      const statuses = await getStatuses(sid);
      deals.value = data;
      dealStatuses.value = statuses;
      isLoaded.value = true;
      isLoading.value = false;
    } catch (err) {
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const loadDeals = async (sid: string) => {
    if (isLoaded.value) return;
    await fetchDeals(sid);
  };

  const forceReload = async (sid: string) => {
    await fetchDeals(sid);
  };

  const changeStatus = async (
    sid: string,
    dealID: string,
    statusID: string
  ) => {
    const isUpdated = await updateStatus(sid, dealID, statusID);
    if (isUpdated) {
      const deal = deals.value.find((d) => d.order_id === dealID);
      if (deal) {
        deal.order_status_id = statusID;
      }
    }
  };

  return {
    deals,
    dealStatuses,
    isLoaded,
    isLoading,
    error,
    loadDeals,
    forceReload,
    changeStatus,
  };
});
