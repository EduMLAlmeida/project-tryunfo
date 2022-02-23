import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form
          cardName="teste"
          cardDescription="teste"
          cardAttr1="1"
          cardAttr2="2"
          cardAttr3="3"
          cardImage="teste"
          cardRare="teste"
          cardTrunfo={ false }
          hasTrunfo={ false }
          isSaveButtonDisabled={ () => {} }
          onInputChange={ () => {} }
          onSaveButtonClick={ () => {} }
        />
        <Card
          cardName="teste"
          cardDescription="teste"
          cardAttr1="1"
          cardAttr2="2"
          cardAttr3="3"
          cardImage="teste"
          cardRare="teste"
          cardTrunfo={ false }
        />
      </div>
    );
  }
}

export default App;
