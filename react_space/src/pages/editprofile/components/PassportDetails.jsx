import { useRef } from 'react';
import { DatePicker } from 'antd';

const PassportDetails = ({ form }) => {
  const fileRef = useRef();
  const { setFieldValue } = form;
  const dateChangeHandler = (dateString, prop) => {
    setFieldValue(`passportDetailsForm.${prop}`, dateString);
  };

  const uploadFile = () => {
    fileRef.current.click();
  };

  const fileChangeHandler = (event) => {
    setFieldValue('passportDetailsForm.file', event.target.files[0]);
    event.target.value = null;
  };

  return (
    <div className='h-max-content p-4 bg-gray-50 rounded shadow-lg'>
      <h2 className='dark-blue capitalize'>Passport Details</h2>
      <div className='p-3 rounded bg-white'>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Name as in Passport
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter Name in Passport'
              name='passportDetailsForm.name'
              value={form.values.passportDetailsForm.name}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Passport
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter Passport'
              name='passportDetailsForm.passport'
              value={form.values.passportDetailsForm.passport}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Date of Issue
            </label>
            <DatePicker
              style={{ width: '100%' }}
              onChange={(date) =>
                dateChangeHandler(date.toISOString(), 'issueDate')
              }
            />
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Expiry date
            </label>
            <DatePicker
              style={{ width: '100%' }}
              onChange={(date) =>
                dateChangeHandler(date.toISOString(), 'expiryDate')
              }
            />
          </div>
        </div>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Place of Issue
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter Place of Issue'
              name='passportDetailsForm.placeOfIssue'
              value={form.values.passportDetailsForm.placeOfIssue}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
        </div>
        <div className='mt-4 mb-2 text-center'>
          <div className='font-normal text-xs text-gray-800 mb-2'>
            {form.values.passportDetailsForm.file?.name}
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

export default PassportDetails;
