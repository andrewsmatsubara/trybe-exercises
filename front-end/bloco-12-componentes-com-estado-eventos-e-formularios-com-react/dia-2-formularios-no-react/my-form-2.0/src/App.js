import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.upperCase = this.upperCase.bind(this);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
    }
  }

  upperCase({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value.toUpperCase(),
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <fieldset>
        <input type='text' name='nome' maxLength='40' onChange={this.upperCase} value={this.state.nome} required/>
        <input type='text' name='email' maxLength='50' onChange={this.handleChange} value={this.state.email} required />
        <input type='text' name='cpf' maxLength='11' onChange={this.handleChange} value={this.state.cpf} required/>
        <input type='text' name='endereco' maxLength='200' onChange={this.handleChange} value={this.state.endereco} />
      </fieldset>
    );
  }
}

export default App;

// https://stackoverflow.com/questions/52902613/how-can-i-add-required-attribute-to-the-fileds-in-react-js
