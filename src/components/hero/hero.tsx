import { CiSearch } from "react-icons/ci"


export default function Hero() {

    return (
        <section className='mt-[80px]'>
            <div className='container'>
                <h1 className='text-[64px] text-[#ebeef5] mb-[16px] space-[-0.02em] font-semibold'>MaileHereko</h1>
                <p className='text-[16px] text-[#8e95a9] font-medium mb-[24px] w-[590px]'>
                    List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉
                    {/* <i className="bi bi-search"></i> */}
                </p>
                <div className='relative'>
                    <input className='w-[344px] p-[20px] pl-[60px] rounded-[12px] border-[1px] border-solid border-[#323b54] bg-[rgba(0,0,0,0.1)] outline-none ' type="text" placeholder="Search Movies or TV Shows" />
                    <CiSearch className='absolute top-[20px] left-[20px] text-[26px] text-[#475069]' />
                </div>
            </div>
        </section>
    )
}