const { Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey:'ddd'
});

const openai = new OpenAIApi(configuration);

const chatHistory = [];
async function callChatGpt() {
    
    chatHistory.push({role: 'user', content:'Tell me a joke'});
    const resp = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: chatHistory
    })
    console.log(resp.data.choices[0].message.content);
}

callChatGpt();