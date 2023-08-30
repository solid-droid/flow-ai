# flow-ai
 seq2seq transformer - o9Hacks
Setup
- go to https://pytorch.org/get-started/locally/
- install mentioned version of cuda 1st (11.8)
- install anaconda, create and activate an conda environment
- install torch using the command given in step 1.
- install rest of the packages mentioned in requirements.txt
- update config.py file if needed
- run train.py => for training (if u want to pause and resume the training, or loading a pretrained model => make sure to update config.py)
- run pytorchGPUTest.py => to test CUDA/gpu is detected
- run predict.py => for prediction (need a trained model for this to work)
