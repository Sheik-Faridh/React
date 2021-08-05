import { HooksListInterface } from '../../typings/interface';
import {
	useBreakPointCode,
	useCopyTextCode,
	useNetworkCode,
	useScrollCode,
	useIndexedDBCode,
	useMousePositionCode,
} from './code';

export const cardLists: HooksListInterface[] = [
	{
		id: 'Keg1EaD3pF',
		name: 'useBreakPoint',
		description: 'To findout the current responsive media breakpoint',
		content:
			'The useBreakPoint hook is used to get the breakpoint based on the window outerwidth',
		code: useBreakPointCode,
		link: '',
		imageUrl:
			'https://images.unsplash.com/photo-1545670723-196ed0954986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
	},
	{
		id: 'ujj099rvZw',
		name: 'useCopyText',
		description: 'To copy the text to the clipboard API',
		content: 'Click the button to copy the text using clipboard API',
		code: useCopyTextCode,
		link: '',
		imageUrl:
			'https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
	},
	{
		id: 'KM57VfCsDV',
		name: 'useIndexedDB',
		description: 'To perform CRUD operations in indexedDB',
		content:
			'The useBreakPoint hook is used to get the breakpoint based on the window outerwidth',
		code: useIndexedDBCode,
		link: '',
		imageUrl:
			'https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
	},
	{
		id: 'He8tspOQnM',
		name: 'useMousePosition',
		description: 'To get the mouse position',
		content: 'To get the current position of mouse in screen',
		code: useMousePositionCode,
		link: '',
		imageUrl:
			'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
	},
	{
		id: 'PLqiWymwfd',
		name: 'useNetwork',
		description: 'To identify the user network status',
		content:
			'Toggle the internet connection via network tab in console window to findout the network status',
		code: useNetworkCode,
		link: '',
		imageUrl:
			'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
	},
	{
		id: 'EzOhjKBTSc',
		name: 'useScroll',
		description: 'To get the scroll position of an element',
		content:
			'To get the element position based on the viewport or window scroll position. Additionally the hooks accept the focus in and focus out event callback for an element',
		code: useScrollCode,
		link: '',
		imageUrl:
			'https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
	},
];
