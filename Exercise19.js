const myMovies=[
    {
        "title": "Inception",
        "director": "Christopher Nolan",
        "view": true
    },
    {
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "view": false
    },
    {
        "title": "Pulp Fiction",
        "director": "Quentin Tarantino",
        "view": true
    },
    {
        "title": "The Godfather",
        "director": "Francis Ford Coppola",
        "view": false
    }
]



function viewOrNotView(myMovies) {
    for(movie of myMovies){
        let showes= `${movie.title} de director ${movie.director}`
        
        if (movie.view) {
            console.log('ya has visto: ', showes)
        }else{
            console.log('Todavia no has visto: ', showes)
        }
    } 
    return myMovies
}

console.log(viewOrNotView(myMovies));
