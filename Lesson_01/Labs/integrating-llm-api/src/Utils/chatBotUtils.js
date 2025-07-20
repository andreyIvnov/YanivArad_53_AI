import axios from 'axios';

const CHAT_BOT_ENDPOINT = "http://localhost:3000/chat";

const sendMessageToBot = async (message) => axios.post(CHAT_BOT_ENDPOINT, { message: message });

export { sendMessageToBot }