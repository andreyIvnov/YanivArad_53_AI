from secret_key import openai_key
import os
os.environ["OPENAI_API_KEY"] = openai_key


from langchain_openai import ChatOpenAI

app_llm = ChatOpenAI(temperature=1.0)

response = app_llm.invoke("I want to open a fancy restaurant for Italian food. Suggest a fancy name for it")
print(response.content)