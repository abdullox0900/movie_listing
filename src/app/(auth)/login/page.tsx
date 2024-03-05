"use client"

// +++++++ Import Next Local Components +++++++
import Image from 'next/image'

// +++++++ Import Packages +++++++
import { Button } from "@nextui-org/react"

// +++++++ Import file +++++++
import LoginImg from '../../../assets/img/login.png'


export default function Login() {


    return (
        <div className='container'>
            <section className='flex gap-[126px] min-h-[85vh]'>
                <div className='relative w-[390px] h-[560px] rounded-[36px] bg-[#121829] max-[800px]:hidden'>
                    <Image className='absolute right-[-20px] bottom-[-16px] object-cover' src={LoginImg} alt='img' width={550} height={650} />
                </div>
                <div className='w-[400px] max-[800px]:mx-auto max-[650px]:w-[300px]'>
                    <h2 className='text-[#C3C8D4] text-[64px] font-semibold mt-[100px] mb-[40px] max-[800px]:text-center'>Login</h2>

                    <div className='flex flex-col gap-[16px] w-[400px] max-[800px]:items-center max-[800px]:mx-auto max-[650px]:w-[300px]'>
                        <input className='w-[100%] p-[20px] rounded-[24px] bg-[#323B54]' type="text" placeholder='Email' />
                        <input className='w-[100%] p-[20px] rounded-[24px] bg-[#323B54] mb-[40px]' type="text" placeholder='Password' />

                        <Button className='bg-[#7B6EF6] w-[100%]' color="primary" size='lg'>
                            Button
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}