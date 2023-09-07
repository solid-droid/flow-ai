import torch
print(torch.__version__)
print(torch.cuda.is_available())

from datasets import load_dataset, Dataset

# ds_raw2 = load_dataset('json',data_files='../dataset/dataset.json',split="train");
# print(ds_raw2)
# print(ds_raw2[0])
# print(ds_raw2['text'])