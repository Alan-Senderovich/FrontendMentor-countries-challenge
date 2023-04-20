export interface CountriesTS {
    name: { common: string };
    capital: string,
    population: number,
    region: string,
    numericCode: string,
    flags: {
        png: string
    }
}