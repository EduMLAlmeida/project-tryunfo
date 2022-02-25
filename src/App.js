import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      emptyForm: true,
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

    // Ideia da lógica de habilitar o botão e depois desabilitar com o teste dada pelo Imar.

    this.setState({ emptyForm: false });

    if (
      cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
    ) {
      console.log('teste');
      this.setState({ emptyForm: true });
    }

    if (
      (parseInt(cardAttr1, 10)
        + parseInt(cardAttr2, 10)
        + parseInt(cardAttr3, 10)) > maxSum
      || parseInt(cardAttr1, 10) > maxAttr
      || parseInt(cardAttr1, 10) < minAttr
      || parseInt(cardAttr2, 10) > maxAttr
      || parseInt(cardAttr2, 10) < minAttr
      || parseInt(cardAttr3, 10) > maxAttr
      || parseInt(cardAttr3, 10) < minAttr
    ) {
      this.setState({ emptyForm: true });
    }
  }

  onInputChange(event) {
    // if ternário na linha abaixo explicado na vídeo-aula da aula 11.2 do course da Trybe.
    const { type, checked, value, name } = event.target;
    const elementValue = type === 'checkbox'
      ? checked : value;
    const elementName = name;
    this.setState({ [elementName]: elementValue }, () => this.handleButton());
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
      emptyForm,
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
          isSaveButtonDisabled={ emptyForm }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ () => {} }
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
