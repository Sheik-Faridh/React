import { useState, useEffect } from 'react';
import { MouseMovementInterface } from '../typings/interface';

const useMousePosition = () => {
	const [position, setPosition] = useState<MouseMovementInterface>({
		x: 0,
		y: 0,
	});

	const handlePosition = (e: MouseEvent): void => {
		setPosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		window.addEventListener('mousemove', handlePosition);

		return () => {
			window.removeEventListener('mousemove', handlePosition);
		};
	}, []);

	return position;
};

export default useMousePosition;
