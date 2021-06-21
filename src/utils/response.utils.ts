import { MessageResponse } from "../app/interfaces/index.i";

export const r = {
  _400: (res: any, error: any) => {
    return res.status(400).json({
      ok: false,
      message: error,
    });
  },
  _200: (res: any, data: MessageResponse) => {
    return res.status(200).json(data);
  },

  _201: (res: any, data: any) => {
    return res.status(201).json({
      ok: true,
      data,
    });
  },
  _401: (res: any, error: any) => {
    return res.status(401).json({
      ok: false,
      error,
    });
  },
  _500: (res: any, error: any) => {
    return res.status(500).json({
      ok: false,
      error,
    });
  },
  _message: (res: any, message: any) => {
    return res.status(200).json({
      message,
    });
  },
};
