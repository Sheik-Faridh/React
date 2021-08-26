import { createContext, useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Popover, Tooltip } from 'antd';
import { BsFillPersonFill, BsSearch } from 'react-icons/bs';
import { BiReset } from 'react-icons/bi';
import { VscScreenFull } from 'react-icons/vsc';
import { RiFullscreenExitLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import actions from '../../../store/modal/actions';
import Icon from '../../../components/icon';
import ProfileSrc from '../../../assets/image/profile.jpeg';
import '../styles/header.scss';

const Context = createContext();

const SearchEntity = () => {
	const [visible, setVisible] = useState(false);
	const { type, setType } = useContext(Context);

	const updateType = (newType) => {
		type !== newType && setType(newType);
		setVisible(false);
	};

	const Content = (
		<div className='p-2 w-24'>
			<div
				className={`option cursor-pointer p-1 rounded-md text-base ${
					type === 'Employee' ? 'my-1 bg-gray-200' : 'my-1'
				} hover:bg-gray-100`}
				onClick={() => updateType('Employee')}
			>
				Employee
			</div>
			<div
				className={`option cursor-pointer p-1 rounded-md text-base ${
					type === 'Projects' ? 'my-1 bg-gray-200' : 'my-1'
				} hover:bg-gray-100`}
				onClick={() => updateType('Projects')}
			>
				Project
			</div>
			<div
				className={`option cursor-pointer p-1 rounded-md text-base ${
					type === 'Skill' ? 'my-1 bg-gray-200' : 'my-1'
				} hover:bg-gray-100`}
				onClick={() => updateType('Skill')}
			>
				Skills
			</div>
		</div>
	);

	const visibleChangeHandler = (display) => {
		setVisible(display);
	};

	return (
		<div className='relative mx-2 space-x-4'>
			<Popover
				visible={visible}
				content={Content}
				trigger='click'
				overlayClassName='search-type header-popover'
				onVisibleChange={visibleChangeHandler}
			>
				<input
					className='cursor-pointer text-sm p-2 w-24 bg-gray-50'
					readOnly
					type='text'
					value={type}
				/>
			</Popover>
			<input
				className='text-sm p-2 pr-7'
				placeholder='Search here'
				type='text'
			/>
			<Icon prop={{ className: 'absolute bottom-3 right-3' }}>
				<BsSearch />
			</Icon>
		</div>
	);
};

const Profile = () => {
	const [visible, setVisible] = useState(false);
	const dispatch = useDispatch();

	const visibleChangeHandler = (display) => {
		setVisible(display);
	};

	const clickHandler = (name) => {
		if (name === 'logout') dispatch(actions.openLogoutPopup());
		setVisible(!visible);
	};

	const Content = (
		<div className='text-gray-500'>
			<div className='bg-gray-100	shadow-md p-2'>
				<div className='text-xl'>N Sheik Faridh</div>
				<div className='text-xs text-theme-13 -mt-1'>Engineer</div>
			</div>
			<div className='p-2'>
				<a
					className='flex items-center py-1 rounded-md text-base hover:bg-gray-100'
					href='/a/employee/profile/me'
					onClick={() => clickHandler('profile')}
				>
					<BsFillPersonFill /> Profile
				</a>
				<a
					className='flex items-center py-1 rounded-md text-base hover:bg-gray-100'
					href={() => false}
					onClick={() => clickHandler('reset_widget')}
				>
					<BiReset /> Reset Widget
				</a>
				<a
					className='flex items-center py-1 rounded-md text-base hover:bg-gray-100'
					href={() => false}
					onClick={() => clickHandler('logout')}
				>
					<FiLogOut /> Logout
				</a>
			</div>
		</div>
	);

	return (
		<Popover
			visible={visible}
			content={Content}
			trigger='click'
			overlayClassName='profile-card header-popover'
			onVisibleChange={visibleChangeHandler}
		>
			<div
				className='w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110'
				role='button'
				aria-expanded='false'
			>
				<img alt='Profile Pic' src={ProfileSrc} />
			</div>
		</Popover>
	);
};

const ScreenMode = () => {
	const [fullScreen, setFullScreenMode] = useState(false);

	const toggleFullScreen = () => {
		if (!document.fullscreenElement) {
			const elem = document.documentElement;
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) {
				/* Safari */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) {
				/* IE11 */
				elem.msRequestFullscreen();
			}
		} else {
			document.exitFullscreen && document.exitFullscreen();
		}
	};

	const updateScreenModeState = () => {
		setFullScreenMode(document.fullscreenElement ? true : false);
	};

	const keyPressHandler = (event) => {
		event.code === 'F11' && event.preventDefault();
	};

	useEffect(() => {
		document.addEventListener('fullscreenchange', updateScreenModeState);
		document.addEventListener('keydown', keyPressHandler);

		return () => {
			document.removeEventListener('fullscreenchange', updateScreenModeState);
			document.removeEventListener('keydown', keyPressHandler);
		};
	}, []);

	return (
		<Icon prop={{ className: 'm-auto cursor-pointer' }}>
			{!fullScreen ? (
				<Tooltip placement='bottom' title='Full Screen' color='#010a39'>
					<VscScreenFull
						size='30px'
						color='#12344d'
						onClick={toggleFullScreen}
					/>
				</Tooltip>
			) : (
				<Tooltip placement='bottom' title='Normal Screen' color='#010a39'>
					<RiFullscreenExitLine
						size='30px'
						color='#12344d'
						onClick={toggleFullScreen}
					/>
				</Tooltip>
			)}
		</Icon>
	);
};

const Header = () => {
	const [type, setType] = useState('Employee');

	return (
		<Context.Provider value={{ type, setType }}>
			<header className='flex justify-between items-center w-full h-64 bg-gray-50 pl-5 pr-16 shadow-md'>
				<div className='text-2xl font-semibold text-gray-700 tracking-widest uppercase'>
					space
				</div>
				<div className='inline-flex space-x-4'>
					<SearchEntity />
					<ScreenMode />
					<Profile />
				</div>
			</header>
		</Context.Provider>
	);
};

export default Header;
