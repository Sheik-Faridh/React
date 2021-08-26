import { DatePicker, Select } from 'antd';

const reviewers = [
	'Prathapan Sethu',
	'Binu Dasappan',
	'Ansar Shihabudeen',
	'Arun Prasad',
	'Jose Antony',
	'Syam Mohan',
	'Divya Padmanabhan',
	'Manooja Manoharan',
	'Ameena Iqbal',
	'Jyothish Abraham',
	'Kamal Jith',
	'Ajith Raj',
	'Savitha Rajagopal',
	'Soumya Lalitha',
	'Angel Joseph Roche',
	'Karthik Gopalakrishnan',
	'Aparna Manju',
	'Nanda Kumar',
	'Praveen Rajasekhar',
	'Dijilraj Tharamel',
	'Adarsh Muraleedharan',
	'Muhamed Sherin',
	'Saju Devasia',
	'Manjusha Sukumarapillai',
	'Remya Vava',
	'Susan Abraham',
	'Sreedevi Kannappassery',
	'Suresh Nair',
	'Srijith Vijayamohanan',
	'Deepa John',
	'Arun Rajendran',
	'Santhosh Kumar',
	'Vijay Dev',
	'Lakshmi Mohan',
	'Manuji Sebastian',
	'Rashila Noushad',
	'Pradeep Chandrasekharan',
	'Sajith Devarajan',
	'Jimmy Kappen',
	'Rohini Pillai',
	'Visakh Nair',
	'Malu Nair',
	'Nishin Nisthar',
	'Anju Jolly',
	'Priya Surendran',
	'Sandeep Chelat',
	'Visakh Padmanabhan',
	'Dipu Chandran',
	'Joby Raj',
	'Anand Venkitakrishnan',
	'Mathew Purackal',
	'Soumya Rajan',
	'Jayakrishnan Salim',
	'John Ambadan',
	'Parvathy Prasad',
	'Vijo Varghese',
	'Divya Korula',
	'Mahin Sha',
	'Sugunan Asokan',
	'Nevil Jose',
	'Ajay Arjunan',
	'Shaji Kunjumon',
	'Prasobh Chandran',
	'Mohamed Nisar',
	'Arun Panicker',
	'Visakh Soman',
	'Kripa Sreedevi',
	'Sarun Sasidharan',
	'Vineeth Nair',
	'Sharnisha Faisal',
	'Vijesh Vijay',
	'Niby Antony',
	'Rajin Kumar',
	'Bindu Abraham',
	'Anju Edadan',
	'Reshmi Jibish',
	'Aby John',
	'Robin Sukumaran',
	'Dinesh Thamby',
	'Harishankar Kumar',
	'Sunil Giri',
	'Arun Chakravarthy',
	'Sony Sebastian',
	'Rakesh Prabhu',
	'Sudhir Kelappan',
	'Vivin Vikraman',
	'Cyril Cherian',
	'Lixo Kurian',
	'Rajesh Suryakumar',
	'Devi Chandrika',
	'Gilsha Krishnan',
	'Prasad Elayath',
	'Mathen Abraham',
	'Mithun Sreedharan',
	'Anoop Nadh',
	'Mahesh Sivasankaran',
	'Mahesh Reghunath',
	'Nimish Thotathi',
	'Georgil Mathew',
	'Aivy Gopi',
	'Aswathy Ajitha',
	'Abdul Keloth',
	'Aswathi Kurup',
	'Manisha Haridas',
	'Atul Sudhir',
	'Mary Mathew',
	'Paul Anto',
	'Ajith Khan',
	'Deen Edger',
	'Joseph Rego',
	'Sijo James',
	'Smitha Padmanabhan',
	'Sreejith Sreedharakurup',
	'Praveen Pankajakshan',
	'Nithin Vettom',
	'Vinoth Rengaraj',
	'Renju Philip',
	'Sumi Menon',
	'Kiran Unnikrishnan',
	'Praven John',
	'Deepthy Sasidharan',
	'Sabeesh Thomas',
	'Prabhu Chidambarathanu',
	'Krishna Raj',
	'Riyas Abdulrahiman',
	'Arjun Gangadharan',
	'Arunraj Rajagopalan',
	'Arun Eapachen',
	'Julian Fainlight',
	'Sadma Pudhiyavitil',
	'Mridul Raj',
	'Anoop Krishna',
	'Niju Joy',
	'Linesh Moses',
	'Ajai Kumar',
	'Anson Antony',
	'Vineeth Nair',
	'Rebin Joseph',
	'Ann Maria',
	'Sreenath Bhaskaran',
	'Bony Tharakan',
	'Sandeep Girish',
	'Shinu Badirudeen',
	'Madhevan Pillai',
	'Dony Devasia',
	'Smithan Jayapalan',
	'Ratheesh Kumar',
	'Jagadeesh Puthukkudi',
	'Radhika Pulikkal',
	'Sreekesh Okky',
	'Malu Sreekumar',
	'Vandana Unnikrishnan',
	'Subin Babu',
	'Lithu Vasu',
	'Paul Ukken',
	'Ajoydhas Michael',
	'Saranya Pradeep',
	'Sam Kolladikal',
	'Sumesh Jayakumar',
	'Vishnu Vijayan',
	'Dilip Kumar',
	'Pritish Jayachandran',
	'Rakesh Nath',
	'Surya Paul',
	'Aathira Kolakkat',
	'Antony Devassy',
	'Shinu Odol',
	'Arunbabu Poovathody',
	'Praveen Kumar',
	'Jose Dibine',
	'Sunil Kumar',
	'Vinto Poulose',
	'Srinivasan Ramanath',
	'Aneesh Pareed',
	'Anoop Chenayil',
	'Rajesh Rajappan',
	'Ravi Padmaraj',
	'Krishnan Krishnamoorthy',
	'Ranichandra Jayanthi',
	'Vivekanand Vidyadharan',
	'Jagadish Nair',
];

