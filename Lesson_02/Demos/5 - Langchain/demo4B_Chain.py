from langchain_openai import ChatOpenAI
from secret_key import openai_key
import os
os.environ['OPENAI_API_KEY'] = openai_key
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser



model = ChatOpenAI(temperature=0.8)


prompt_template = ChatPromptTemplate.from_messages(
    [
        ("system", "You are a comedian who tells jokes about {topic}"),
        ("human", "Tell me {joke_count} jokes.")
    ]
)

chain = prompt_template | model | StrOutputParser()

result = chain.invoke({"topic": "", "joke_count": 3 })
print(result)