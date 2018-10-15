import {createStore} from 'redux'
import {counter} from './reducers'
//create  Store
const store = createStore(counter)
console.log(store,store.getState());
export default store