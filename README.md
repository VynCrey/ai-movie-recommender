🎬 AI Movie Recommendation System

A Machine Learning movie recommendation system built using Natural Language Processing (NLP) and semantic similarity techniques.

The goal of this project is to simulate how recommendation engines used by streaming platforms (like Netflix) suggest similar movies based on their content and meaning, not just genres or keywords.

🚀 Live Demo

Try the application:

🔗 https://huggingface.co/spaces/Cristiannnnnn/movie-recommender

Repository:

🔗 https://github.com/VynCrey/ai-movie-recommender

🧠 Project Overview

This system recommends movies by analyzing the semantic meaning of their descriptions.

Instead of relying on genres or tags, the model converts movie descriptions into vector embeddings and finds similar movies using vector similarity.

Example relationships detected by the model:

Space exploration → Interstellar travel
Artificial intelligence → Sentient machines

This allows the system to generate intelligent recommendations based on meaning.

🧠 Machine Learning Approach

The recommendation engine uses Natural Language Processing (NLP).

Movie descriptions are converted into semantic embeddings using:

• SentenceTransformers
• Model: all-MiniLM-L6-v2

Each movie becomes a vector representation of its meaning, enabling similarity comparison.

📊 Recommendation Algorithm

Once embeddings are generated, the system calculates similarity between movies using:

Cosine Similarity

This metric measures how close two vectors are in the semantic space.

Model Pipeline

Movie description
↓
NLP Embeddings
↓
Semantic vectors
↓
Cosine Similarity
↓
Recommended movies

⚙️ Data Engineering

The dataset was automatically generated using the TMDB API (The Movie Database).

Data Pipeline

TMDB API
↓
Data extraction
↓
Processing with Pandas
↓
Structured dataset

Features used

• movie title
• overview (description)
• rating
• poster
• movie id

🧩 System Architecture

The project follows a modular architecture:

Data Engineering
↓
Data collection from API

Machine Learning
↓
Embeddings + NLP + Semantic similarity

Backend
↓
Flask API

Frontend
↓
Interactive web interface

💻 Tech Stack

Python
Flask
Pandas
SentenceTransformers
Scikit-learn
JavaScript
HTML
CSS

📈 Features

• Movie search
• Intelligent autocomplete
• AI-based recommendations
• Streaming-style interface
• Poster and rating visualization

🧠 AI Concepts Applied

Natural Language Processing
Semantic Embeddings
Similarity Search
Recommendation Systems
Machine Learning for text data

🔮 Future Improvements

• Hybrid recommendation systems
• More advanced embedding models
• Popularity and rating ranking
• Personalized recommendations

👨‍💻 Author

Cristian Monzon

Data Science & AI Student focused on:

• Machine Learning
• Data Engineering
• AI Applications

Portfolio
https://landing-page-vyncrey.netlify.app/

GitHub
https://github.com/VynCrey
