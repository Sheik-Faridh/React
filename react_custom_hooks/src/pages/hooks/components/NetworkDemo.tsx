import useNetwork from '../../../hooks/useNetwork';

const NetworkDemo = () => {
	const online = useNetwork();

	return (
		<div className='network-status-wrapper'>
			<div className='network-status'>{online ? 'Online' : 'Offline'}</div>
		</div>
	);
};

export default NetworkDemo;
