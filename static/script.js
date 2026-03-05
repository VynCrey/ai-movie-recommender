function autoComplete() {
    const query = document.getElementById("movieInput").value.trim()
    
    if (query.length < 2) {
        document.getElementById("suggestions").innerHTML = ""
        return
    }
    
    fetch(`/search?query=${encodeURIComponent(query)}`)
        .then(res => {
            if (!res.ok) throw new Error('Search error')
            return res.json()
        })
        .then(data => {
            const suggestions = document.getElementById("suggestions")
            suggestions.innerHTML = ""

            const langData = window.getLangData ? window.getLangData() : {
                noSuggestions: "No hay sugerencias"
            };

            if (data.length === 0) {
                const noResults = document.createElement("div")
                noResults.classList.add("suggestion-item", "disabled")
                noResults.innerText = langData.noSuggestions
                suggestions.appendChild(noResults)
                return
            }

            data.forEach(title => {
                const item = document.createElement("div")
                item.classList.add("suggestion-item")
                item.innerText = title

                item.onclick = () => {
                    document.getElementById("movieInput").value = title
                    suggestions.innerHTML = ""
                    searchMovie() // Optionally search automatically
                }

                suggestions.appendChild(item)
            })
        })
        .catch(error => {
            console.error('Error:', error)
            const suggestions = document.getElementById("suggestions")
            const langData = window.getLangData ? window.getLangData() : {
                errorSuggestions: "Error al cargar sugerencias"
            };
            suggestions.innerHTML = `<div class="suggestion-item error">${langData.errorSuggestions}</div>`
        })
}

function searchMovie() {
    const title = document.getElementById("movieInput").value.trim()
    const loader = document.getElementById("loader")
    const results = document.getElementById("results")
    
    if (!title) {
        alert("Por favor, escribe un título de película")
        return
    }
    
    loader.style.display = "block"
    results.innerHTML = "" // Limpiar resultados anteriores
    
    fetch(`/recommend?title=${encodeURIComponent(title)}`)
        .then(response => {
            if (!response.ok) throw new Error('Error en la recomendación')
            return response.json()
        })
        .then(data => {
            loader.style.display = "none"
            
            if (data.length === 0) {
                results.innerHTML = "<p class='no-results'>No se encontraron recomendaciones</p>"
                return
            }
            
            data.forEach(movie => {
                const card = document.createElement("div")
                card.classList.add("movie-card")
                
                card.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}" />
                    <h3>${movie.title}</h3>
                    <p>⭐ ${movie.rating}</p>
                `
                
                results.appendChild(card)
            })
        })
        .catch(error => {
            loader.style.display = "none"
            console.error('Error:', error)
            results.innerHTML = "<p class='error'>Error al cargar las recomendaciones</p>"
        })
}

// Debounce para autocomplete
let timeoutId
document.getElementById("movieInput").addEventListener("input", () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(autoComplete, 300) // Espera 300ms después de dejar de escribir
})