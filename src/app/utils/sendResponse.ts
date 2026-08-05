import { Response } from "express";

export interface IResponse<T> {
  httpStatusCode: number;
  success: boolean;
  message: string;
  data?: T;
}

export const sendResponse = <T>(res: Response, responseData: IResponse<T>) => {
  const { httpStatusCode, message, success, data } = responseData;

  res.status(httpStatusCode).json({
    success,
    message,
    data,
  });
};
