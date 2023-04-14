import { Request, Response } from 'express';
import { handleHttp } from '../utilities/handle-http';
import { createMessage } from '../services/messages.services';
import { matchedData } from 'express-validator';
import { Message } from '../interfaces/message.interface';

const postItem = async (req: Request, res: Response) => {
  try {
    const body = matchedData(req);
    const cleanData: Message = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
    };
    const message = await createMessage(cleanData);
    return res.status(200).json({ success: true, message });
  } catch (e) {
    handleHttp(res, 'ERROR_POST_MESSAGE', e);
  }
};

export { postItem };
