import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './redux'
let store = createStore(reducer);

function reducer(state={number: 0}, action) {
  switch(action.type) {
    case "ADD":
      return {number: state.number + 1}
    case "MINUS":
      return {number: state.number - 1}
    default: 
      return state;
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: store.getState().number
    }
  }
  componentDidMount() {
    this.unsubcribe =  store.subscribe(()=>{
      this.setState({
        number: store.getState().number
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
        <button onClick={ () => store.dispatch({type: "ADD"}) }>+</button>
        <button onClick={ () => store.dispatch({type: 'MINUS'}) } >-</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));

/* 

let counterValue = document.getElementById('counterVal');
let addBtn = document.getElementById('addBtn');
let minusBtn = document.getElementById('minusBtn');



let store = createStore(reducer);

function render(){
  counterValue.innerHTML = store.getState().number;
}

render()

store.subscribe(render)

addBtn.addEventListener('click', () => store.dispatch({type: "ADD"}));
minusBtn.addEventListener('click', () => store.dispatch({type: 'MINUS'})) */