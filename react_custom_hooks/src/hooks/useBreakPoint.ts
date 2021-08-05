import { useState, useCallback, useEffect } from 'react';
import { debounce, DebouncedFunc } from 'lodash';
import { BreakPointSizeInterface } from '../typings/interface';
import { BreakPoint } from '../typings/type';

const breakPointSizes: BreakPointSizeInterface = {
	xs: 320,
	sm: 720,
	md: 1024,
};

const useBreakPoint = () => {
	const getBreakPoint = (): BreakPoint => {
		const width: number = window.outerWidth;
		switch (true) {
			case width < breakPointSizes.xs:
				return 'xs';
			case width >= breakPointSizes.xs && width < breakPointSizes.sm:
				return 'sm';
			case width >= breakPointSizes.sm && width < breakPointSizes.md:
				return 'md';
			default:
				return 'lg';
		}
	};

	const [breakPoint, setBreakPoint] = useState<string>(getBreakPoint());

	const updateBreakPoint = (): void => {
		setBreakPoint(getBreakPoint());
	};

	const handleResize = useCallback<DebouncedFunc<() => void>>(
		debounce(updateBreakPoint, 100),
		[]
	);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return breakPoint;
};

export default useBreakPoint;
