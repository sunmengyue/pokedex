import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = () => {
    return (
        <div className="Pokedex">
            <h1>
                Pokedex
            </h1>
            <div className="grid-container">
                <div className="grid-item">
                    <Pokecard id={4} name="Charmander" type="fire" base_experience={62}/>
                </div>
                <div className="grid-item">
                    <Pokecard id={7} name="Squirtle" type="water" base_experience={63}/>
                </div>
                <div className="grid-item">
                    <Pokecard id={11} name="Metapod" type="bug" base_experience={72}/>
                </div>
                <div className="grid-item">
                    <Pokecard id={12} name="Butterfree" type="flying" base_experience={178}/>
                </div>
                <div className="grid-item">
                    <Pokecard id={25} name="Pikachu" type="electric" base_experience={112}/>
                </div>
                <div className="grid-item">
                    <Pokecard id={39} name="Jigglypuff" type="normal" base_experience={95}/>
                </div>
                <div className="grid-item">
                    <Pokecard id={94} name="Gengar" type="poison" base_experience={225}/>
                </div>
                <div className="grid-item">
                    <Pokecard id={133} name="Eevee" type="normal" base_experience={65}/>
                </div>
                
            </div>
        </div>
        
        );
}

export default Pokedex;