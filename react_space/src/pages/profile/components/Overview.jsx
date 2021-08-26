import { Timeline } from 'antd';

const skills = [
	'jQuery',
	'CSS3',
	'SQL Server',
	'MongoDB',
	'Javascript',
	'AWS Lambda',
	'AWS S3',
	'AWS SQS',
	'AWS SES',
	'AWS SNS',
	'React',
	'Redux',
	'JSON',
	'HTML5',
	'MySQL',
	'PostgreSQL',
	'Node',
	'ExpressJS',
	'NestJS',
	'Prisma',
];

const careers = [
	{ name: 'SPS', designation: 'G1:Programmer' },
	{ name: 'Techaffinity', designation: 'Junior Software Engineer' },
];

const education = [
	{
		degree: 'Bachelor of Engineering (B.E.)',
		branch: 'Civil Engineering',
		instituteName: 'Kumaraguru College of Technology',
		location: 'Coimbatore',
		yearsOfPassing: 2018,
	},
	{
		degree: 'Higher Secondary (12th)',
		branch: '',
		instituteName: 'Santiniketan Matriculation School',
		location: 'Theni',
		yearsOfPassing: 2014,
	},
	{
		degree: 'Secondary (10th)',
		branch: '',
		instituteName: 'Sri Sakthi Vinayagar Matriculation School',
		location: 'Cumbum',
		yearsOfPassing: 2012,
	},
];

const certifications = [
	{ name: 'Freshworks Marketplace App developer', authority: 'Freshworks' },
];

const Overview = () => {
	return (
		<div className='flex flex-col divide-y divide-gray-300 space-y-4'>
			<div className='m-2'>
				<h4 className='text-lg text-gray-600'>Skills</h4>
				<div className='inline-flex flex-wrap space-x-2'>
					{skills.map((skill) => (
						<label key={skill} className='inline blue px-2 py-1 rounded mb-2'>
							{skill}
						</label>
					))}
				</div>
			</div>
			<div className='m-2 pt-2'>
				<h4 className='text-lg text-gray-600'>Career</h4>
				<div className='mt-2'>
					<Timeline>
						{careers.map((career) => (
							<Timeline.Item key={career.name}>
								<div className='inline font-semibold text-gray-800 mr-1'>
									{career.designation}
								</div>
								<div className='inline text-xs italic text-gray-500'>
									{career.name}
								</div>
							</Timeline.Item>
						))}
					</Timeline>
				</div>
			</div>
			<div className='m-2 pt-2'>
				<h4 className='text-lg text-gray-600'>Education</h4>
				<div className='mt-2'>
					<Timeline>
						{education.map((edData) => (
							<Timeline.Item key={edData.degree} color='green'>
								<div className='block'>
									<div className='font-semibold text-gray-800'>
										{[edData.degree, edData.branch].filter((d) => d).join(', ')}
									</div>
								</div>
								<div className='block'>
									<div className='text-sm italic text-gray-600'>
										{[
											edData.instituteName,
											edData.location,
											edData.yearsOfPassing,
										]
											.filter((d) => d)
											.join(', ')}
									</div>
								</div>
							</Timeline.Item>
						))}
					</Timeline>
				</div>
			</div>
			<div className='m-2 pt-2'>
				<h4 className='text-lg text-gray-600'>Certifications</h4>
				<ul className='list-disc mx-4 mb-2'>
					{certifications.map((data) => (
						<li key={data.name}>
							<div className='inline font-semibold text-gray-800 mr-1'>
								{data.name}
							</div>
							<div className='inline text-xs italic text-gray-500'>
								{data.authority}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Overview;
