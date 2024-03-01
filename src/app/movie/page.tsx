import Image from 'next/image'

import { LuStar } from "react-icons/lu"

import Img from '@/assets/img/photo.jpg'
import Link from 'next/link'

export default function Movie() {
    return (
        <div className='container'>
            <section className='mt-[50px]'>
                <h1 className='text-[28px] font-bold'>Movies</h1>
                <span>90 Movie</span>
                <ul className='flex justify-center flex-wrap gap-[24px]'>
                    <Link href={'movie/12'}>
                        <li className='relative w-[280px] h-[480px] p-[8px] pb-[16px] bg-[rgba(32,40,62,0.83)] backdrop-blur-[80px] rounded-[12px]'>
                            <Image className='object-cover rounded-[8px] mb-[16px]' src={Img} alt='img' width={266} height={400} />
                            <div className='flex gap-[4px] items-center w-[60px] h-[40px] py-[4px] px-[8px] absolute top-[18px] left-[16px] rounded-[8px] text-[#ffad49] text-[16px] font-medium bg-[rgba(0,0,0,0.5)] backdrop-blur-[8px]'>
                                <LuStar />
                                6.7
                            </div>
                            <div className='text-[16px] font-semibold text-[#f6edff]'>
                                Black Widow
                            </div>
                        </li>
                    </Link>
                </ul>
            </section>
        </div>
    )
}