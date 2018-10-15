import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from './reducers'
//create  Store
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))
)
console.log(store,store.getState());
export default store