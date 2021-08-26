import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md';
import { ImMobile } from 'react-icons/im';
import actions from '../../../store/modal/actions';
import Icon from '../../../components/icon';
import ProfileSrc from '../../../assets/image/profile.jpeg';

const EditIcon = () => (
	<Icon prop={{ className: 'inline mr-2 mb-1' }}>
		<MdModeEdit />
	</Icon>
);

const MobileIcon = () => (
	<Icon prop={{ className: 'inline mr-2 mb-1' }}>
		<ImMobile />
	</Icon>
);

const ProfileCard = () => {
	const history = useHistory();
	const { pathname } = useLocation();
	const dispatch = useDispatch();

	const addDevice = () => {
		dispatch(actions.openQRcodeModal());
	};

	const editProfile = () => {
		history.push(`${pathname}/edit`);
	};

	return (
		<div className='flex flex-row items-start justify-between w-full h-max-content p-6 bg-white shadow-2xl rounded-md bg-gray-50'>
			<div className='flex space-x-4'>
				<div className='shadow-xl w-24 h-28 bg-indigo-100'>
					<img
						className='object-none m-auto'
						width='80px'
						height='100px'
						src={ProfileSrc}
						alt='Profile Pic'
					/>
				</div>
				<div className='space-y-2'>
					<div className='space-x-1'>
						<div className='inline text-2xl font-semibold'>N Sheik Faridh</div>
						<label className='inline grey capitalize text-sm px-2 rounded-md'>
							<span className='text-sm font-semibold uppercase mr-2'>
								Emp Id:
							</span>
							4540
						</label>
					</div>
					<div className='space-x-1'>
						<div className='inline text-xl font-medium text-gray-800'>
							Engineer
						</div>
						<div className='inline text-sm capitalize space-x-1'>
							<label className='inline green px-2 rounded-md'>
								Development
							</label>
							<label className='inline yellow px-2 rounded-md'>
								Javascript
							</label>
						</div>
					</div>
					<div className='text-base text-gray-600	capitalize'>Kochi Team</div>
				</div>
			</div>
			<div className='space-x-2'>
				<button className='secondary' onClick={editProfile}>
					<EditIcon />
					Edit Profile
				</button>
				<button className='secondary' onClick={addDevice}>
					<MobileIcon />
					Add MFA Device
				</button>
			</div>
		</div>
	);
};

export default ProfileCard;
