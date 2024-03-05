import { SignIn } from "@clerk/nextjs"

export default function Page() {
    return (
        <div className='flex justify-center flex-col items-center h-[100%] mt-[120px]'>
            <h2 className='text-[40px] font-semibold mb-[30px]'>Tizimga kirish</h2>
            <SignIn />
        </div>
    )
}