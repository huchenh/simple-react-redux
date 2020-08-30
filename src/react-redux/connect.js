import React from 'react';
import reactReduxContext from './context';
import { bindActionCreators } from '../redux';

export default function(mapStateToProps, actions) {
  return function (WrappedComponent) {
    return class extends React.Component {
      static contextType = reactReduxContext;
      constructor(props, context) {
        super(props);
        this.state = mapStateToProps(context.store.getState());
        if(typeof actions === 'function') {
          this.boundAction = actions(context.store.dispatch)
        }else{
          this.boundAction = bindActionCreators(actions, context.store.dispatch)

        }
      } 
  
      componentDidMount() {
        this.unsubcrible = this.context.store.subscribe(() => this.setState(mapStateToProps(this.context.store.getState())))
      }
  
      componentWillUnmount() {
        this.unsubcrible()
      }
  
      render() {
        return <WrappedComponent {...this.state} {...this.boundAction} /> ;
      }
    }
  }
}