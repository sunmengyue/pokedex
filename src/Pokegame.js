import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
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
    };
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemons];
        while(hand1.length < hand2.length) {
            let randomIndx = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randomIndx, 1)[0];
            hand1.push(randomPokemon);
        }
        let hand1EXP = hand1.reduce((h1exp, curPokemon) => h1exp + curPokemon.base_experience, 0);
        let hand2EXP = hand2.reduce((h2exp, curPokemon) => h2exp + curPokemon.base_experience, 0);
        
        return (
            <div>
                <Pokedex pokemons={hand1}  exp={hand1EXP}  isWinner={hand1EXP > hand2EXP}/>
                <Pokedex pokemons={hand2} exp={hand2EXP} isWinner={hand2EXP > hand1EXP}/>
            </div>
            
        )
    }
}

export default Pokegame;