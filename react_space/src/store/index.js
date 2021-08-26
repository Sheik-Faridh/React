import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import modalReducer from './modal/reducer';
import dashboardReducer from './dashboard/reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const rootReducer = combineReducers({
  modal: modalReducer,
  dashboard: dashboardReducer,
});

export default createStore(rootReducer, applyMiddleware(...middlewares));
