import { ApiConfigs } from "@/shared/api/apiConfigs";
import { axiosInstance } from "@/shared/api/axiosInstance";
import type { DealStatus } from "../model/model";

export const getStatuses = async (sid: string): Promise<DealStatus[]> => {
  const response = await axiosInstance.post(
    "",
    ApiConfigs.getDealStatuses(sid)
  );
  if (response.data[0].code === 401) {
    throw new Error("Недействительный токен");
  }
  return response.data[0].response;
};
