import { useRef } from 'react';
import IndexedDBForm from './IndexedDBForm';
import IndexedDB from '../../../iDB/IndexedDB';
import IndexedDBRecords from './IndexedDBRecords';

const IndexedDBDemo = () => {
	const iDBRef = useRef();

	return (
		<IndexedDB
			name='MyDB'
			version={1}
			objectStoresMeta={[
				{
					store: 'people',
					storeSchema: [
						{ name: 'name', keyPath: 'name', options: { unique: false } },
						{ name: 'email', keyPath: 'email', options: { unique: true } },
						{ name: 'age', keyPath: 'age', options: { unique: false } },
					],
				},
			]}
		>
			<div className='indexed-db-container'>
				<h1 className='text-center'>IndexedDB Form</h1>
				<IndexedDBForm ref={iDBRef} />
				<IndexedDBRecords ref={iDBRef} />
			</div>
		</IndexedDB>
	);
};

export default IndexedDBDemo;
