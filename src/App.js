import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './App.css';

class App extends Component {
    render () {
        return (
            <div className="pokemons">
                <Pokedex />
            </div>
        )
    }
}

export default App;
