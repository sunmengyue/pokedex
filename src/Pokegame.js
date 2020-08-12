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
        const totalEXP = this.props.pokemons.reduce((acc, obj) => {
            return acc + obj.base_experience;
        }, 0)
        console.log(totalEXP);
        let hand1 = [];
        let hand2 = [...this.props.pokemons];
        let hand1EXP = 0;
        let hand2EXP = 0;
        while(hand1.length < hand2.length) {
            let randomIndx = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randomIndx, 1)[0];
            hand1.push(randomPokemon);
            hand1EXP += randomPokemon.base_experience;
        }
        hand2EXP = totalEXP - hand1EXP;
        let winner = hand1EXP > hand2EXP ? `P1 is the winner!` : `P2 is the winner!`;
        return (
            <div>
                <Pokedex pokemons={hand1} isWinner={winner}/>
                <Pokedex pokemons={hand2} isWinner={winner}/>
            </div>
            
        )
    }
}

export default Pokegame;