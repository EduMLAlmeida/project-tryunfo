import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import data from './components/data';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      dataState: data,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleButton() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxSum = 210;
    const maxAttr = 90;
    const minAttr = 0;

    if (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && (parseInt(cardAttr1, 10)
        + parseInt(cardAttr2, 10)
        + parseInt(cardAttr3, 10)) <= maxSum
      && parseInt(cardAttr1, 10) <= maxAttr
      && parseInt(cardAttr1, 10) >= minAttr
      && parseInt(cardAttr2, 10) <= maxAttr
      && parseInt(cardAttr2, 10) >= minAttr
      && parseInt(cardAttr3, 10) <= maxAttr
      && parseInt(cardAttr3, 10) >= minAttr
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onInputChange(event) {
    // if ternário na linha abaixo explicado na vídeo-aula da aula 11.2 do course da Trybe.
    const { type, checked, value, name } = event.target;
    const elementValue = type === 'checkbox'
      ? checked : value;
    const elementName = name;
    this.setState({ [elementName]: elementValue }, this.handleButton);
  }

  addNewCard = () => {
    const { state } = this;
    this.setState((prevState) => ({
      // Linha abaixo cria novo array (dentro do estado dataState) guarda dentro dele o estado anterior e adiciona o novo estado. Código retirado da aula ao vivo (11.2).
      dataState: [...prevState.dataState, state],
    }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.addNewCard }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
