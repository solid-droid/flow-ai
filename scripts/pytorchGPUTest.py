import torch
print(torch.__version__)
print(torch.cuda.is_available())

from datasets import load_dataset, Dataset

# ds_raw = load_dataset('opus_books', "en-it", split='train[0:2]')
# print(ds_raw[0])
# _data = {'id': '0', 'translation': {'en': 'Source: Project Gutenberg', 'it': 'Source: www.liberliber.it/Audiobook available here'}}


data = {
    "id": [0],
    "cmd": ["CREATE PIVOT"],
    "inp":["Add pivot"]
}

# Creating a Dataset object from the data
custom_dataset = Dataset.from_dict(data)
print(custom_dataset)

ds_raw2 = load_dataset('json',data_files='../dataset/dataset.json',split="train");
print(ds_raw2)
print(ds_raw2[0])