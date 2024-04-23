import type { IReturnData, IBaseResponse } from "@/types/response/base/IBaseResponse";
import axios from "axios";

const apiPutClient = async <T>(url: string, data?: any, token?: string): Promise<IReturnData<T>> => {
  const returnData: IReturnData<T> = { error: false, data: null, pagination: null };
  try {
    const result = await axios
      .create({
        headers: {
          // Authorization: token ? "Bearer " + token : "Bearer " + userStore.getState().access_token,
        },
      })
      .put<IBaseResponse<T>>(url, data);
    if (result.status === 200) {
      returnData.error = false;
      returnData.data = result.data.data;
    }
  } catch (error) {
    console.error(error);
  }
  return returnData;
};

export default apiPutClient;
