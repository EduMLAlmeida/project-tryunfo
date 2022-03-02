import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardsDeck extends React.Component {
  render() {
    const {
      dataState,
    } = this.props;

    return (
      // Lógica de renderização dentro do return copiada da aula ao vivo do course (aula 11.2).
      <>
        {
          dataState.map((element) => (
            <div key={ element.cardName }>
              <Card
                cardName={ element.cardName }
                cardDescription={ element.cardDescription }
                cardAttr1={ element.cardAttr1 }
                cardAttr2={ element.cardAttr2 }
                cardAttr3={ element.cardAttr3 }
                cardImage={ element.cardImage }
                cardRare={ element.cardRare }
                cardTrunfo={ element.cardTrunfo }
              />
            </div>
          ))
        }
      </>
    );
  }
}

CardsDeck.propTypes = {
  dataState: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardsDeck;
