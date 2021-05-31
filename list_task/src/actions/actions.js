import { UPDATE_LIST } from './types';
import { handleError } from '../helpers/utils';

class Actions {

    static updateList = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({ type: UPDATE_LIST, payload: data }))
        .catch(err => {
            handleError('Failed to get the posts. Please try again.',err);
            dispatch({ type: UPDATE_LIST, payload: [] });
        })
    }

}

export default Actions;