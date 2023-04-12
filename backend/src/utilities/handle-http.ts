import { Response } from 'express';

const handleHttp = (res: Response, err: string, errRaw?: any) => {
  console.log(errRaw);
  res.status(400).json({ success: false, error: err });
};

export { handleHttp };
