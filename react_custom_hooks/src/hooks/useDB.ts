import { useContext } from 'react';
import { IDBContext } from '../context';

const useDB = () => {
	const { state } = useContext(IDBContext);
	const { name, version, db } = state;

	const connect = () =>
		new Promise((resolve, reject) => {
			const request = indexedDB.open(name, version);

			request.onsuccess = (event: any) => {
				const db = event.target.result;
				resolve(db);
			};

			request.onerror = (event: any) => {
				reject(event.target.error.message);
			};
		});

	const getStore = (storeName: string, mode: string) => {
		const txn = db.instance.transaction([storeName], mode);
		const store = txn.objectStore(storeName);

		txn.onerror = (event: any): void => {
			throw new Error(`Transaction Failed: ${event.target.error.message}`);
		};

		return store;
	};

	const create = (storeName: string, data: any): Promise<unknown> =>
		new Promise((resolve, reject) => {
			const store = getStore(storeName, 'readwrite');
			let request = store.add(data);
			request.onsuccess = (event: any) => {
				resolve(event);
			};

			request.onerror = (event: any) => {
				reject(event.target.error.message);
			};
		});

	const getEntity = (
		storeName: string,
		prop: string,
		val: any
	): Promise<unknown> =>
		new Promise((resolve, reject) => {
			const store = getStore(storeName, 'readonly');
			const index = prop === 'id' ? store : store.index(prop);
			let query = index.get(val);
			query.onsuccess = (event: any) => {
				resolve(event.target.result);
			};

			query.onerror = (event: any) => {
				reject(event.target.error.message);
			};
		});

	const getAllEntities = (storeName: string): Promise<unknown> =>
		new Promise((resolve, reject) => {
			const store = getStore(storeName, 'readonly');

			const request = store.getAll();

			request.onsuccess = (event: any) => {
				resolve(event.target.result);
			};

			request.onerror = (event: any) => {
				reject(event.target.error.message);
			};
		});

	const updateEntity = (
		storeName: string,
		prop: string,
		val: string | number,
		newData: any
	): Promise<unknown> =>
		new Promise((resolve, reject) => {
			const store = getStore(storeName, 'readwrite');

			const index = prop === 'id' ? store : store.index(prop);
			let query = index.get(val);
			query.onsuccess = (event: any) => {
				const data = event.target.result || {};

				const req = store.put({ ...data, ...newData });

				req.onsuccess = (event: any): void => {
					resolve(event.target.result);
				};

				req.onerror = (event: any): void => {
					reject(event.target.error.message);
				};
			};

			query.onerror = (event: any) => {
				reject(event.target.error.message);
			};
		});

	const deleteEntity = (storeName: string, id: any): Promise<unknown> =>
		new Promise((resolve, reject) => {
			const store = getStore(storeName, 'readwrite');
			let query = store.delete(id);
			query.onsuccess = (event: any) => {
				resolve(event);
			};

			query.onerror = (event: any) => {
				reject(event.target.error.message);
			};
		});

	return {
		db,
		create,
		getAllEntities,
		getEntity,
		updateEntity,
		deleteEntity,
	};
};

export default useDB;
