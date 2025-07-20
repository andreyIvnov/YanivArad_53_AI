

from secret_key import openai_key

import os
os.environ["OPENAI_API_KEY"] = openai_key

from langchain_openai import ChatOpenAI
from langchain_core.output_parsers import StrOutputParser

def generate_restaurant_name_items(cuisine):

    app_llm = ChatOpenAI(temperature=0.8)

    from langchain.prompts import PromptTemplate

    prompt_template_name = PromptTemplate(
        input_variables=['cuisine'],
        template = "I want to open a fancy restaurant for {cuisine} food. Suggest a fancy name for this"
    )
    prompt_name =  prompt_template_name.format(cuisine='American')

    prompt_template_items = PromptTemplate(
        input_variables=['restaurant_name'],
        template= "Suggest some menu items for {restaurant_name}. Return is as a comma seperated list"
    )



    chain_name = prompt_template_name | app_llm | StrOutputParser()
    chain_items = prompt_template_items | app_llm | StrOutputParser()

    full_chain =  chain_name |  {
        'restaurant_name' : chain_name,
        'menu_items' : chain_items
    }

    response = full_chain.invoke(({'cuisine' : cuisine }))

    return response




cusine = input("Enter cuisine type")
response = generate_restaurant_name_items(cusine)

print(response["restaurant_name"])
print(response["menu_items"])