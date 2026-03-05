import pandas as pd
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity


df = pd.read_csv("data/movies.csv")

df["overview"] = df["overview"].fillna("")


model = SentenceTransformer("all-MiniLM-L6-v2")


embeddings = model.encode(df["overview"].tolist(), show_progress_bar=True)


def recommend(title):

    movie_index = df[df["title"].str.lower() == title.lower()].index

    if len(movie_index) == 0:
        return []

    idx = movie_index[0]

    movie_embedding = embeddings[idx]

    similarity_scores = cosine_similarity(
        [movie_embedding], embeddings
    )[0]

    scores = list(enumerate(similarity_scores))

    scores = sorted(scores, key=lambda x: x[1], reverse=True)[1:10]

    results = []

    for i in scores:

        movie = df.iloc[i[0]]

        results.append({
            "title": movie["title"],
            "rating": movie["rating"],
            "poster": "https://image.tmdb.org/t/p/w500" + str(movie["poster"])
        })

    return results