import { combineReducer } from '../redux'
import counter1 from './counter1';
import counter2 from './counter2';


export default combineReducer({
  counter1,
  counter2
});
