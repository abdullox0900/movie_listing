"use client"
interface Params {
    params: { movieId: string }
}

export default function MovieInnerPage({ params }: Params) {

    async function getMovie() {
        const url = `https://movies-api14.p.rapidapi.com/movie/${params.movieId}`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2c79e80618msh82a256f00de1614p1693b6jsn7a812888dbc4',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        }
        try {
            const response = await fetch(url, options)
            const result = await response.json()

            console.log(result)


            return result
        } catch (error) {
            console.error(error)
        }
    }

    getMovie()

    return (
        <h1>Movie Inner page {params.movieId}</h1>
    )
}