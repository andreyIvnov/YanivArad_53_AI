const { Configuration, OpenAIApi } = require("openai")
const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json());

const client = new OpenAIApi(configuration)

const chatHistory = []

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;
    chatHistory.push({ role: "user", content: userMessage });

    try {
        const response = await client.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chatHistory
        })

        chatHistory.push({ 
            id: response.data.id, 
            content: response.data.choices[0].message.content,
            role: response.data.choices[0].message.role
        });
        res.json({ responseFromOpenAi: response.data })
    } catch (error) {
        console.error("Error calling OpenAI. ", error);
        res.json({ error: "Error calling OpenAI:" + error.message })
    }

})
