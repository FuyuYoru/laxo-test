import { ApiConfigs } from "@/shared/api/apiConfigs";
import { axiosInstance } from "@/shared/api/axiosInstance";
import type { Deal } from "../model/model";

export const getList = async (
  sid: string,
  filter: [] = []
): Promise<Deal[]> => {
  const response = await axiosInstance.post(
    "",
    ApiConfigs.getDeals(sid, filter)
  );
  if (response.data[0].code === 401) {
    throw new Error("Недействительный токен");
  }
  return response.data[0].response;
};
