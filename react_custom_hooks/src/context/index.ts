import { createContext } from 'react';
import { DBContextInterface } from '../typings/interface';
export const IDBContext = createContext<DBContextInterface>({
	state: {
		name: '',
		version: 0,
		db: { connected: false, instance: null },
	},
	dispatch: null,
});
