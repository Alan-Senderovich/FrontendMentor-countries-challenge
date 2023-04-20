import { InputTS } from '@/types/Input';
import useDebounce from '@/utils/useDebounce';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const delay = 100;

const SearchInput = ({ value, setSearch }: InputTS) => {
  const [input, setInput] = useState("");

  const debouncedChange = useDebounce(setSearch, delay);

  const handleChange = (e: string) => {
    setInput(e);
    debouncedChange(e);
  }

  return (
    <div className=' w-full flex flex-col gap-8 md:flex-row md:justify-between px-8'>
      <div className='relative'>
        <div className='absolute top-1/2 left-8 transform -translate-y-1/2'>
          <MagnifyingGlassIcon className="h-6 w-6  text-gray-600 dark:text-white" />
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full bg-white dark:bg-[#2b3743] text-xs py-4 px-20 text-gray-700 dark:text-white font-bold rounded-md outline-none"
        />
      </div>
      <select
        value={value}
        onChange={e => handleChange(e.target.value)}
        className="bg-white dark:bg-[#2b3743] text-gray-600 font-bold dark:text-white p-2 border-x-[1rem] border-transparent rounded-md py-3 w-2/3 text-xs md:w-1/3"
      >
        <option value="Filter by Region">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
};

export default SearchInput;
