import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // <-- Import cors
import { ChatOpenAI } from "@langchain/openai";


const app = express();
app.use(cors()); // <-- Enable CORS
app.use(bodyParser.json());

// const chat = new ChatOpenAI({ apiKey: secret_api });

app.post('/chat-goal', async (req, res) => {
    const { goal } = req.body;
    if (!goal) {
        return res.status(400).json({ error: "Missing 'goal' in request body." });
    }
    try {
        // const response = await chat.invoke(goal);
        // res.json({ content: response.content });
        res.json({ content: ":P" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
