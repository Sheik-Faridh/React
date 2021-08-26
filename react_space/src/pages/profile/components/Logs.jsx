import { useState } from 'react';
import parse from 'html-react-parser';
import TimeAgo from 'react-timeago';
import englishStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import ProfileSrc from '../../../assets/image/profile.jpeg';

const formatter = buildFormatter(englishStrings);

const logData = [
	{
		userName: 'N Sheik Faridh',
		image: ProfileSrc,
		updatedAt: new Date().toISOString(),
		logs: [
			{
				field: 'Mobile Number',
				oldvalue: null,
				newValue: '8825976090',
			},
			{
				field: 'Bank Account Number',
				oldvalue: null,
				newValue: 'XXXXXXXXXXXXXXXXXXX',
			},
			{
				field: 'Current Address Line 1',
				oldvalue: null,
				newValue: '5-2-32',
			},
			{
				field: 'Current Address Line 2',
				oldvalue: null,
				newValue: 'Natarajan Street',
			},
			{
				field: 'Current Address Line 3',
				oldvalue: null,
				newValue: 'Uthamapalayam',
			},
			{
				field: 'Current Address Line 4',
				oldvalue: null,
				newValue: 'Theni',
			},
			{
				field: 'Date of Birth',
				oldvalue: null,
				newValue: '1996-09-26',
			},
			{
				field: 'Permanent Address Line 1',
				oldvalue: null,
				newValue: '5-2-32',
			},
			{
				field: 'Permanent Address Line 1',
				oldvalue: null,
				newValue: 'Natarajan Street',
			},
			{
				field: 'Permanent Address Line 1',
				oldvalue: null,
				newValue: 'Uthamapalayam',
			},
			{
				field: 'Permanent Address Line 1',
				oldvalue: null,
				newValue: 'Theni',
			},
		],
	},
];

const LogContainer = ({ log }) => {
	const [active, setActive] = useState(true);

	return (
		<div className='flex flex-col border-2 border-gray-100 bg-gray-50 rounded-md shadow-xl'>
			<div
				className='flex justify-between items-center w-full h-auto px-3 py-2 cursor-pointer hover:shadow-md hover:bg-gray-100 hover:border-2 hover:border-gray-700'
				onClick={() => setActive(!active)}
			>
				<div className='inline-flex mb-2 space-x-4'>
					<div className='w-9 h-11 rounded-md shadow'>
						<img className='w-full h-full' alt='Profile Pic' src={log.image} />
					</div>
					<div className='text-base'>
						<div className='font-semibold text-indigo-700'>{log.userName}</div>
						<div className='font-normal text-sm italic text-gray-700'>
							<TimeAgo
								date={log.updatedAt}
								className='mr-2'
								formatter={formatter}
							/>
							({new Date(log.updatedAt).toDateString()} at{' '}
							{new Date(log.updatedAt).toLocaleTimeString()})
						</div>
					</div>
				</div>
				<label className='grey rounded-full py-1 px-2 font-medium'>
					Updated
				</label>
			</div>
			<ul
				className={`list-disc ml-5 p-2 mb-3 transition-height duration-500 ease-in-out ${
					active ? 'block' : 'hidden'
				}`}
			>
				{log.logs.map((d, i) => (
					<li
						key={`${d.field}-${i}`}
						className='list-inside p-1 text-xs italic'
					>
						<span className='font-semibold not-italic'>{d.field}</span>{' '}
						{parse(
							d.oldvalue
								? `changed from <span class="font-semibold not-italic">${d.oldValue}</span> to <span class="font-semibold not-italic">${d.newValue}</span>`
								: `changed to <span class="font-semibold not-italic">${d.newValue}</span>`
						)}{' '}
					</li>
				))}
			</ul>
		</div>
	);
};

const Logs = () => {
	return (
		<div className='container space-y-2'>
			{logData.map((log) => (
				<LogContainer key={log.updatedAt} log={log} />
			))}
		</div>
	);
};

export default Logs;
