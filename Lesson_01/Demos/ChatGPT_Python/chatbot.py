from secret_key import secret_key

from openai import OpenAI

client = OpenAI(api_key=secret_key)




messages = []
messages.append({"role": "system", "content": "You are a drummer" })



while True:
    user_input = input(" ")
    messages.append({"role": "user", "content": user_input})

    resp = client.chat.completions.create(model="gpt-3.5-turbo", messages=messages)
    reply = resp.choices[0].message.content
    print("ChatGPT says: " + reply)
    messages.append({"role": "assistant", "content": reply })

