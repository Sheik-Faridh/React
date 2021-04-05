import { combineReducers } from 'redux';
import folder from './folder';
import file from './file';
import manager from './manager';

export default combineReducers({
    folder,
    file,
    manager
})