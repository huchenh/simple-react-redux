import React from 'react';
import ReactDOM from 'react-dom';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

class App extends React.Component {

  render() {
    return <>
    <Counter1 />
    <Counter2 />
    </>
  }
}




ReactDOM.render(<App/>, document.getElementById('root'));

