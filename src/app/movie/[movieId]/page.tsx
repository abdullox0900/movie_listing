"use client"

import Loading from '@/components/loading/loading'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { LuStar } from 'react-icons/lu'

interface Params {
    params: { movieId: string }
}

export default function MovieInnerPage({ params }: Params) {

    interface MovieInnerObj {
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

    async function getMovie() {
        const url = `https://movies-api14.p.rapidapi.com/movie/${params.movieId}`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '261fc85027msh57c982225aa6d48p12b09ajsn36155432743d',
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        }
        try {
            const response = await fetch(url, options)
            const result = await response.json()

            return result
        } catch (error) {
            console.error(error)
        }
    }

    const { data, isLoading, isError, isPending } = useQuery({
        queryKey: ['movie-inner'],
        queryFn: getMovie,
        staleTime: 0,
        gcTime: 0,
    })

    if (isLoading) {
        return <Loading />
    }


    return (
        <div className='container'>
            <section>
                <div className={`relative w-full h-[480px] mb-[150px]`} >
                    <Image className='absolute top-0 left-0 w-full h-[480px] object-cover rounded-[40px]' src={data?.movie?.backdrop_path} alt='' width={100} height={480} />
                    <div className='absolute top-[408px] left-[80px] w-[560px] p-[40px] rounded-[24px] backdrop-blur-[24px] bg-[rgba(32,40,62,0.8)]'>
                        <span className='mb-[8px] text-[12px] text-[#beb7fb]'>MaileHereko / Movie</span>
                        <div className='text-[32px] font-semibold text-[#ebeef5]'>{data?.movie?.original_title}</div>
                    </div>
                </div>

                <div className='flex justify-center gap-[80px] w-[1080px] mx-auto'>
                    <Image className='bg-slate-500 w-[480px] h-[720px] rounded-[24px] object-cover' src={data?.movie?.poster_path} alt='' width={480} height={720} />

                    <div className='flex flex-col gap-[24px] w-[480px]'>
                        <h4 className='text-[24px] font-bold text-[#ebeef5] space-x-[-0.01em]'>{data?.movie?.title}</h4>

                        <p className='text-[20px] text-[#8e95a9] leading-[160%] font-medium'>{data?.movie?.overview}</p>

                        <div className='flex gap-[4px] items-center w-[60px] h-[40px] py-[4px] px-[8px]rounded-[8px] text-[#ffad49] text-[20px] font-medium bg-[rgba(0,0,0,0.5)] backdrop-blur-[8px]'>
                            <LuStar />
                            {data?.movie?.vote_average?.toString().slice(0, 3)}
                        </div>

                        <div>
                            <span className='text-[16px] font-medium leading-[150%] text-[#767e94]'>Type</span>
                            <div className='text-[20px] font-medium leading-[160%] text-[#c3c8d4]'>Movie</div>
                        </div>

                        <div>
                            <span className='text-[16px] font-medium leading-[150%] text-[#767e94]'>Release Date:</span>
                            <div className='text-[20px] font-medium leading-[160%] text-[#c3c8d4]'>{data?.movie?.release_date}</div>
                        </div>

                        <div>
                            <span className='text-[16px] font-medium leading-[150%] text-[#767e94]'>Run time</span>
                            <div className='text-[20px] font-medium leading-[160%] text-[#c3c8d4]'>{data?.movie?.vote_count}</div>
                        </div>

                        <div>
                            <span className='text-[16px] font-medium leading-[150%] text-[#767e94]'>Genres</span>
                            <div className='flex text-[20px] font-medium leading-[160%] text-[#c3c8d4]'>{data?.movie?.genres?.map((i: string) => ` ${i}, `)}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}