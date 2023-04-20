import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
// import data from "../../data.json";
import CountryCard from '@/components/CountryCard';
import Pagination from '@/components/Pagination';
import SearchInput from '@/components/SearchInput';
import { api } from '@/utils/api';
import { CountriesTS } from '@/types/Countries';
import { CountryTS } from '@/types/Country';


// ----------------------------------
// ----------------------------------
export default function Home() {
  const [countries, setCountries] = useState<CountriesTS[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [search, setSearch] = useState("");

  //FETCH
  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    setLoading(true);
    const cachedData = getCachedData(); // Obtener datos de cache si existen
    if (cachedData) {
      setCountries(cachedData);
      setLoading(false);
    } else {
      const countries = await api.getCountries();
      countries.sort((a: CountryTS, b: CountryTS) => a.name.common.localeCompare(b.name.common));
      setCountries(countries);
      setLoading(false);
      cacheData(countries); // Almacenar datos en cache
    }
  }

  const getCachedData = (): CountriesTS[] | null => {
    let cachedCountries: string | null = null;
    if (typeof window !== "undefined") {
      const cachedCountries = localStorage.getItem("cachedCountries");
    }
    if (cachedCountries) {
      return JSON.parse(cachedCountries);
    }
    return null;
  }

  const cacheData = (data: CountriesTS[]) => {
    localStorage.setItem("cachedCountries", JSON.stringify(data));
  }

  const cachedCountries = useMemo(() => {
    return getCachedData();
  }, []);
  //FETCH

  //PAGINATION
  const lowerSearch = search.toLowerCase();
  const filteredCountries = countries?.filter((country) => country.name.common.toLowerCase().includes(lowerSearch) || country.region.toLowerCase().includes(lowerSearch))
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const countriesToShow = filteredCountries?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = countries && Math.ceil(filteredCountries.length / itemsPerPage);

  const handleClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  //PAGINATION



  return (
    <main className='text-start pt-6'>
      <div className='flex flex-col gap-10 md:flex-row'>
        <SearchInput value={search} setSearch={setSearch} />
      </div>
      <div className='grid grid-cols-1 mt-8 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {countriesToShow?.length === 0 ? (
          <p>No match</p>
        ) : (
          countriesToShow?.map((c, index) => (
            <CountryCard key={index} name={c.name.common} population={c.population} region={c.region} capital={c.capital} flag={c.flags.png} />
          ))
        )}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleClickPrevious={handleClickPrevious}
        handleClickNext={handleClickNext}
      />
    </main>
  )
}
