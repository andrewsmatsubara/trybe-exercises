import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value.toUpperCase(),
    });
  }

  render() {
    return (
      <fieldset>
        <input name='nome' maxLength='40' onChange={this.handleChange} value={this.state.nome}/>
      </fieldset>
    );
  }
}

export default App;

// https://stackoverflow.com/questions/52902613/how-can-i-add-required-attribute-to-the-fileds-in-react-js
