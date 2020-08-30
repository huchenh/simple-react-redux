import React from 'react';
import reactReduxContext from './context';

export default class extends React.Component {

  render() {
    <reactReduxContext.Provider value={{store: this.props.store}}>
      { this.props.children }
    </reactReduxContext.Provider>
  }
}