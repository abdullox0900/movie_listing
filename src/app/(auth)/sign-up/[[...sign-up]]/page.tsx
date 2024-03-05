import { SignUp } from "@clerk/nextjs"

export default function Page() {
    return (
        <div className='flex justify-center flex-col items-center h-[100%] mt-[120px]'>
            <h2 className='text-[40px] font-semibold mb-[30px]'>Ro‘yxatdan o‘tish</h2>
            <SignUp />
        </div>
    )
}