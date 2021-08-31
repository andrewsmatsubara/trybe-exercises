import React from 'react';
import pokemons from './data';

class Pokemon extends React.Component {
    render() {
        return <div>
            <h1>{pokemons.name}</h1>
        </div>
    }
}

export default Pokemon;