import { CountryCardTS } from '@/types/CountryCard'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const CountryCard = ({ name, population, region, capital, flag }: CountryCardTS) => {

    const formattedPopulation = population.toLocaleString('en-US');


    return (
        <Link href={`/country/${name}`} className='cursor-pointer transform transition duration-300 hover:scale-105 active:scale-95'>
            <div className='flex flex-col w-5/6 max-w-[350px] min-w-[150px] mx-auto rounded-t-md cursor-pointer'>
                <div className='rounded-t-md'>
                    <img src={flag} alt={`Bandera de ${name}`} className='w-full h-44 rounded-t-md' />
                    {/* <Image src={flag} alt={`Bandera de ${name}`} /> */}
                </div>
                <div className='flex flex-col gap-1 text-black dark:text-white bg-gray-100 dark:bg-[#2b3743] pt-7 px-7 pb-10 rounded-b-md'>
                    <p className='text-lg font-bold pb-3'>{name}</p>
                    <p>Population: <span className='text-gray-600 dark:text-gray-400'>{formattedPopulation}</span></p>
                    <p>Region: {region}</p>
                    <p>Capital: {capital}</p>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard