import type { IReturnData, IBaseResponse } from "@/types/response/base/IBaseResponse";
import axios from "axios";
// import userStore from "stores/user";
// import IBaseResponse, { IReturnData } from "types/response/base/IBaseResponse";

const apiPostClient = async <T>(url: string, data: any, token?: string): Promise<IReturnData<T>> => {
  const returnData: IReturnData<T> = { error: false, data: null, pagination: null };
  try {
    const result = await axios
      .create({
        headers: {
          // Authorization: token ? "Bearer " + token : "Bearer " + userStore.getState().access_token,
        },
      })
      .post<IBaseResponse<T>>(url, data);
    if (result.status === 200) {
      returnData.error = false;
      returnData.data = result.data.data;
    }
  } catch (error: any) {
    console.log(error);
    returnData.error = true;
    returnData.data = error.response.data;
  }
  return returnData;
};

export default apiPostClient;
