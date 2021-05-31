import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { UPDATE_LIST } from './actions/types';

const initialState = {
    lists: []
}

const reducer = (state = initialState, action = {}) => {
    const { type,payload } = action;
    switch(type){
        case UPDATE_LIST:
            return { ...state, lists: payload };
        default:
            return state;
    }
}

export default createStore(reducer,applyMiddleware(thunk));