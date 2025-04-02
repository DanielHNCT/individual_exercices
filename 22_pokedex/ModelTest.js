export class Model {
    baseUrl;
    constructor() {
        this.baseUrl = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
    }
    async getAllPokemons() {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) {
                return new Error('Error fetching API');
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
    getById() { }
    getByName() { }
    getType() { }
    getSpawnInfo() { }
    getWeakness() { }
    getEvolution() { }
    getImage() { }
}
    * ;
