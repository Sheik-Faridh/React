import { ReactNode } from 'react';
import { Direction } from './type';

export interface BreakPointSizeInterface {
	xs: number;
	sm: number;
	md: number;
}

export interface MouseMovementInterface {
	x: number;
	y: number;
}

export interface ScrollPropsInterface {
	element?: Element | null;
	focusInCB?: ((args: any) => void) | undefined;
	focusOutCB?: ((args: any) => void) | undefined;
}

export interface ScrollStateInterface {
	x: number;
	y: number;
	direction?: Direction | undefined;
	elem: Element | null;
}

export interface StoreSchemaInterface {
	name: string;
	keyPath: string;
	options: {
		unique: boolean;
	};
}

export interface StoreMetaInterface {
	store: string;
	storeConfig?: { keyPath: string | string[] };
	storeSchema: StoreSchemaInterface[];
}

export interface IndexedDBProps {
	name: string;
	version: number;
	objectStoresMeta: StoreMetaInterface[];
}

export interface IndexedDBProviderProps extends IndexedDBProps {
	children: ReactNode;
}

export interface DBStateInterface {
	name: string;
	version: number;
	db: {
		connected: boolean;
		instance: any;
	};
}

export interface HooksListInterface {
	id: string;
	name: string;
	description: string;
	code: string;
	link: string;
	content: string;
	imageUrl: string;
}

export interface HookPageParamsInterface {
	id: string;
}

export interface DemoList {
	[key: string]: JSX.Element;
}

export interface IndexedDBFormPropsInterface {
	name: string;
	email: string;
	age: number;
}

export interface ActionPropsInterface {
	type: string;
	payload: any;
}

export interface DBContextInterface {
	state: DBStateInterface;
	dispatch: ((args: ActionPropsInterface) => void) | null;
}

export interface RecordsInterface extends IndexedDBFormPropsInterface {
	id: number;
}

export interface IDBActionChangePropInterface {
	action: 'save' | 'update';
	id: number;
}
