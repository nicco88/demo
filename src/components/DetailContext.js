import React, { createContext } from 'react';

const DetailContext = createContext({
  content: null,
  props: {},
  openModal: () => {},
  destroyModal: () => {},
});

export class DetailProvider extends React.Component {
  openModal = ( content, props = {}) => {
    this.setState({
      content,
      props,
    });
  }

  destroyModal = () => {
    this.setState({
      content: null,
      props: {},
    })
  }

  state = {
    content: null,
    props: {},
    openModal: this.openModal,
    destroyModal: this.destroyModal,
  };

  render() {
    return (
      <DetailContext.Provider value={ this.state }>
        { this.props.children }
      </DetailContext.Provider>
    );
  }
}

export const DetailConsumer = DetailContext.Consumer;
