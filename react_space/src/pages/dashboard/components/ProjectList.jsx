import { RiProjectorFill } from 'react-icons/ri';
import Accordion from './Accordion';
import Icon from '../../../components/icon';

const ProjectIcon = () => (
  <Icon prop={{ className: 'inline mx-0.5 mb-1', size: '1.3em' }}>
    <RiProjectorFill />
  </Icon>
);

const projectLists = [
  {
    project: 'Bozzuto - Runway',
    customer: 'Invesco Real Estate (Runway)',
  },
  {
    project: 'Bozzuto - The Boulevard',
    customer: '13th Floor Investments (Boulevard)',
  },
  {
    project: 'Bozzuto - Barrett & Claude',
    customer: 'Bozzuto (Barrett & Claude)',
  },
  {
    project: 'Bozzuto - Allegro (Template)',
    customer: 'Bozzuto Management Company',
  },
  {
    project: 'Daimler Duke',
    customer: 'Mercedes-Benz Research & Development India Private Limited',
  },
  {
    project: 'PL Android APP',
    customer: 'Logix ITS',
  },
  {
    project: 'Adastria Staff Board Project',
    customer: 'Adastria Co.,Ltd.,',
  },
  {
    project: 'Damac Living - Extended Team',
    customer: 'Damac Properties Co. LLC',
  },
  {
    project: 'Wave 1.5 Rollout CRs (IN/PH) - 30',
    customer: 'Fast Retailing',
  },
  {
    project: 'Wave 1.5 Enhancements Phase 2 - 29',
    customer: 'Fast Retailing',
  },
  {
    project: 'FR eODC Project - Ariake EC FE BFF - 57',
    customer: 'Fast Retailing',
  },
  {
    project: 'Optimus - Softvision',
    customer: 'Softvision Australia Pty Ltd',
  },
  {
    project: 'Wave 1.5 GRO - IDVN eNews Migration - 28',
    customer: 'Fast Retailing',
  },
  {
    project: 'Zendrive Hub WLA',
    customer: 'Zendrive Inc',
  },
  {
    project: 'Daimler CRD',
    customer: 'Mercedes-Benz Research & Development India Private Limited',
  },
  {
    project: 'Internal Tax Engine',
    customer: 'Internal',
  },
  {
    project: 'Dubai Mall - Front-end Support',
    customer: 'Emaar Malls PJSC',
  },
  {
    project: 'Banani Marketing Website',
    customer: 'Banani Inc',
  },
  {
    project: 'Brookfield - Cielo',
    customer: 'First Hill/Eighth Avenue Propco LLC (Cielo)',
  },
  {
    project: 'Brookfield - The Olivia',
    customer: '33/34 West Owner LLC (The Olivia)',
  },
  {
    project: 'Brookfield - Mint Denver',
    customer: 'FC Mint Holder LLC (DE)',
  },
  {
    project: 'Brookfield - Village Residences',
    customer: 'BPREP Village Residences LLC (Village Residences)',
  },
  {
    project: 'Brookfield - Aster Conservatory Green',
    customer: 'EPDL ACG II, LLC (DE) (Aster Conservatory Green)',
  },
  {
    project: 'Litmus7 - Resource Augmentation',
    customer: 'Litmus7 Systems Consulting Private Limited',
  },
  {
    project: 'Brookfield - Bayside Village',
    customer: 'Bayside Village Associates, L.P. (CA)(Bayside Village)',
  },
  {
    project: 'Brookfield - Mosso',
    customer: 'BPREP Mosso Apartments LLC(Mosso)',
  },
  {
    project: 'Brookfield - Guild Lofts',
    customer: 'FC 1346, LLC (DE) (Guild)',
  },
  {
    project: 'Brookfield - DKLB',
    customer: 'FC 80 DeKalb Associates, LLC (NY) (80 Dekalb)',
  },
  {
    project: 'Brookfield - Estate DC',
    customer: 'FC 227, LLC(Estate)',
  },
  {
    project: 'Brookfield - The Place Nashville',
    customer: 'OliverMcMillan Spectrum Emery, LLC(The Place Nashville)',
  },
  {
    project: 'CRYSC - Learning Management System - FRD Preparation',
    customer: 'Colorado Rapids Youth Soccer Club',
  },
  {
    project: 'Brookfield - One Blue Slip',
    customer: 'BOP Greenpoint G LLC(One Blue Slip)',
  },
];

const ProjectList = ({ index }) => {
  return (
    <div className='bg-white w-full rounded shadow-md select-none'>
      <Accordion icon={<ProjectIcon />} name='Project List' index={index}>
        <table className='border-collapse mt-2'>
          <thead>
            <tr>
              <th className='border border-gray-300 p-2'>Projects</th>
              <th className='border border-gray-300 p-2'>Customers</th>
            </tr>
          </thead>
          <tbody>
            {projectLists.map((p, i) => (
              <tr
                key={i + 1}
                className={`${
                  (i + 1) % 2 === 0 ? 'light-gray' : 'bg-gray-50'
                } hover:bg-gray-100`}
              >
                <td className='border border-gray-300 p-2 font-semibold dark-blue'>
                  {p.project}
                </td>
                <td className='border border-gray-300 p-2 font-semibold txt-gray-600'>
                  {p.customer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Accordion>
    </div>
  );
};

export default ProjectList;
