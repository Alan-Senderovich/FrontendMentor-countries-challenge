import { useRouter } from 'next/router';
import { CountryByNameProps } from '@/pages/country/[name]';
import SingleCountryCard from './SingleCountryCard';
import ButtonBack from './ButtonBack';


const CountryPage = ({ country }: CountryByNameProps) => {
  const router = useRouter();
  const { name } = router.query;

  if (!country) return <div>Loading...</div>;

  return (
    <div className='w-full px-5 md:px-8 lg:px-16 pb-4 md:h-screen'>
      <div>
          <ButtonBack />
      </div>
      <SingleCountryCard
        name={country.name.common}
        flags={{ png: country.flags.png }}
        population={country.population}
        region={country.region}
        subregion={country.subregion}
        capital={country.capital}
        tld={country.tld}
        currencies={country.currencies && typeof country.currencies === 'object' && Object.values(country.currencies).map((curr) => curr.name).join(', ')}
        languages={country.languages && typeof country.languages === 'object' && Object.values(country.languages).map((curr) => curr).join(', ')}
        borders={country.borders}
      />

    </div>
  );
};


export default CountryPage;
