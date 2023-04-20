import CountryPage from "@/components/CountryPage"
import { CountryTS } from "@/types/Country";
import { api } from "@/utils/api";
import { GetStaticPaths, GetStaticProps } from "next";

export interface CountryByCodeProps {
    country: CountryTS;
}

const CountryByCode = ({ country }: CountryByCodeProps) => {
    return (
        <div><CountryPage country={country}/></div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const countries: CountryTS[] = await api.getCountries();
    const paths = countries.map((country: CountryTS) => ({
        params: { code: country.cca3 },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CountryByCodeProps> = async ({
    params,
}) => {
    const country = await api.getCountryByCode(params?.code as string);
    return { props: { country } };
};


export default CountryByCode