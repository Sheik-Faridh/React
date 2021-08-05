import { useState, useEffect } from 'react';

const useNetwork = () => {
	const [online, setOnline] = useState<boolean>(window.navigator.onLine);

	const handleOnline = (): void => {
		setOnline(true);
	};

	const handleOffline = (): void => {
		setOnline(false);
	};

	useEffect(() => {
		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);

		return () => {
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
		};
	}, []);

	return online;
};

export default useNetwork;