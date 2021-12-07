import requests
URL = "https://jsonplaceholder.typicode.com/users"
req = requests.get(url = URL)
data = req.json()

print('[') 
for i in range (10):
    print('\t{')
    print ("\t\tid : ",data[i]['id'],",","\n\t\tname : ",data[i]['name'],",")
    if i!=9:
        print('\t}',",")
    else:
         print('\t}')
        
print(']')