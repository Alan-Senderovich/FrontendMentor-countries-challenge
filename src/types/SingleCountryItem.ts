export interface SingleCountryItemTS {
  name: string;
  nativeName?: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  alpha2Code?: string;
  flags: {
    png: string;
  };
  tld: [string];
  currencies?: string | false;
  languages?:  string | false;
  borders: (string | JSX.Element)[] | null;
}
