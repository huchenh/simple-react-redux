import React from 'react';
import store from '../store/index';
import actions from '../store/actions/counter1';
import {bindActionCreators} from '../redux'

const boundActions = bindActionCreators(actions, store.dispatch);

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: store.getState().counter1.number
    }
  }
  componentDidMount() {
    this.unsubcribe =  store.subscribe(()=>{
      this.setState({
        number: store.getState().counter1.number
      })
    })
  }

  componentWillUnmount() {
    this.unsubcribe()
  }

  render() {
    return (
      <div>
        <p> { this.state.number } </p>
        <button onClick={ boundActions.add }>+</button>
        <button onClick={ boundActions.minus } >-</button>
      </div>
    )
  }
}