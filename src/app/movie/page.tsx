"use client"

// Import Next Local Components
import Link from 'next/link'
import Image from 'next/image'

// Import Packages
import { LuStar } from "react-icons/lu"

// Import Local Components
import { useMovieData } from '@/hook/useMovie'

export default function Movie() {

    const { data, isError, isLoading } = useMovieData()
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
        return <h1>Loading...</h1>
    }

    return (
        <div className='container'>
            <section className='mt-[50px]'>
                <h1 className='text-[28px] font-bold'>Movies</h1>
                <span>{data?.movies?.length} Movie</span>
                <ul className='flex justify-center flex-wrap gap-[24px] mt-[30px]'>
                    {
                        data?.movies.map((item: Data) => {
                            return (
                                <Link href={`movie/${item._id}`} key={item._id}>
                                    <li className='relative w-[280px] h-[480px] p-[8px] pb-[16px] bg-[rgba(32,40,62,0.83)] backdrop-blur-[80px] rounded-[12px]'>
                                        <Image className='object-cover rounded-[8px] mb-[16px]' src={item.poster_path} alt='img' width={266} height={400} />
                                        <div className='flex gap-[4px] items-center w-[60px] h-[40px] py-[4px] px-[8px] absolute top-[18px] left-[16px] rounded-[8px] text-[#ffad49] text-[16px] font-medium bg-[rgba(0,0,0,0.5)] backdrop-blur-[8px]'>
                                            <LuStar />
                                            6.7
                                        </div>
                                        <div className='text-[16px] font-semibold text-[#f6edff]'>
                                            {item?.title}
                                        </div>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    )
}