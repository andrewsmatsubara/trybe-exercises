import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
    render() {
        return (
        <Pokedex pokemons={pokemons}/>
        )
    }
}
export default App;