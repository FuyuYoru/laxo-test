import { ApiConfigs } from "@/shared/api/apiConfigs";
import { axiosInstance } from "@/shared/api/axiosInstance";

export const updateStatus = async (
  sid: string,
  dealID: string,
  statusID: string
): Promise<any> => {
  const response = await axiosInstance.post(
    "",
    ApiConfigs.patchDealStatus(sid, dealID, statusID)
  );
  return response.data[0].code === 200 ? true : false;
};
