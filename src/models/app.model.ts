export interface ResponseDataList<T> {
    statusCode: number;
    data: {
      pageData: T;
      pageNum: number;
      total: number;
    };
  }
  
  export interface ApiResponseInterface {
    statusCode: number;
    data: object;
  }