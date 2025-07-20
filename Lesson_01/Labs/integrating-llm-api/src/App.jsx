import { useState } from 'react'
import './App.css'
import Message from './Message/Message'
import { sendMessageToBot } from './Utils/chatBotUtils'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [texts, setTexts] = useState([])
    // {id: uuidv4(), content: "Hello :) ", role: 'assistent'}
  // ])
  const [usersInput, setUsersInput] = useState("")

  const sendToServer = async () => {
    const userMessage = { id: uuidv4(), role: 'user', content: usersInput };
    setTexts([userMessage, ...texts]);

    const response = await sendMessageToBot(usersInput)

    if (response && response.data) {
      const { responseFromOpenAi } = response.data;
      const aiAnswer = { id: responseFromOpenAi.id, role: responseFromOpenAi.choices[0].message.role, content: responseFromOpenAi.choices[0].message.content }
      setTexts(prev => [aiAnswer, ...prev]);
    }
  }

  return (
    <>

      <div>
        <input type="text" name="usersInput" onChange={e => setUsersInput(e.target.value)} /> <button onClick={sendToServer}>Send</button>
      </div>
      <div style={{ border: '2px solid black', width: '800px', padding: '5px 5px 5px 5px' }}>
        {texts && texts.map(mess => {
          return (
            <Message key={mess.id} passedMessage={mess} />
          )
        })}
      </div>
    </>
  )
}

export default App
