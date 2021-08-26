import { useState } from 'react';
import {
  AiOutlineProfile,
  AiOutlineProject,
  AiOutlineRise,
  AiOutlineContacts,
} from 'react-icons/ai';
import { BsGraphUp, BsChevronDown } from 'react-icons/bs';
import {
  FaRegCalendarTimes,
  FaGraduationCap,
  FaRegHandshake,
  FaRegMoneyBillAlt,
  FaRegCreditCard,
} from 'react-icons/fa';
import { SiGoogleclassroom, SiGooglehangoutsmeet } from 'react-icons/si';
import { IoTrophyOutline } from 'react-icons/io5';
import { BiTask, BiTransfer } from 'react-icons/bi';
import { FiActivity } from 'react-icons/fi';
import { MdImportantDevices } from 'react-icons/md';
import Icon from '../../../components/icon';

const DownArrow = ({ style }) => (
  <Icon prop={{ className: style }}>
    <BsChevronDown />
  </Icon>
);

const ProfileIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <AiOutlineProfile />
  </Icon>
);

const ProjectIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <AiOutlineProject />
  </Icon>
);

const ExperienceIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <BsGraphUp />
  </Icon>
);

const VacationIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <FaRegCalendarTimes />
  </Icon>
);

const TrainingIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <SiGoogleclassroom />
  </Icon>
);

const SkillIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <BiTask />
  </Icon>
);

const EducationIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <FaGraduationCap />
  </Icon>
);

const CertificationIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <IoTrophyOutline />
  </Icon>
);

const AgreementIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <FaRegHandshake />
  </Icon>
);

const AppraisalIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <AiOutlineRise />
  </Icon>
);

const SalaryIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <FaRegMoneyBillAlt />
  </Icon>
);

const AssetsIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <MdImportantDevices />
  </Icon>
);

const ContactIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <AiOutlineContacts />
  </Icon>
);

const ActivityIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <FiActivity />
  </Icon>
);

const InterviewIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <SiGooglehangoutsmeet />
  </Icon>
);

const CardIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <FaRegCreditCard />
  </Icon>
);

const TransferIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl' }}>
    <BiTransfer />
  </Icon>
);

const lists = [
  { name: 'Profile', icon: <ProfileIcon /> },
  { name: 'Project', icon: <ProjectIcon /> },
  { name: 'Skill', icon: <SkillIcon /> },
  { name: 'Vacation', icon: <VacationIcon /> },
  { name: 'Training', icon: <TrainingIcon /> },
  { name: 'Career', icon: <ExperienceIcon /> },
  { name: 'Education', icon: <EducationIcon /> },
  { name: 'Certification', icon: <CertificationIcon /> },
  { name: 'Agreements', icon: <AgreementIcon /> },
  { name: 'Apprasial', icon: <AppraisalIcon /> },
  { name: 'Salary', icon: <SalaryIcon /> },
  { name: 'Assets', icon: <AssetsIcon /> },
  { name: 'Contacts', icon: <ContactIcon /> },
  { name: 'Activities', icon: <ActivityIcon /> },
  { name: 'Interview', icon: <InterviewIcon /> },
  { name: 'Meal Allowance', icon: <CardIcon /> },
  { name: 'Transfer/Deputation', icon: <TransferIcon /> },
];

