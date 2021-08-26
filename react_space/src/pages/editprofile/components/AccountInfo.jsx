import { useRef } from 'react';
import { Select } from 'antd';

const bankLists = [
  'Allahabad Bank',
  'Andhra Bank',
  'Axis Bank',
  'Axis Bank Chennai',
  'BB&T',
  'BRE Bank S.A.',
  'Bank Of America',
  'Bank of Baroda',
  'Bank of India',
  'Bank of Maharashtra',
  'Canara Bank',
  'Catholic Syrian Bank',
  'Central Bank of India',
  'Citi Bank',
  'City Union Bank',
  'Corporation Bank',
  'Dena Bank',
  'Development Credit Bank',
  'Dhanlaxmi Bank',
  'Emirates Bank',
  'Federal Bank',
  'First Tech Federal Credit Union',
  'HDFC Bank',
  'HSBC',
  'ICICI Bank',
  'IDBI',
  'IDFC bank',
  'ING Vysya Bank',
  'Indian Bank',
  'Indian Overseas Bank',
  'IndusInd Bank',
  'J.P.Morgan Chase',
  'Japan Bank',
  'KERALA GRAMIN BANK',
  'Karur Vysya Bank',
  'Kotak Mahindra Bank',
  'Lakshmi Vilas Bank',
  'Oriental Bank of Commerce',
  'Punjab & Sind Bank',
  'Punjab National Bank',
  'SBI',
  'South Indian Bank',
  'Standard chartered',
  'State Bank of Bikaner & Jaipur',
  'State Bank of Hyderabad',
  'State Bank of India',
  'State Bank of Mysore',
  'State Bank of Patiala',
  'State Bank of Travancore',
  'Syndicate Bank',
  'Tamilnad Mercantile Bank',
  'UCO Bank',
  'Union Bank of India',
  'United Bank of India',
  'Vijaya Bank',
  'Westpac Banking Corporation',
  'Yes Bank',
  'mBank',
];

const AccountInfo = ({ form }) => {
  const fileRef = useRef();
  const { setFieldValue } = form;

  const uploadFile = () => {
    fileRef.current.click();
  };

  const ChangeHandler = (val) => {
    setFieldValue('accountDetailsForm.bank', val);
  };

  const fileChangeHandler = (event) => {
    setFieldValue('accountDetailsForm.file', event.target.files[0]);
    event.target.value = null;
  };

  return (
    <div className='h-max-content p-4 bg-gray-50 rounded shadow-lg'>
      <h2 className='dark-blue capitalize'>Account Details</h2>
      <div className='p-3 rounded bg-white'>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>Bank</label>
            <Select
              style={{ width: '100%' }}
              virtual={false}
              placeholder='Choose Bank Name'
              showArrow={false}
              value={form.values.accountDetailsForm.bank || undefined}
              onChange={ChangeHandler}
            >
              {bankLists.map((bank) => (
                <Select.Option key={bank} value={bank}>
                  {bank}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Bank A/C No
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter Bank A/C No'
              name='accountDetailsForm.acNo'
              value={form.values.accountDetailsForm.acNo}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              IFSC Code
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter IFSC Code'
              name='accountDetailsForm.ifscCode'
              value={form.values.accountDetailsForm.ifscCode}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Adhaar Number
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter Adhaar Number'
              name='accountDetailsForm.adhaarNo'
              value={form.values.accountDetailsForm.adhaarNo}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              PanCard Number
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter PanCard Number'
              name='accountDetailsForm.panCardNo'
              value={form.values.accountDetailsForm.panCardNo}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
        </div>
        <div className='mt-4 mb-2 text-center'>
          <div className='font-normal text-xs text-gray-800 mb-2'>
            {form.values.accountDetailsForm.file?.name}
          </div>
          <input
            ref={fileRef}
            type='file'
            accept='image/*'
            className='hidden'
            onChange={fileChangeHandler}
          />
          <button className='primary' type='button' onClick={uploadFile}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
