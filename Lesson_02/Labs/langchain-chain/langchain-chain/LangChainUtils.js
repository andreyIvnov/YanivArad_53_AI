import axios from "axios";

const OPENAI_ENDPOINT = "http://localhost:3000/chat-goal";

const sendGoalToBot = async (goal) => axios.post(OPENAI_ENDPOINT, { goal: goal });

export { sendGoalToBot }