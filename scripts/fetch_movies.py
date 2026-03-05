import requests
import pandas as pd

API_KEY = "b96ce5641860dc081f62086adc29f811"

movies = []

for page in range(1,200):
    url = f"https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}&page={page}"
    
    response = requests.get(url)

    data = response.json()

    for movie in data["results"]:
        movies.append({
            "id": movie["id"],
            "title": movie["title"],
            "overview": movie["overview"],
            "rating": movie["vote_average"],
            "poster": movie["poster_path"]
        })

df = pd.DataFrame(movies)

df.to_csv("data/movies.csv", index=False)

print("Dataset creado")







