import pandas as pd
df = pd.read_csv("Datasets/Training.csv")
"""print(df.head())
print(df.shape)"""
print(len(df['prognosis'].unique()))