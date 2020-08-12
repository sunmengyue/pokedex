import React from 'react';
import './Pokecard.css';

const formatId = (id) => id > 99 ? id : `00${id}`.slice(-3);


const Pokecard = ({id, name, type, exp}) => {
    return (
        <div className="pokecard">
            <h2 className="pokecard-title">{name}</h2>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatId(id)}.png`} alt="pokemon-img"/>
            <p className="pokecard-data">Type: {type} <br />
               EXP: {exp}
            </p>
        </div> 
    )
}

export default Pokecard;