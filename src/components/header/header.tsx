// "use client"
// import { usePathname } from 'next/navigation'

import Image from 'next/image'

import SiteImg from "../../assets/svg/site-logo.svg"

import Link from 'next/link'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem } from "@nextui-org/react"
// import { useState } from 'react'

import { navigation } from '../../data/navigation'

import { auth, UserButton } from "@clerk/nextjs"



export default function Header() {

    // const path = usePathname()

    // const [isMenuOpen, setIsMenuOpen] = useState(false)

    const { userId } = auth()

    interface Nav {
        id: number
        name: string
        path: string
    }

    return (
        <Navbar
            isBordered
            // isMenuOpen={isMenuOpen}
            // onMenuOpenChange={setIsMenuOpen}
            maxWidth='xl'
            style={{ background: 'rgba(0, 0, 0, 0.4)', }}
        >
            <NavbarContent className="hidden max-[765px]:flex" justify="start">
                {/* <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} /> */}
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link href={'/'}>
                        <Image
                            src={SiteImg}
                            alt='site-logo'
                            width={45}
                            height={45}
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="max-[765px]:hidden gap-4" justify="center">
                <NavbarItem>
                    <Link color="white" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/movie" aria-current="page">
                        Movie
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="white" href="/trending">
                        Trending
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="/sign-up">Sing Up</Link>
                    <Link href="/sign-in">Sing In</Link>
                </NavbarItem> */}

                <NavbarItem className='flex gap-5'>
                    {
                        userId ? (
                            <div>
                                <UserButton />
                            </div>
                        ) : (
                            <div className='flex gap-4'>
                                <Link href="/sign-in">Sing In</Link>
                                <Link className='rounded-[12px]' href="/sign-up">Sing Up</Link>
                            </div>
                        )
                    }
                </NavbarItem >
            </NavbarContent >

            <NavbarMenu style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
                {navigation?.map((item: Nav, index: number) => (
                    <NavbarMenuItem key={`${index}`}>
                        <Link
                            className="w-full"
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    )
}