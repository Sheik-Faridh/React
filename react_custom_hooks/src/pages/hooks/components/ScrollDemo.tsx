import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { message } from 'antd';
import useScroll from '../../../hooks/useScroll';

const ScrollDemo = () => {
	const [addElem, setAddElem] = useState<boolean>(true);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const focusInHandler = () => {
		message.info('Focused In');
	};

	const focusOutHandler = () => {
		message.info('Focused out');
	};

	const { scroll, focus, setElem } = useScroll({
		focusInCB: focusInHandler,
		focusOutCB: focusOutHandler,
	});
	const { x, y, direction } = scroll;

	useEffect(() => {
		addElem && setElem(buttonRef.current);
		!addElem && setElem(null);
	}, [addElem]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setAddElem(e.target.checked);
	};

	return (
		<div className='scroll-container'>
			<label className='label'>Coordinates:</label>
			<pre>{JSON.stringify({ x, y, direction }, undefined, 4)}</pre>
			<div className=''>{focus}</div>
			<div className='checkbox-container'>
				<input
					type='checkbox'
					name='addElem'
					checked={addElem}
					onChange={handleChange}
				/>
				<label>Set Button as Element</label>
			</div>
			<button className='custom' ref={buttonRef}>
				Custom Button
			</button>
		</div>
	);
};

export default ScrollDemo;
