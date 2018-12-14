import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = (state, action) => {
  state = undefined;
}
const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  //const createLogger = require('redux-logger');
  //middlewares.push(createLogger());
}

const configureStore = (preloadedState = {})=> (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
