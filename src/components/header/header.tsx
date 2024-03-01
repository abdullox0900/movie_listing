"use client"
import { usePathname } from 'next/navigation'

import Image from 'next/image'

import SiteImg from "../../assets/svg/site-logo.svg"

import { navigation } from '@/data/navigation'
import Link from 'next/link'

export default function Header() {

    const path = usePathname()

    return (
        <>
            <div className='container'>
                <header className='flex items-center justify-between py-[20px]'>
                    <Link href={'/'}>
                        <Image
                            src={SiteImg}
                            alt='site-logo'
                            width={45}
                            height={45}
                        />
                    </Link>

                    <nav>
                        <ul className='flex gap-[48px]'>
                            {
                                navigation.map((link) => {
                                    return (
                                        <li key={link.id} className=''>
                                            <Link href={link.path} className={path == link.path ? 'font-bold transition-all ease-in delay-200' : 'text-[16px] font-semibold text-[#a8aebf]'}>{link.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}