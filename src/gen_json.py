import json

path = r"/Users/avikumar/Desktop/portfolio-test/portfolio/assets/captions.txt"
with open(path, "r") as file:
    lines = file.readlines()
    for line in lines:
        pieces = line.split('|')
        
        
        