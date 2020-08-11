import React from 'react';

const formatId = (id) => {
    if(id > 0 && id < 10) {
        return (`00${id}`);
    } else if(id >= 10 && id < 100) {
        return (`0${id}`);
    } else {
        return id;
    }
}

const Pokecard = ({id, name, type, base_experience}) => {
    return (
        <div className="Pokecard">
            <h2>{name}</h2>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatId(id)}.png`} alt="pokemon-img"/>
            <p>Type: {type} <br />
               EXP: {base_experience}
            </p>
     
        </div>
    )
}

export default Pokecard;