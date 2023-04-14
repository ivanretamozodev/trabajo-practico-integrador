import { Schema, model } from 'mongoose';
import { Message } from '../interfaces/message.interface';

const MessageSchema = new Schema<Message>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  message: { type: String, required: true },
});

const MessageModel = model('Message', MessageSchema);

export default MessageModel;
