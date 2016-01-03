import { createStore, compose, applyMiddleware } from 'redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import { createHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'ducks/reducer';


export default function configureStore(initialState) {

  const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware)
  )(createStore);

  const store = finalCreateStore(rootReducer);
  const history = createHistory();
  syncReduxAndRouter(history, store);

  return {
    store,
    history
  };
}
