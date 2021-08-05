import { useState, useCallback, useEffect } from 'react';
import { CopyStatusType, CopyCallbackType } from '../typings/type';

const useCopyText = (successTimeout: number = 2000) => {
	const [copyStatus, setCopyStatus] = useState<CopyStatusType>('Inactive');

	const copyText = useCallback<CopyCallbackType>((text: string): void => {
		navigator.clipboard.writeText(text).then(
			() => setCopyStatus('copied'),
			() => setCopyStatus('failed')
		);
	}, []);

	useEffect(() => {
		if (copyStatus === 'Inactive') return;

		const timer = setTimeout(() => setCopyStatus('Inactive'), successTimeout);

		return () => {
			clearTimeout(timer);
		};
	}, [copyStatus, successTimeout]);

	return {
		copyStatus,
		copyText,
	};
};

export default useCopyText;
