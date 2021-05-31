import { message } from 'antd';

export const handleError = (msg,error) => {
    console.error(error);
    message.error(msg);
}