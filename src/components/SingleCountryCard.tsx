import { SingleCountryItemTS } from '@/types/SingleCountryItem'
import Link from 'next/link'


const SingleCountryCard = ({ flags, currencies, name, population, region, subregion, tld, languages, borders, capital }: SingleCountryItemTS) => {

    return (
        <div className='tracking-wide grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-16'>
            <div className='mb-12 w-full'>
                <img src={flags.png} alt={`Flag of ${name}`} className='w-96 h-56 max-w-full object-cover mx-auto md:mx-0 md:h-64 lg:w-[29rem] lg:h-[18rem]' />
            </div>
            <div className='w-full'>
                <div className='text-black font-semibold dark:text-white'>
                    <h1 className='text-[1.7rem] font-bold pb-8'>{name}</h1>
                    <div className='flex flex-col md:flex-row md:gap-10'>
                        <div className='flex flex-col gap-2 pb-8'>
                            <p className='spacing'>Population: <span className='opacity-70'>{population}</span></p>
                            <p>Region: {region}</p>
                            <p>SubRegion: {subregion}</p>
                            <p>Capital: {capital}</p>
                        </div>
                        <div className='flex flex-col gap-2 pb-8'>
                            <p>Top level domain: {tld}</p>
                            <p><span>Currencies: </span>{currencies}</p>
                            <p><span>Languages: </span>{languages}</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-full overflow-x-auto text-[#2b3743] dark:text-white'>
                    <p className='font-bold text-lg pb-4'>Border Countries:</p>
                    <div className='flex flex-wrap'>
                        {borders?.map((border, index) => (
                            <Link href={`/code/${border}`} className='px-5 py-2 mr-2 mb-2 text-sm font-medium leading-5 text-[#2b3743] bg-white dark:bg-[#2b3743] dark:text-white rounded-sm hover:bg-gray-300 transform transition duration-300 hover:scale-105 active:scale-95 focus:outline-none' key={index}>
                                {border}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SingleCountryCard