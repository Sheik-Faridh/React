import { useHistory, useRouteMatch } from 'react-router-dom';
import { Tooltip, Popover } from 'antd';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';
import { IoHomeOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { RiProjectorLine } from 'react-icons/ri';
import { FaAddressBook } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { FaRegCalendarTimes } from 'react-icons/fa';

const menuList = [
  {
    name: 'Dashboard',
    icon: <IoHomeOutline color='#fff' size='20px' />,
  },
  {
    name: 'Employee',
    icon: <IoPersonOutline color='#fff' size='20px' />,
    subMenu: ['My Profile', 'Skill Search'],
  },
  {
    name: 'Vacation',
    icon: <FaRegCalendarTimes color='#fff' size='20px' />,
  },
  {
    name: 'Projects',
    icon: <RiProjectorLine color='#fff' size='20px' />,
  },
  {
    name: 'Address Book',
    icon: <FaAddressBook color='#fff' size='20px' />,
    subMenu: ['Customers', 'Service', 'Address Book'],
  },
  {
    name: 'Training',
    icon: <SiGoogleclassroom color='#fff' size='20px' />,
  },
  {
    name: 'Daily Status',
    icon: <HiOutlineDocumentReport color='#fff' size='20px' />,
  },
];

const Menu = ({ name, icon, subMenu }) => {
  const { path } = useRouteMatch();
  const history = useHistory();

  const menuClickHandler = (list) => {
    const routeCollections = {
      'My Profile': `${path}/employee/profile/me`,
      Vacation: `${path}/vacation`,
      'Daily Status': `${path}/daily_status`,
      Dashboard: `${path}/`,
    };
    routeCollections[list] && history.push(routeCollections[list]);
  };

  const Content = (
    <div className='flex flex-col gap-1	p-0.5'>
      {subMenu?.length ? (
        subMenu.map((list, i) => (
          <div
            key={i}
            className='text-gray-600 mx-2 p-2 text-center font-semibold cursor-pointer hover:bg-gray-100'
            onClick={() => menuClickHandler(list)}
          >
            {list}
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );

  return (
    <li className='px-1 py-3 text-center'>
      {subMenu?.length ? (
        <Popover
          content={Content}
          placement='rightTop'
          overlayClassName='sidebar-popover'
        >
          <div className='p-1 m-auto w-max cursor-pointer hover:bg-indigo-100 hover:bg-opacity-50'>
            {icon}
          </div>
        </Popover>
      ) : (
        <Tooltip placement='right' title={name} color='#010a39'>
          <div
            className='p-1 m-auto w-max cursor-pointer hover:bg-indigo-100 hover:bg-opacity-50'
            onClick={() => menuClickHandler(name)}
          >
            {icon}
          </div>
        </Tooltip>
      )}
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className='w-64 h-auto'>
      <nav className='inline-flex flex-col w-64 h-screen'>
        <div className='w-full bg-red-500 h-64 text-center'>
          <Logo className='w-6/12 h-64 m-auto' />
        </div>
        <div className='w-full'>
          <ul className='m-3'>
            {menuList.map((list, i) => (
              <Menu key={i} {...list} />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
