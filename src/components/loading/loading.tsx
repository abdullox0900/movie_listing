import { Spinner } from '@nextui-org/react'

export default function Loading() {
    return (
        <div className='text-center mt-[150px]'>
            <Spinner color="default" size='lg' />
        </div>
    )
}