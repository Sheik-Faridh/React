import { useState, useEffect, forwardRef } from 'react';
import { message } from 'antd';
import useDB from '../../../hooks/useDB';
import { RecordsInterface } from '../../../typings/interface';

const Records = ({
	record,
	handleEdit,
	setRecords,
}: {
	record: RecordsInterface;
	handleEdit: (args: any) => void;
	setRecords: (args: any) => void;
}) => {
	const { deleteEntity } = useDB();

	const handleSuccess = () => {
		setRecords((prevState: any): any =>
			prevState.filter((r: RecordsInterface): boolean => r.id !== record.id)
		);
		message.success('Record deleted successfuly');
	};

	const handleDelete = () => {
		deleteEntity('people', record.id)
			.then(handleSuccess)
			.catch((err: Error) => message.error(err.message));
	};

	return (
		<tr>
			<td>{record.id} </td>
			<td>{record.name} </td>
			<td>{record.email} </td>
			<td>{record.age} </td>
			<td>
				<button className='custom' onClick={() => handleEdit(record)}>
					Edit
				</button>
				<button className='danger' onClick={handleDelete}>
					Delete
				</button>
			</td>
		</tr>
	);
};

const IndexedDBRecords = forwardRef((props, ref: any) => {
	const [records, setRecords] = useState<any>([]);
	const { db, getAllEntities } = useDB();
	const { connected } = db;

	const handleError = (error: Error): void => {
		message.error(error.message);
	};

	const handleEdit = (data: RecordsInterface): void => {
		ref.current.updateAction(data);
	};

	const getRecords = () =>
		getAllEntities('people').then(setRecords).catch(handleError);

	useEffect(() => {
		connected && getRecords();
	}, [connected]);

	return (
		<div className='record-container'>
			{records.length ? (
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Age</th>
						</tr>
					</thead>
					<tbody>
						{records.map(
							(r: RecordsInterface): JSX.Element => (
								<Records
									key={r.id}
									record={r}
									handleEdit={handleEdit}
									setRecords={setRecords}
								/>
							)
						)}
					</tbody>
				</table>
			) : (
				<p> No Record Found</p>
			)}
		</div>
	);
});

export default IndexedDBRecords;
