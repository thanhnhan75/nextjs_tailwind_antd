interface IBaseResponse<T = any> {
  data: T;
  pagination: IPagination | null;
  msg: string;
  error: boolean;
}

interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface IReturnData<T = any> {
  error: boolean;
  data: T | null;
  pagination: IPagination | null;
}

export type { IPagination, IReturnData, IBaseResponse };
