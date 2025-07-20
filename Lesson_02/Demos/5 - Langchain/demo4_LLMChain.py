from langchain_openai import ChatOpenAI
from secret_key import openai_key
import os
os.environ['OPENAI_API_KEY'] = openai_key
from langchain.prompts import PromptTemplate
model = ChatOpenAI(temperature=0.8)


prompt = PromptTemplate(
    input_variables=["cuisine", ],
    template="I want to open a fancy restaurant for {cuisine} food. Suggest a fancy name for it"
    
)


input_user = input("Enter a cuisine: ")
# final_prompt = prompt.format(cuisine=input_user)

from langchain_core.output_parsers import StrOutputParser

chain = prompt | model | StrOutputParser()

result = chain.invoke({"cuisine": input_user})
print(result)





