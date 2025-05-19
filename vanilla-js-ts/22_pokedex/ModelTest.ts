import figlet from 'figlet';
import chalk from 'chalk';
import { numbers } from 'blessed/lib/alias';

export class Model {
    baseUrl: string
    constructor(){
        this.baseUrl = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
    }
    public async getAllPokemons() {
        try {
            const response = await fetch(this.baseUrl);
            
            if (!response.ok) {
                return new Error('Error fetching API');
            }
    
            const data = await response.json();
                        
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    
    public getById(){}
    public getByName(){}
    public getType(){}
    public getSpawnInfo(){}
    public getWeakness(){}
    public getEvolution(){}
    public getImage(){}
    
}

*