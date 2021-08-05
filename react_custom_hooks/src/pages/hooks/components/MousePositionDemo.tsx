import useMousePosition from '../../../hooks/useMousePosition';

const MousePositionDemo = () => {
	const { x, y } = useMousePosition();

	return (
		<div className='mouse-point-wrapper'>
			<pre>{JSON.stringify({ x, y }, undefined, 4)}</pre>
		</div>
	);
};

export default MousePositionDemo;
