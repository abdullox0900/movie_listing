"use client"

// +++++++ Import Next Local Components +++++++
import { useState } from 'react'

// +++++++ Import Packages +++++++
import { CiSearch } from 'react-icons/ci'

// +++++++ Import Local Components +++++++
import Loading from '@/components/loading/loading'
import MovieCard from '@/components/movie-card/movie-card'
import { useMovieData } from '@/hook/useMovie'

export default function Movie() {

    const { data, isError, isLoading } = useMovieData('movie', 'movie')
    const [visible, setVisible] = useState(8)

    const showMore = () => {
        setVisible(visible + 8)
    }

    interface Data {
        backdrop_path: string
        contentType: string
        first_aired: string
        genres: any
        original_title: string
        overview: string
        poster_path: string
        title: string
        _id: number
    }

    if (isError) {
        return <h1>Error - {isError}</h1>
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='container'>
            <section className='mt-[50px]'>
                <h1 className='text-[28px] font-bold mb-[16px]'>Movies</h1>
                <div className='relative mb-[25px]'>
                    <input className='w-[344px] p-[20px] pl-[60px] rounded-[12px] border-[1px] border-solid border-[#323b54] bg-[rgba(0,0,0,0.1)] outline-none max-[450px]:p-[15px] max-[450px]:pl-[55px] max-[450px]:w-full' type="text" placeholder="Search Movies or TV Shows" />
                    <CiSearch className='absolute top-[20px] left-[20px] text-[26px] text-[#475069] max-[450px]:top-[17px]' />
                </div>
                <span><span className='bg-cyan-600 p-[4px] rounded-[4px]'>{data?.movies?.length}</span> All Movie</span>

                <MovieCard data={data} />
            </section>
        </div>
    )
}