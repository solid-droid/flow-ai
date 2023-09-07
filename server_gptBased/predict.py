import os
from llama_index import GPTSimpleVectorIndex
from IPython.display import Markdown, display

os.environ["OPENAI_API_KEY"] = input("Paste your OpenAI key here and hit enter:")
def ask_ai():
    index = GPTSimpleVectorIndex.load_from_disk('index.json')
    while True:
        query = input("What do you want to ask? ")
        response = index.query(query)
        print(response)

ask_ai()