import { ApiConfigs } from "@/shared/api/apiConfigs";
import { axiosInstance } from "@/shared/api/axiosInstance";
import type { IUser } from "../model/model";

export const getList = async (sid: string): Promise<IUser[]> => {
  const response = await axiosInstance.post("", ApiConfigs.getUsers(sid));
  console.log(response);
  return response.data[0].response;
};
