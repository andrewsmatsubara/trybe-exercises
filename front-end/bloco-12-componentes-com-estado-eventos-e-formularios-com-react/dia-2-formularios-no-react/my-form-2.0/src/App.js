import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.upperCase = this.upperCase.bind(this);
    this.blur = this.blur.bind(this);
    this.criarEstado = this.criarEstado.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estados: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"],
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

  blur({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const modifiedValue = value.split('').map((element) => {
      let number = Number(element);
      return isNaN(number) ? element : number;
    })

    if (typeof modifiedValue[0] === 'number') {
      this.setState({
        [name]: '',
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  criarEstado({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <fieldset>
        <input type='text' name='nome' maxLength='40' onChange={this.upperCase} value={this.state.nome} required />
        <input type='text' name='email' maxLength='50' onChange={this.handleChange} value={this.state.email} required />
        <input type='text' name='cpf' maxLength='11' onChange={this.handleChange} value={this.state.cpf} required />
        <input type='text' name='endereco' maxLength='200' onChange={this.handleChange} value={this.state.endereco} required />
        <input type='text' name='cidade' maxLength='28' onChange={this.handleChange} value={this.state.cidade} onBlur={this.blur} required />
        <select name='estado' onChange={this.criarEstado} required>
          {this.state.estados.map((estado) => (<option key={estado}>{estado}</option>))}
        </select>
      </fieldset>
    );
  }
}

export default App;

// https://stackoverflow.com/questions/52902613/how-can-i-add-required-attribute-to-the-fileds-in-react-js
// https://stackoverflow.com/questions/38911413/how-to-split-a-string-to-an-array-of-integers
// https://stackoverflow.com/questions/62949930/create-rows-of-dynamic-dropdowns-based-on-value-of-another-dropdown-in-react