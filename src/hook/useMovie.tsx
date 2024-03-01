import { useQuery } from '@tanstack/react-query'

const fetcherMovie = async () => {
    try {
        const url = `https://movies-api14.p.rapidapi.com/movies`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2c79e80618msh82a256f00de1614p1693b6jsn7a812888dbc4',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        }

        const response = await fetch(url, options)
        const result = await response.json()

        return result
    } catch (error) {
        console.error(error)
    }
}

export const useMovieData = () => {
    return useQuery({
        queryKey: ["movie"],
        queryFn: fetcherMovie,
    })
}