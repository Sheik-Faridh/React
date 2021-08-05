import { IDBContext } from '../context';
import useIndexedDB from "../hooks/useIndexedDB";
import { IndexedDBProviderProps } from "../typings/interface";

const IndexedDB = ({ children,...props }: IndexedDBProviderProps) => {
    
    const dbConfig = useIndexedDB(props);
    return <IDBContext.Provider value={dbConfig}>{ children }</IDBContext.Provider>;
}

export default IndexedDB;