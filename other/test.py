import requests

url = ('https://newsapi.org/v2/everything?'
       'q=Apple&'
       'from=2023-05-15&'
       'sortBy=popularity&'
       'apiKey=xxxxxxxx')

response = requests.get(url)

print(response.json())