from langchain_openai import ChatOpenAI
from secret_key import openai_key
import os
os.environ['OPENAI_API_KEY'] = openai_key
from langchain.prompts import PromptTemplate
model = ChatOpenAI(temperature=0.8)


prompt_name = PromptTemplate(
    input_variables=["cuisine", ],
    template="I want to open a fancy restaurant for {cuisine} food. Suggest a fancy name for it"
    
)

prompt_items = PromptTemplate(
    input_variables=["restaurant_name"],
    template="Suggest some menu items for {restaurant_name}. Return as a comma separated list."
)


# final_prompt = prompt.format(cuisine=input_user)

from langchain_core.output_parsers import StrOutputParser

chain_name = prompt_name | model | StrOutputParser()
chain_items = prompt_items | model | StrOutputParser()

full_chain = chain_name | {
    'restaurant_name': chain_name,
    'menu_items': chain_items,
}
response = full_chain.invoke({"cuisine": "Indian"})
print(response["restaurant_name"])
print(response["menu_items"])






