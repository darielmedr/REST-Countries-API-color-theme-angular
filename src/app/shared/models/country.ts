export default interface Country {
    name: string,
    flag: string,
    capital: string,
    region: string,
    subregion: string,
    nativeName: string,
    population: number,
    topLevelDomain: string[],
    currencies: string[],
    languages: string[],
    borders: string[]
}