"use client"

// +++++++ Import Next Local Components +++++++
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// +++++++ Import Packages +++++++
import { LuStar } from "react-icons/lu"

// +++++++ Import Local Components +++++++

export default function MovieCard({ data }: any) {

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

    return (
        <>
            <ul className='flex justify-center flex-wrap gap-[24px] mt-[30px] max-[450px]:gap-[10px]'>
                {
                    data?.movies?.slice(0, visible).map((item: Data) => {
                        return (
                            <Link href={`movie/${item._id}`} key={item._id}>
                                <li className='relative w-[280px] h-[480px] p-[8px] pb-[16px] bg-[rgba(32,40,62,0.83)] backdrop-blur-[80px] rounded-[12px] max-[650px]:w-[180px] max-[650px]:h-[350px] max-[450px]:w-[150px] max-[450px]:h-[280px] max-[350px]:w-[130px] max-[350px]:h-[240px]'>
                                    <Image className='object-cover rounded-[8px] mb-[16px]' src={item.poster_path} alt='img' width={266} height={400} />
                                    <div className='flex gap-[4px] items-center w-[60px] h-[40px] py-[4px] px-[8px] absolute top-[18px] left-[16px] rounded-[8px] text-[#ffad49] text-[16px] font-medium bg-[rgba(0,0,0,0.5)] backdrop-blur-[8px] max-[450px]:p-[4px] max-[450px]:text-[12px] max-[450px]:w-[45px] max-[450px]:h-[25px]'>
                                        <LuStar />
                                        6.7
                                    </div>
                                    <div className='text-[16px] font-semibold text-[#f6edff] max-[450px]:text-[12px]'>
                                        {item?.title.length > 20 ? item?.title.slice(0, 20) + '...' : item?.title}
                                    </div>
                                    <div className='w-[50px] h-[50px] animate-pulse'></div>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
            <div className='text-center'>
                <button onClick={showMore} className='mt-[40px] text-[#fff] py-[16px] px-[32px] bg-[#7B6EF6] rounded-[16px]'>Load more</button>
            </div>
        </>
    )
}