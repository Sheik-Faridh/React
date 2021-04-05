import { Input,Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import useSearch from '../hooks/useSearch';
import styles from '../styles/fileroute.module.css';

const Search = () => {
   
   const { inputVal,changeHandler,dirName } = useSearch();

   return (
         <Col span={6}>
            <Input className={styles.searchInput} size="default" value={inputVal} onChange={changeHandler} placeholder={`Search ${dirName}`} prefix={<SearchOutlined />} /> 
         </Col>
   )
}

export default Search;