import type { IReturnData } from "@/types/response/base/IBaseResponse";
import axios from "axios";
// import userStore from "stores/user";
// import { IReturnData } from "types/response/base/IBaseResponse";

const apiGetParamClient = async <T>(url: string, params?: object, token?: string): Promise<IReturnData<T>> => {
  const returnData: IReturnData<T> = { error: false, data: null, pagination: null };
  try {
    const result = await axios.get<IReturnData<T>>(url, {
      headers: {
        // Authorization: token ? "Bearer " + token : "Bearer " + userStore.getState().access_token,
      },
      params: params,
    });
    if (result.status === 200) {
      returnData.error = false;
      returnData.data = result.data.data;
      returnData.pagination = result.data.pagination;
    }
  } catch (error) {
    console.error(error);
    returnData.error = true;
  }

  return returnData;
};

export default apiGetParamClient;
