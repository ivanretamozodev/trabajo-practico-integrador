import nodemailer from 'nodemailer';
import { emailTemplate } from '../templates/email.template';

const templateEmail = emailTemplate;

const createTransporter = () => {
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  return transport;
};

export const sendMail = async (email: string, subject: string) => {
  try {
    const transporter = createTransporter();
    const info = await transporter.sendMail({
      from: `<retamozoi445@gmail.com>`,
      to: [`${email}`],
      subject,
      html: templateEmail,
    });
    console.log(`Message Sent: `, info.messageId);
    return;
  } catch (error) {
    console.log({ error });
  }
};

export default sendMail;
