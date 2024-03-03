"use client"

import { useMovieData } from '@/hook/useMovie'
import Loading from '../loading/loading'
import MovieCard from '../movie-card/movie-card'

import { Image } from "@nextui-org/react"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay } from 'swiper/modules'

export default function HomeMain() {

    const { data, isLoading, isError } = useMovieData('movie', 'movie')
    // const { data: data_series } = useMovieData('shows', 'show')

    console.log(data)

    console.log('Rerender')

    if (isLoading) {
        return <Loading />
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
        <div className='container'>
            <main className='flex flex-col gap-[20px] py-[50px]'>
                <div>
                    <h3 className='text-[28px] font-semibold max-[450px]:text-[22px]'>Movie</h3>
                    <MovieCard data={data} />
                </div>

                <div>
                    <h3 className='text-[28px] font-semibold max-[450px]:text-[22px]'>TV Shows</h3>
                    <MovieCard data={data} />
                </div>

                <div>
                    <h3 className='mb-[20px] text-[28px] font-semibold max-[450px]:text-[22px]'>Recommended</h3>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        pagination={{
                            clickable: false,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 10 },
                            450: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="mySwiper"
                    >
                        {
                            data?.movies?.slice(10, 30)?.map((item: Data) => {
                                return (
                                    <SwiperSlide key={item?._id} className='mx-[10px]'>
                                        <div className='w-[380px] h-[250px] rounded-[24px] bg-[#fff] overflow-hidden max-[450px]:w-[170px] max-[450px]:h-[120px]'>
                                            <Image
                                                isBlurred
                                                src={item?.poster_path}
                                                alt={item?.title}
                                                className="object-cover w-[100%] h-[100%]"
                                            />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

            </main >
        </div >
    )
}