const Request = () => {
	return (
		<div className='w-full p-4 bg-gray-100 rounded shadow-lg'>
			<h2 className='dark-blue capitalize'>Vacation Request</h2>
			<form className='w-4/5 px-4 py-4 h-fit bg-white rounded shadow-md'>
				<div className='grid grid-cols-4 mb-2 space-x-4'>
					<div className='col-span-2 m-0'>
						<label className='block dark-blue my-1 font-semibold required'>
							Start Date
						</label>
						<DatePicker style={{ width: '100%' }} />
					</div>
					<div className='flex items-end justify-center mb-2'>
						<input
							type='radio'
							name='s_shift'
							id='start_date_first_shift'
							value='First Half'
							className='mx-1'
						/>
						<label
							htmlFor='start_date_first_shift'
							className='inline dark-blue font-semibold -mb-0.5 cursor-pointer'
						>
							First Half
						</label>
					</div>
					<div className='flex items-end justify-center mb-2'>
						<input
							type='radio'
							name='s_shift'
							id='start_date_end_shift'
							value='Second Half'
							className='mx-1'
						/>
						<label
							htmlFor='start_date_end_shift'
							className='inline dark-blue font-semibold -mb-0.5 cursor-pointer'
						>
							Second Half
						</label>
					</div>
				</div>
				<div className='grid grid-cols-4 mb-2 space-x-4'>
					<div className='col-span-2 m-0'>
						<label className='block dark-blue my-1 font-semibold required'>
							End Date
						</label>
						<DatePicker style={{ width: '100%' }} />
					</div>
					<div className='flex items-end justify-center mb-2'>
						<input
							type='radio'
							name='e_shift'
							id='end_date_first_shift'
							value='First Half'
							className='mx-1'
						/>
						<label
							htmlFor='end_date_first_shift'
							className='inline dark-blue font-semibold -mb-0.5 cursor-pointer'
						>
							First Half
						</label>
					</div>
					<div className='flex items-end justify-center mb-2'>
						<input
							type='radio'
							name='e_shift'
							id='end_date_end_shift'
							value='Second Half'
							className='mx-1'
						/>
						<label
							htmlFor='end_date_end_shift'
							className='inline dark-blue font-semibold -mb-0.5 cursor-pointer'
						>
							Second Half
						</label>
					</div>
				</div>
				<div className='grid grid-cols-2 mb-2 space-x-4'>
					<div className='m-0'>
						<label className='block dark-blue my-1 font-semibold required'>
							Leave Type
						</label>
						<Select
							style={{ width: '100%' }}
							placeholder='Choose Leave Type'
							showArrow={false}
						>
							<Select.Option value='Paid'>Paid</Select.Option>
							<Select.Option value='Loss of pay'>Loss of Pay</Select.Option>
							<Select.Option value='Compensatory'>Compensatory</Select.Option>
							<Select.Option value='Maternity'>Maternity</Select.Option>
							<Select.Option value='Paternity'>Paternity</Select.Option>
						</Select>
					</div>
					<div className='m-0'>
						<label className='block dark-blue my-1 font-semibold required'>
							Reviewer
						</label>
						<Select
							style={{ width: '100%' }}
							placeholder='Choose Leave Type'
							showArrow={false}
						>
							{reviewers.map((r) => (
								<Select.Option key={r} value={r}>
									{r}
								</Select.Option>
							))}
						</Select>
					</div>
				</div>
				<div className='mb-2'>
					<label className='block dark-blue my-1 font-semibold'>
						Send Copy To
					</label>
					<Select
						size='large'
						mode='tags'
						style={{ width: '100%' }}
						placeholder='Send Copy To'
						notFoundContent={null}
					/>
					<span className='text-xs text-gray-500'>
						Enter the email addresses to whom you wish to send the copy.
					</span>
				</div>
				<div className='mb-2'>
					<label className='block dark-blue my-1 font-semibold'>Comments</label>
					<textarea
						className='w-full p-2'
						rows='5'
						wrap='soft'
						placeholder='Enter Comments'
					></textarea>
					<span className='block text-gray-500 text-xs'>
						Request for vacation will be approved or rejected by your Manager
						depending on task deadlines and vacation days you have earned. Apply
						for vacation in advance so that it does not impact your project.
					</span>
					<span className='block text-gray-500 text-xs'>
						Please read our{' '}
						<a
							href='https://sites.google.com/a/qburst.com/employee-handbook-india/guidelines/holidays-and-vacation'
							target='_blank'
							rel='noreferrer'
						>
							Vacation policy
						</a>{' '}
						in Workplace for more details.
					</span>
				</div>
				<div className='m-4 text-center'>
					<button className='primary' type='submit'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Request;
