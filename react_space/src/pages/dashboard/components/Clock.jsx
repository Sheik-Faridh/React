import { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { IoIosClock } from 'react-icons/io';
import Accordion from './Accordion';
import Icon from '../../../components/icon';
import 'moment-timezone';

const ClockIcon = () => (
	<Icon prop={{ className: 'inline mx-0.5 mb-1', size: '1.5em' }}>
		<IoIosClock />
	</Icon>
);

const timeZones = [
	{
		name: 'Sydney',
		tz: 'Australia/Sydney',
	},
	{
		name: 'Singapore',
		tz: 'Asia/Singapore',
	},
	{
		name: 'India',
		tz: 'Asia/Kolkata',
	},
	{
		name: 'US/Pacific',
		tz: 'US/Pacific',
	},
	{
		name: 'US/Eastern',
		tz: 'US/Eastern',
	},
	{
		name: 'US/Central',
		tz: 'US/Central',
	},
	{
		name: 'London',
		tz: 'Europe/London',
	},
	{
		name: 'Dubai',
		tz: 'Asia/Dubai',
	},
	{
		name: 'Japan',
		tz: 'Japan',
	},
	{
		name: 'Poland',
		tz: 'Poland',
	},
];

const Clock = ({ index }) => {
	const getCurrentTime = () => Math.round(new Date().getTime() / 1000);

	const [time, setTime] = useState(getCurrentTime());

	const updateTime = () => {
		setTime(getCurrentTime());
	};

	useEffect(() => {
		const timer = setInterval(updateTime, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className='bg-white w-full rounded shadow-md select-none'>
			<Accordion icon={<ClockIcon />} name='World Clock' index={index}>
				<div className='grid grid-cols-3 gap-3 px-4 py-2'>
					{timeZones.map((tz) => (
						<div
							key={tz.tz}
							className='bg-gray-50 px-3 py-1 rounded shadow transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg'
						>
							<div className='text-lg text-gray-700 font-semibold text-center mb-1'>
								{tz.name}
							</div>
							<div className='clock-container rounded shadow'>
								<div className='clock px-3 py-0.5'>
									<div className='date text-gray-600'>
										<Moment unix tz={tz.tz} format='L ddd'>
											{time}
										</Moment>
									</div>
									<div className='time dark-blue'>
										<Moment unix tz={tz.tz} format='LTS'>
											{time}
										</Moment>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</Accordion>
		</div>
	);
};

export default Clock;
