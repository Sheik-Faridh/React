import { useState, useEffect } from 'react';
import {
	ScrollPropsInterface,
	ScrollStateInterface,
} from '../typings/interface';
import { Direction } from '../typings/type';

const useScroll = (props: ScrollPropsInterface = {}) => {
	const { element = null, focusInCB, focusOutCB } = props;

	const getScrollOffset = (offSet: 'x' | 'y', el: Element | null): number => {
		if (el) {
			const viewportOffset = el.getBoundingClientRect();
			return offSet === 'x' ? viewportOffset.left : viewportOffset.top;
		}

		return offSet === 'x' ? window.pageXOffset : window.pageYOffset;
	};

	const setDirection = (
		{ y, x }: ScrollStateInterface,
		el: Element | null
	): Direction | undefined => {
		const yOffset = getScrollOffset('y', el);
		const xOffset = getScrollOffset('x', el);

		if (
			y !== undefined &&
			x !== undefined &&
			yOffset !== undefined &&
			xOffset !== undefined
		) {
			if (y > yOffset) return el ? 'down' : 'up';
			if (y < yOffset) return el ? 'up' : 'down';
			if (x > xOffset) return el ? 'right' : 'left';
			if (x < xOffset) return el ? 'left' : 'right';
		}

		return undefined;
	};
	const [focus, setFocus] = useState<boolean>(false);

	const [scroll, setScroll] = useState<ScrollStateInterface>({
		x: getScrollOffset('x', element),
		y: getScrollOffset('y', element),
		direction: undefined,
		elem: element,
	});

	const handleScroll = () => {
		setScroll((prevState) => ({
			...prevState,
			x: getScrollOffset('x', prevState.elem),
			y: getScrollOffset('y', prevState.elem),
			direction: setDirection(prevState, prevState.elem),
		}));
	};

	const handleFocus = (e: any): void => {
		if (scroll.elem) {
			setFocus(true);
			focusInCB && focusInCB(e);
		}
	};

	const handleBlur = (e: any): void => {
		if (scroll.elem) {
			setFocus(false);
			focusOutCB && focusOutCB(e);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const setElem = (ele: Element | null) => {
		setScroll({
			x: getScrollOffset('x', ele),
			y: getScrollOffset('y', ele),
			direction: undefined,
			elem: ele,
		});
	};

	useEffect(() => {
		if (scroll.elem) {
			scroll.elem.addEventListener('mouseover', handleFocus);
			scroll.elem.addEventListener('mouseleave', handleBlur);

			return () => {
				scroll.elem?.removeEventListener('mouseover', handleFocus);
				scroll.elem?.removeEventListener('mouseleave', handleBlur);
			};
		}
	}, [scroll.elem]);

	return { scroll, focus, setElem };
};

export default useScroll;
