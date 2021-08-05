import useBreakPoint from '../../../hooks/useBreakPoint';

const BreakPointDemo = () => {
	const breakPoint = useBreakPoint();

	return (
		<div className='break-point-wrapper'>
			<div className='break-point'>{breakPoint}</div>
		</div>
	);
};

export default BreakPointDemo;
