from flask import Flask, render_template, request, jsonify
from models.recommender import recommend
import pandas as pd

app = Flask(__name__)

df = pd.read_csv("data/movies.csv")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/recommend")

def recommend_movies():
    title = request.args.get("title")
    movies = recommend(title)
    return jsonify(movies)


@app.route("/search")

def search_movies():
    query = request.args.get("query")
    results = df[df["title"].str.lower().str.contains(query.lower())]
    titles = results["title"].head(5).tolist()
    return jsonify(titles)


if __name__ == "__main__":
    app.run(debug=True)