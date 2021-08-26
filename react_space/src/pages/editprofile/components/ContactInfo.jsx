import { useState, useRef } from 'react';
import classnames from 'classnames';
import { Select } from 'antd';

const ContactInfo = ({ form }) => {
  const fileRef = useRef();
  const { setFieldValue, touched, errors } = form;
  const [checked, setChecked] = useState(false);

  const changeHandler = (event) => {
    setChecked(event.target.checked);
    setFieldValue(
      'contactForm.currentAddress1',
      event.target.checked ? form.values.contactForm.permanentAddress1 : ''
    );
    setFieldValue(
      'contactForm.currentAddress2',
      event.target.checked ? form.values.contactForm.permanentAddress2 : ''
    );
    setFieldValue(
      'contactForm.currentAddress3',
      event.target.checked ? form.values.contactForm.permanentAddress3 : ''
    );
    setFieldValue(
      'contactForm.currentAddress4',
      event.target.checked ? form.values.contactForm.permanentAddress4 : ''
    );
  };

  const uploadFile = () => {
    fileRef.current.click();
  };

  const fileChangeHandler = (event) => {
    const [file] = event.target.files;
    setFieldValue('contactForm.file', file);
    event.target.value = null;
  };

  const addressProofHandler = (value) => {
    setFieldValue('contactForm.addressProofType', value);
  };

  return (
    <div className='h-max-content p-4 bg-gray-50 rounded shadow-lg'>
      <h2 className='dark-blue capitalize'>Contact Information</h2>
      <div className='p-3 rounded bg-white'>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold required'>
              Official Name
            </label>
            <input
              className={classnames('w-full', 'p-1', {
                error:
                  touched?.contactForm?.officialName &&
                  Boolean(errors?.contactForm?.officialName),
              })}
              type='text'
              placeholder='Enter Official Name'
              name='contactForm.officialName'
              value={form.values.contactForm.officialName}
              onChange={form.handleChange}
              autoComplete='off'
            />
            <div className='text-red-500 text-xs'>
              {touched?.contactForm?.officialName &&
              errors?.contactForm?.officialName
                ? errors.contactForm.officialName
                : ''}
            </div>
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Skype Id
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter Skype Id'
              name='contactForm.skypeId'
              value={form.values.contactForm.skypeId}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>Mobile</label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter Mobile'
              name='contactForm.mobile'
              value={form.values.contactForm.mobile}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Residence
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter Residence'
              name='contactForm.residence'
              value={form.values.contactForm.residence}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
        </div>
        <div className='mt-2'>
          <input
            type='checkbox'
            className='outline-none'
            checked={checked}
            onChange={changeHandler}
          />
          <label className='inline dark-blue mx-2 font-semibold'>
            Current Address
          </label>
        </div>
        <div className='grid grid-cols-2 space-x-4'>
          <div className='mt-1'>
            <div className='mb-2'>
              <label className='block dark-blue my-1 font-semibold'>
                Permanent Address 1
              </label>
              <input
                className='w-full p-1'
                type='text'
                placeholder='Enter Permanent Address 1'
                name='contactForm.permanentAddress1'
                value={form.values.contactForm.permanentAddress1}
                onChange={form.handleChange}
                autoComplete='off'
              />
            </div>
            <div className='mb-2'>
              <label className='block dark-blue my-1 font-semibold'>
                Permanent Address 2
              </label>
              <input
                className='w-full p-1'
                type='text'
                placeholder='Enter Permanent Address 2'
                name='contactForm.permanentAddress2'
                value={form.values.contactForm.permanentAddress2}
                onChange={form.handleChange}
                autoComplete='off'
              />
            </div>
            <div className='mb-2'>
              <label className='block dark-blue my-1 font-semibold'>
                Permanent Address 3
              </label>
              <input
                className='w-full p-1'
                type='text'
                placeholder='Enter Permanent Address 3'
                name='contactForm.permanentAddress3'
                value={form.values.contactForm.permanentAddress3}
                onChange={form.handleChange}
                autoComplete='off'
              />
            </div>
            <div className='mb-2'>
              <label className='block dark-blue my-1 font-semibold'>
                Permanent Address 4
              </label>
              <input
                className='w-full p-1'
                type='text'
                placeholder='Enter Permanent Address 4'
                name='contactForm.permanentAddress4'
                value={form.values.contactForm.permanentAddress4}
                onChange={form.handleChange}
                autoComplete='off'
              />
            </div>
          </div>
          <div className='mt-1'>
            <div className='mb-2'>
              <label className='block dark-blue my-1 font-semibold'>
                Current Address 1
              </label>
              <input
                className='w-full p-1'
                type='text'
                placeholder='Enter Current Address 1'
                name='contactForm.currentAddress1'
                value={form.values.contactForm.currentAddress1}
                onChange={form.handleChange}
                disabled={checked}
                autoComplete='off'
              />
            </div>
            <div className='mb-2'>
              <label className='block dark-blue my-1 font-semibold'>
                Current Address 2
              </label>
              <input
                className='w-full p-1'
                type='text'
                placeholder='Enter Current Address 2'
                name='contactForm.currentAddress2'
                value={form.values.contactForm.currentAddress2}
                onChange={form.handleChange}
                disabled={checked}
                autoComplete='off'
              />
            </div>
            <div className='mb-2'>
              <label className='block dark-blue my-1 font-semibold'>
                Current Address 3
              </label>
              <input
                className='w-full p-1'
                type='text'
                placeholder='Enter Current Address 3'
                name='contactForm.currentAddress3'
                value={form.values.contactForm.currentAddress3}
                onChange={form.handleChange}
                disabled={checked}
                autoComplete='off'
              />
            </div>
            <div className='mb-2'>
              <label className='block dark-blue my-1 font-semibold'>
                Current Address 4
              </label>
              <input
                className='w-full p-1'
                type='text'
                placeholder='Enter Current Address 4'
                name='contactForm.currentAddress4'
                value={form.values.contactForm.currentAddress4}
                onChange={form.handleChange}
                disabled={checked}
                autoComplete='off'
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Address Proof Type
            </label>
            <Select
              style={{ width: '100%' }}
              placeholder='Enter AddressProofType'
              showArrow={false}
              value={form.values.contactForm.addressProofType || undefined}
              onChange={addressProofHandler}
            >
              <Select.Option value='Driving License'>
                Driving License
              </Select.Option>
              <Select.Option value='Voter Id'>Voter Id</Select.Option>
              <Select.Option value='Adhaar Card'>Adhaar Card</Select.Option>
            </Select>
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              ID Number
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter ID Number'
              name='contactForm.idNumber'
              value={form.values.contactForm.idNumber}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
        </div>
        <div className='mt-4 mb-2 text-center'>
          <div className='font-normal text-xs text-gray-800 mb-2'>
            {form.values.contactForm.file?.name}
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

export default ContactInfo;
