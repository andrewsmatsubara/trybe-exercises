import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.upperCase = this.upperCase.bind(this);
    this.blur = this.blur.bind(this);
    this.criarEstado = this.criarEstado.bind(this);
    this.radioButtonValidation = this.radioButtonValidation.bind(this);
    this.mouseEnterCargo = this.mouseEnterCargo.bind(this);
    this.criaDiv = this.criaDiv.bind(this);
    this.limpaCampos = this.limpaCampos.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estados: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"],
      tipo: ["Casa", "Apartamento"],
      resumo: '',
      cargo: '',
      descricao: '',
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

  radioButtonValidation({ target }) {
    const { name } = target;
    const value = target.value;

    for (let i = 0; i <= this.state.tipo.length; i += 1) {
      if (value === 'Casa') {
        this.setState({
          [name]: 'Casa',
        });
      } else {
        this.setState({
          [name]: 'Apartamento',
        });
      }
    }
  }

  mouseEnterCargo({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  criaDiv(event) {
    const divRoot = document.querySelector('#root');
    const novaDiv = document.createElement('div');
    novaDiv.className = 'nova-div';

    novaDiv.innerHTML = `${this.state.nome} 
    ${this.state.email} 
    ${this.state.cpf} 
    ${this.state.endereco} 
    ${this.state.cidade} 
    ${this.state.estado} 
    ${this.state.tipo} 
    ${this.state.resumo} 
    ${this.state.cargo} 
    ${this.state.descricao}`;

    divRoot.appendChild(novaDiv);

    event.preventDefault();
  }

  limpaCampos() {
    const novaDiv = document.querySelector('.nova-div');

    this.setState({
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estados: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"],
      tipo: ["Casa", "Apartamento"],
      resumo: '',
      cargo: '',
      descricao: '',
      submit: 'Enviar',
      limpar: '',
    });
    novaDiv.remove();
  }

  render() {
    return (
      <form className='info' onSubmit={this.criaDiv}>
        <fieldset>
          <input type='text' name='nome' maxLength='40' onChange={this.upperCase} value={this.state.nome} required />
          <input type='text' name='email' maxLength='50' onChange={this.handleChange} value={this.state.email} required />
          <input type='text' name='cpf' maxLength='11' onChange={this.handleChange} value={this.state.cpf} required />
          <input type='text' name='endereco' maxLength='200' onChange={this.handleChange} value={this.state.endereco} required />
          <input type='text' name='cidade' maxLength='28' onChange={this.handleChange} value={this.state.cidade} onBlur={this.blur} required />
          <select name='estado' onChange={this.criarEstado} required>
            {this.state.estados.map((estado) => (<option key={estado}>{estado}</option>))}
          </select>
          <label onChange={this.radioButtonValidation}>
            <input type='radio' value='Casa' name='tipo' />Casa
            <input type='radio' value='Apartamento' name='tipo' />Apartamento
          </label>
        </fieldset>
        <fieldset>
          <textarea name='resumo' maxLength='1000' onChange={this.handleChange} value={this.state.resumo} required />
          <textarea name='cargo' maxLength='40' onChange={this.mouseEnterCargo} value={this.state.cargo} required />
          <input type='text' name='descricao' maxLength='500' onChange={this.handleChange} value={this.state.descricao} required />
        </fieldset>
        <button type='submit'>Submit</button>
        <button type='reset' onClick={this.limpaCampos}>Limpar</button>
      </form>
    );
  }
}

export default App;

// https://stackoverflow.com/questions/52902613/how-can-i-add-required-attribute-to-the-fileds-in-react-js
// https://stackoverflow.com/questions/38911413/how-to-split-a-string-to-an-array-of-integers
// https://stackoverflow.com/questions/62949930/create-rows-of-dynamic-dropdowns-based-on-value-of-another-dropdown-in-react