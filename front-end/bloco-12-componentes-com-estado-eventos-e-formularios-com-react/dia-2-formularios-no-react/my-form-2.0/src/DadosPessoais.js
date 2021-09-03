import React from 'react';

class DadosPessoais extends React.Component {
    render() {
        const { handleChange, value, name } = this.props;
        return (
            <fieldset>
                <input type='text' maxLength='40' onChange={handleChange} value={value} name={name} required/>
            </fieldset>
        );
    }
}

export default DadosPessoais;

// https://stackoverflow.com/questions/52902613/how-can-i-add-required-attribute-to-the-fileds-in-react-js