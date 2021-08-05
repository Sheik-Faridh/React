import { Space } from 'antd';
import { Redirect, useParams } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { cardLists } from '../../../shared/data/hooks';
import {
	HooksListInterface,
	HookPageParamsInterface,
	DemoList,
} from '../../../typings/interface';
import '../styles/hooks.css';
import BreakPointDemo from './BreakPointDemo';
import CopyTextDemo from './CopyTextDemo';
import IndexedDBDemo from './IndexedDBDemo';
import MousePositionDemo from './MousePositionDemo';
import NetworkDemo from './NetworkDemo';
import ScrollDemo from './ScrollDemo';

const Hooks = () => {
	const { id } = useParams<HookPageParamsInterface>();
	const hooksData: HooksListInterface | undefined = cardLists.find(
		(c) => c.id === id
	);

	if (!hooksData) return <Redirect to='/hooks' />;

	const demos: DemoList = {
		Keg1EaD3pF: <BreakPointDemo />,
		ujj099rvZw: <CopyTextDemo />,
		PLqiWymwfd: <NetworkDemo />,
		EzOhjKBTSc: <ScrollDemo />,
		KM57VfCsDV: <IndexedDBDemo />,
		He8tspOQnM: <MousePositionDemo />,
	};

	return (
		<div className='relative'>
			<div className='back-btn'>
				<a href='/hooks/'>Go Back</a>
			</div>
			<div className='hook-data-container flex-container'>
				<div className='image-wrapper'>
					<img src={hooksData.imageUrl} alt='Hooks' />
				</div>
				<h1 className='title'>{hooksData.name} Hook</h1>
				<div className='hooks-content'>
					<p>{hooksData.content}</p>
				</div>
				<Space size={[20, 20]} wrap align='start'>
					<div className='code-container'>
						<div className='source-code-link'>
							<a href={hooksData.link}>view full code</a>
						</div>
						<SyntaxHighlighter
							language='typescript'
							style={nightOwl}
							wrapLongLines={true}
						>
							{hooksData.code}
						</SyntaxHighlighter>
					</div>
					<div className='demo-container'>{demos[hooksData.id]}</div>
				</Space>
			</div>
		</div>
	);
};

export default Hooks;
