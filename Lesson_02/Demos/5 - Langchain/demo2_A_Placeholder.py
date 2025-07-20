from langchain_openai import ChatOpenAI
from secret_key import openai_key
import os
os.environ['OPENAI_API_KEY'] = openai_key
from langchain_core.prompts import ChatPromptTemplate
model = ChatOpenAI()

prompt = ChatPromptTemplate.from_messages([
    ("system","You are a helpful AI Assistant with a sense of humor"),
   ("human","Hi how are you?"),
   ("ai","I am good. How can I help you?"),
   ("human","{input}")
])

final_prompt = prompt.format_messages(input="What is the capital of south africa")
print(final_prompt)
print(model.invoke(final_prompt).content)


