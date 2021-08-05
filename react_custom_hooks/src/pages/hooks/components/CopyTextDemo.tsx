import { useEffect } from 'react';
import { Button, message } from 'antd';
import useCopyText from '../../../hooks/useCopyText';

const CopyTextDemo = () => {
	const { copyStatus, copyText } = useCopyText();

	const handleClick = () => {
		copyText('This is a copied text');
	};

	useEffect(() => {
		copyStatus === 'copied' && message.success('copied');
		copyStatus === 'failed' && message.error('Failed to copy the text');
	}, [copyStatus]);

	return (
		<div className='copy-text-wrapper'>
			<Button type='primary' onClick={handleClick}>
				Copy Text
			</Button>
		</div>
	);
};

export default CopyTextDemo;
