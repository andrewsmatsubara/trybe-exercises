import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemons: { name, type, averageWeight, image }
        } = this.props;

        return (
            <div>
                <h1>{name}</h1>
                <p>{type}</p>
                <p>{`AverageWeight: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
    }).isRequired,
}

export default Pokemon;