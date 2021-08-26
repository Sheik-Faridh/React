import { Select, Table, Tag } from 'antd';

const leaveStatus = [
	'Pending',
	'Approved',
	'Declined',
	'Cancel Pending',
	'Cancel Approved',
	'Cancel Declined',
];

const year = [
	'2008',
	'2009',
	'2010',
	'2011',
	'2012',
	'2013',
	'2014',
	'2015',
	'2016',
	'2017',
	'2018',
	'2019',
	'2020',
	'2021',
];

const columns = [
	{
		title: 'Data Range',
		dataIndex: ['startDate', 'endDate'],
		render: (text, row, index) => {
			return `${new Date(row.startDate).toLocaleDateString()} - ${new Date(
				row.endDate
			).toLocaleDateString()}`;
		},
	},
	{
		title: 'No of days',
		dataIndex: 'days',
	},
	{
		title: 'Vacation Type',
		dataIndex: 'vacationType',
	},
	{
		title: 'Approver',
		dataIndex: 'approver',
		render: (text) => <a href={() => false}>{text}</a>,
	},
	{
		title: 'Status',
		dataIndex: 'status',
		render: (tag) => {
			const tagColor = {
				Pending: 'orange',
				Approved: '#87d068',
				Declined: '#f50',
				'Cancel Pending': 'cyan',
				'Cancel Approved': '#2db7f5',
				'Cancel Declined': '#108ee9',
			};
			return <Tag color={tagColor[tag]}>{tag}</Tag>;
		},
	},
	{
		title: 'Remarks',
		dataIndex: 'remarks',
	},
];

const data = [
	{
		startDate: new Date().toISOString(),
		endDate: new Date().toISOString(),
		days: 1,
		approver: 'Sheik faridh',
		status: 'Pending',
		remarks: 'Good',
		vacationType: 'maternity',
	},
];

const Track = () => {
	return (
		<div className='w-full p-4 bg-gray-100 rounded shadow-lg'>
			<div className='flex flex-col'>
				<div className='flex flex-row justify-between items-center py-4 px-2 space-x-4'>
					<div className='text-lg font-semibold text-gray-600'>My History</div>
					<div className='flex flex-row space-x-4'>
						<div className='m-0'>
							<Select
								style={{ width: '100%' }}
								placeholder='Choose Leave Status'
								showArrow={false}
							>
								{leaveStatus.map((s) => (
									<Select.Option key={s} value={s}>
										{s}
									</Select.Option>
								))}
							</Select>
						</div>
						<div className='m-0'>
							<Select
								style={{ width: '100%' }}
								placeholder='Choose Year'
								showArrow={false}
							>
								{year.map((y) => (
									<Select.Option key={y} value={y}>
										{y}
									</Select.Option>
								))}
							</Select>
						</div>
					</div>
				</div>
				<div className='bg-white p-2 rounded shadow-md'>
					<Table columns={columns} dataSource={data} />
				</div>
			</div>
		</div>
	);
};

export default Track;
