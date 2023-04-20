export interface CountryTS {
  name: { common: string };
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  alpha2Code: string;
  cca3: string;
  flags: {
    png: string;
  };
  tld: [string];
  currencies: [
    {
      name: string;
    }
  ];
  languages: [
    {
      name: string;
    }
  ];
  borders: [string];
}
