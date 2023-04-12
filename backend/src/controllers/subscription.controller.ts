import { Response, Request } from 'express';
import { handleHttp } from '../utilities/handle-http';
import * as emailer from '../config/emailer';

const postItem = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    emailer.sendMail(email);
    res.status(200).json({ success: true });
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEMS', e);
  }
};

export { postItem };
