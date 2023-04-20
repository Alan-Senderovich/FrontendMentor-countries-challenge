import CountryPage from "@/components/CountryPage"
import { CountryTS } from "@/types/Country";
import { api } from "@/utils/api";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

export interface CountryByNameProps {
    country: CountryTS;
}

const CountryByName = ({ country }: CountryByNameProps) => {
    const router = useRouter();
    // const { name } = router.query;

    // const [loading, setLoading] = useState(false);

    return (
        <div><CountryPage country={country} /></div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const countries: CountryTS[] = await api.getCountries();
    const paths = countries.map((country: CountryTS) => ({
        params: { name: country.name.common },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CountryByNameProps> = async ({
    params,
}) => {
    const country = await api.getCountry(params?.name as string);
    return { props: { country } };
};


export default CountryByName