import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// const fetcherMovie = async (endpoint: string) => {
//     try {
//         const url = `https://movies-api14.p.rapidapi.com/${endpoint}`
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '261fc85027msh57c982225aa6d48p12b09ajsn36155432743d',
//                 'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
//             }
//         }

//         const response = await fetch(url, options)
//         const result = await response.json()

//         return result
//     } catch (error) {
//         console.error(error)
//     }
// }

const fetcherMovie = async (endpoint: string) => {
    const url = `https://65e1f113a8583365b317ac31.mockapi.io/${endpoint}`

    try {
        const response = await axios.get(url)
        const res_data = await response
        return res_data.data[0]
    } catch (error) {
        console.log('fetcher error 🧐')

    }
}

export const useMovieData = (endpoint: string, key: string) => {
    return useQuery({
        queryKey: [`movie-${key}`],
        queryFn: () => fetcherMovie(endpoint),
        staleTime: 0,
        gcTime: 0,
    })
}