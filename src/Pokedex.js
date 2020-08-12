import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


class Pokedex extends Component {
    static defaultProps = {
     pokemons:   [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    render() {
      
        return(
           <div className="pokedex"> 
               <h1>Pokedex</h1>
               <div className="pokedex-cards">
                    {this.props.pokemons.map((pokemon, key) => {
                        return <Pokecard 
                                    key={pokemon.id}
                                    id={pokemon.id} 
                                    name={pokemon.name} 
                                    type={pokemon.type}
                                    exp={pokemon.base_experience}/>
                    })}
               </div>
                <h3>{this.props.isWinner}</h3>
           </div>
        )
    }
}

export default Pokedex;