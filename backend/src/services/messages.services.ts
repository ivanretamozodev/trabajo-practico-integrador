import { Message } from '../interfaces/message.interface';
import MessageModel from '../models/message.model';
import * as emailer from '../config/emailer';

const createMessage = async (data: Message) => {
  const message = await MessageModel.create(data);
  emailer.sendMail(message.email, 'WebFlx Recibió su Mensaje');
  return message;
};

export { createMessage };
