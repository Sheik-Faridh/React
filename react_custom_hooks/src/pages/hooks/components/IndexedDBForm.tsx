import { useState, forwardRef, useImperativeHandle } from 'react';
import { message } from 'antd';
import classNames from 'classnames';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useDB from '../../../hooks/useDB';
import {
	IndexedDBFormPropsInterface,
	IDBActionChangePropInterface,
	RecordsInterface,
} from '../../../typings/interface';

const initialValues: IndexedDBFormPropsInterface = {
	name: '',
	email: '',
	age: 0,
};

const schema = yup.object().shape({
	name: yup.string().min(2).max(20).required(),
	age: yup.number().required().positive().integer(),
	email: yup.string().email().required(),
});

const IndexedDBForm = forwardRef((props, ref: any) => {
	const [dbAction, setDBAction] = useState<IDBActionChangePropInterface>({
		action: 'save',
		id: 0,
	});
	const { create, updateEntity } = useDB();

	useImperativeHandle(ref, () => ({
		updateAction: (data: RecordsInterface) => {
			const { id, name, email, age } = data;
			setValues({
				name,
				email,
				age,
			});
			setDBAction({
				id,
				action: 'update',
			});
		},
	}));

	const submitHandler = async (
		values: IndexedDBFormPropsInterface,
		{ resetForm }: { resetForm: any }
	): Promise<void> => {
		try {
			if (dbAction.action === 'save') {
				await create('people', values);
				message.success('Records inserted successfully');
			} else {
				await updateEntity('people', 'id', dbAction.id, values);
				message.success('Records updated successfully');
			}
			resetForm({ values: '' });
		} catch (error) {
			message.error(error.message);
		}
	};

	const form = useFormik<IndexedDBFormPropsInterface>({
		initialValues,
		validationSchema: schema,
		onSubmit: submitHandler,
	});

	const { errors, values, touched, setValues } = form;

	const handleReset = (): void => {
		setValues(initialValues);
		setDBAction({ id: 0, action: 'save' });
	};

	return (
		<form onSubmit={form.handleSubmit}>
			<div className='mb-10px'>
				<label className='form-label'>Name</label>
				<input
					className={classNames({
						error: touched.name && errors.name ? true : false,
					})}
					type='text'
					placeholder='Enter Name'
					name='name'
					value={values.name}
					onChange={form.handleChange}
					autoComplete='off'
				/>
				<span className='error-msg'>{touched.name && errors.name}</span>
			</div>
			<div className='mb-10px'>
				<label className='form-label'>Email</label>
				<input
					className={classNames({
						error: touched.email && errors.email ? true : false,
					})}
					type='email'
					placeholder='Enter Email'
					name='email'
					value={values.email}
					onChange={form.handleChange}
					autoComplete='off'
				/>
				<span className='error-msg'>{touched.email && errors.email}</span>
			</div>
			<div className='mb-10px'>
				<label className='form-label'>Age</label>
				<input
					className={classNames({
						error: touched.age && errors.age ? true : false,
					})}
					type='number'
					placeholder='Enter Age'
					name='age'
					value={values.age}
					onChange={form.handleChange}
					autoComplete='off'
				/>
				<span className='error-msg'>{touched.age && errors.age}</span>
			</div>
			<div className='text-center'>
				<button type='submit' className='primary'>
					{dbAction.action}
				</button>
				{dbAction.action === 'update' && (
					<button type='button' className='custom' onClick={handleReset}>
						Reset
					</button>
				)}
			</div>
		</form>
	);
});

export default IndexedDBForm;
