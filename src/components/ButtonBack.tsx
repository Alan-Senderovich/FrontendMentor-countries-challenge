import Link from 'next/link'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

const ButtonBack = () => {
    return (
        <Link href="/">
            <div className='inline-flex bg-white text-[#2b3743] dark:bg-[#2b3743] py-3 px-6 font-bold mt-10 mb-16 gap-4 dark:text-white cursor-pointer transform transition duration-300 hover:scale-105 active:scale-95 focus:outline-none shadow-md'>
                <ArrowLongLeftIcon className="h-6 w-6 text-[#2b3743] dark:text-white" />
                <button className='tracking-wide'>
                    BACK
                </button>
            </div>
        </Link>
    )
}

export default ButtonBack