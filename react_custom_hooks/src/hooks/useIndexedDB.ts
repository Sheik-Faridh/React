import { useEffect, useReducer } from 'react';
import {
	IndexedDBProps,
	ActionPropsInterface,
	DBStateInterface,
} from '../typings/interface';


const useDBInit = (
	props: IndexedDBProps,
	dispatch: (args: ActionPropsInterface) => void
) => {
	const { name, version, objectStoresMeta } = props;

	useEffect(() => {
		let db: any;

		const request = indexedDB.open(name, version);

		request.onupgradeneeded = (event: any): void => {
			db = event.target.result;

			for (const storeMeta of objectStoresMeta) {
				// create the object store
				let store = storeMeta.storeConfig?.keyPath
					? db.createObjectStore(storeMeta.store, {
							keyPath: storeMeta.storeConfig.keyPath,
					  })
					: db.createObjectStore(storeMeta.store, {
							keyPath: 'id',
							autoIncrement: true,
					  });

				// create an index on the unique property
				for (const schema of storeMeta.storeSchema) {
					store.createIndex(schema.name, schema.keyPath, {
						unique: schema.options.unique,
					});
				}
			}

			dispatch({
				type: 'DB',
				payload: {
					connected: true,
					instance: db,
				},
			});
		};

		request.onsuccess = (event: any): void => {
			db = event.target.result;

			dispatch({
				type: 'DB',
				payload: {
					connected: true,
					instance: db,
				},
			});
		};

		request.onerror = (event: any): void => {
			console.error(`Database error: ${event.target.errorCode}`);

			dispatch({
				type: 'DB',
				payload: {
					connected: false,
					instance: null,
				},
			});
		};

		return () => {
			db && db.close();
		};
	}, [name, version]);

	return {
		name,
		version,
	};
};

const getInitialState = ({
	name,
	version,
}: {
	name: string;
	version: number;
}): DBStateInterface => ({
	name,
	version,
	db: { connected: false, instance: null },
});

const reducer = (state: DBStateInterface, action: ActionPropsInterface) => {
	const { type } = action;

	switch (type) {
		case 'DB':
			return { ...state, db: action.payload };
		default:
			return state;
	}
};

const useIndexedDB = (props: IndexedDBProps) => {
	const { name, version } = props;
	const [state, dispatch] = useReducer(
		reducer,
		getInitialState({ name, version })
	);
	useDBInit(props, dispatch);
	return {
		state,
		dispatch,
	};
};

export default useIndexedDB;