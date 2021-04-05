import { useState,useCallback } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { searchAsset } from '../actions/manager';

const useDebounce = (func,delay) => {

    const [id,setId] = useState(null);

    return useCallback(
        (...args) => {
            id && clearTimeout(id);
            setId(setTimeout(() => {
                setId(null);
                func.apply(null,args);
            },delay));
        },
        [func,id,delay]
    )
}

const useSearch = () => {
    const {folder,manager} = useSelector(state => state);
    const dispatch = useDispatch();
    const [inputVal,setInputVal] = useState('');
    const dirName =  manager.currentDir ? folder.find(asset => asset.id === manager.currentDir).name : '';


    const searchHandler = useCallback(
        debouncedValue => {
            dispatch(searchAsset(debouncedValue));
        },
        [dispatch]
    )

    const debouncedHandler = useDebounce(searchHandler,1000);

    const changeHandler = e => {
        setInputVal(e.target.value);
        debouncedHandler(e.target.value);
    }
    
    return {
        inputVal,
        changeHandler,
        dirName
    }

}

export default useSearch;