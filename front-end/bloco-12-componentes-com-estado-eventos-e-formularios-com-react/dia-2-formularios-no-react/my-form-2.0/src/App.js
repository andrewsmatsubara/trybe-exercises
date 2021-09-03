import React from 'react';
import DadosPessoais from './DadosPessoais';

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
      <div>
        <DadosPessoais name='nome' handleChange={this.handleChange} value={this.state.nome}/>
      </div>
    );
  }
}

export default App;