const empData = {
  basicInfo: {
    name: 'Basic Information',
    data: [
      {
        name: 'Official Name',
        value: 'N Sheik faridh',
      },
      {
        name: 'Type of Employment',
        value: 'Permanent',
      },
      {
        name: 'Employment Status',
        value: 'Probation',
      },
      {
        name: 'Employment Mode',
        value: 'Full Time',
      },
      {
        name: 'Designation',
        value: 'Engineer',
      },
      {
        name: 'Department',
        value: 'Development',
      },
      {
        name: 'Stream',
        value: 'JavaScript',
      },
      {
        name: 'Grade',
        value: 'A3',
      },
      {
        name: 'Next Appraisal Date',
        value: '01 Dec 2021',
      },
      {
        name: 'Date of Joining',
        value: '24 May 2021',
      },
      {
        name: 'Date of Employment',
        value: '24 May 2021',
      },
      {
        name: 'Prior Relevant Experience',
        value: '2 years 6 months',
      },
      {
        name: 'Total Relevant Experience',
        value: '2 years 6 months',
      },
      {
        name: 'Virtual Team',
        value: 'Kochi',
      },
      {
        name: 'Virtual Team Head(s)',
        value: 'Jimmy kappen',
      },
      {
        name: 'Reporting Manager',
        value: null,
      },
    ],
  },
  contactInfo: {
    name: 'Contact Information',
    data: [
      {
        name: 'Permanent Address',
        value: '5-2-32 Natarajan Street Uthamapalayam Theni',
      },
      {
        name: 'Current Address',
        value: '5-2-32 Natarajan Street Uthamapalayam Theni',
      },
      {
        name: 'Residence No',
        value: null,
      },
      {
        name: 'Skype Id',
        value: null,
      },
    ],
  },
  sysDetails: {
    name: 'System Access Details',
    data: [
      {
        name: 'Alternate Email',
        value: 'faridh.nousadh@gmail.com',
      },
      {
        name: 'External Access',
        value: 'No',
      },
    ],
  },
  familyDetails: {
    name: 'Family Details',
    data: [
      {
        name: "Father's Name",
        value: 'S Nousath Ali',
      },
      {
        name: "Mother's Name",
        value: 'S Syed Ali fathima',
      },
      {
        name: 'Marital Status',
        value: 'Single',
      },
      {
        name: "Spouse's Name",
        value: null,
      },
      {
        name: "Child's Name",
        value: null,
      },
      {
        name: "Spouse's Date of Birth",
        value: null,
      },
      {
        name: "Child's Date of Birth",
        value: null,
      },
      {
        name: "Spouse's Gender",
        value: null,
      },
      {
        name: "Child's Gender",
        value: null,
      },
    ],
  },
  others: {
    name: 'Other Information',
    data: [
      {
        name: 'Date of Birth [Official]',
        value: '26 Sep 1996',
      },
      {
        name: 'Date of Birth [Alternate]',
        value: '26 Sep 1996',
      },
      {
        name: 'Blood Group',
        value: 'B+',
      },
      {
        name: 'Nationality',
        value: 'Indian',
      },
      {
        name: 'Gender',
        value: 'Male',
      },
    ],
  },
};

const Accordion = ({ name, data }) => {
  const [active, setActive] = useState(true);

  return (
    <div className='container bg-white rounded-md shadow-md'>
      <div
        className='accordion flex justify-between items-center w-full px-4 py-3 bg-gray-50 cursor-pointer rounded-md shadow-md'
        onClick={() => setActive(!active)}
      >
        <span className='font-semibold capitalize'>{name}</span>
        <DownArrow
          style={active ? 'transform rotate-180' : 'transform rotate-0'}
        />
      </div>
      <div
        className={`accordion-panel border-2 border-gray-100 overflow-hidden transition-all ease-linear ${
          active ? 'block' : 'hidden'
        }`}
      >
        <div className='grid grid-cols-4 gap-2 p-3 select-none'>
          {data.map((d) => (
            <div key={d.name} className='mb-2'>
              <div className='text-sm text-gray-400 mb-1 capitalize'>
                {d.name}
              </div>
              <div
                className={`text-sm ${
                  d.value ? 'font-bold' : 'text-gray-800 font-thin'
                }`}
              >
                {d.value || 'Not entered'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Details = () => {
  const [activeList, setActiveList] = useState(lists[0].name);

  return (
    <div className='flex flex-row space-x-2'>
      <div className='w-1/5'>
        <ul className='w-full bg-gray-50 p-1 border-2 border-gray-100 rounded shadow-md'>
          {lists.map((list) => (
            <li
              key={list.name}
              className={`cursor-pointer py-2 text-sm text-gray-600 ${
                activeList === list.name
                  ? 'bg-gray-300 font-semibold'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => setActiveList(list.name)}
            >
              {list.icon}
              {list.name}
            </li>
          ))}
        </ul>
      </div>
      <div className='w-4/5 h-fit bg-gray-200 p-3 border-2 space-y-4 border-gray-100 rounded shadow-md'>
        {Object.entries(empData).map(([prop, value]) => (
          <Accordion key={prop} {...value} />
        ))}
      </div>
    </div>
  );
};

export default Details;
