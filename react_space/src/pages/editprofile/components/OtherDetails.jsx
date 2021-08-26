import { Select, DatePicker, Tooltip } from 'antd';
import { IoIosHelpCircle } from 'react-icons/io';

const OtherDetails = ({ form }) => {
  const { setFieldValue } = form;

  const genderChangeHandler = (val) => {
    setFieldValue('otherDetailsForm.gender', val);
  };

  const bloodGroupChangeHandler = (val) => {
    setFieldValue('otherDetailsForm.bloodGroup', val);
  };

  const dateChangeHandler = (dateString, prop) => {
    setFieldValue(`otherDetailsForm.${prop}`, dateString);
  };

  const togglePrivateProfile = (event) => {
    setFieldValue('otherDetailsForm.privateProfile', event.target.checked);
  };

  return (
    <div className='h-max-content p-4 bg-gray-50 rounded shadow-lg'>
      <h2 className='dark-blue capitalize'>Other Details</h2>
      <div className='p-3 rounded bg-white'>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Nationality
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter Nationality'
              name='otherDetailsForm.nationality'
              value={form.values.otherDetailsForm.nationality}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>Gender</label>
            <Select
              style={{ width: '100%' }}
              placeholder='Choose Gender'
              showArrow={false}
              value={form.values.otherDetailsForm.gender || undefined}
              onChange={genderChangeHandler}
            >
              <Select.Option value='Male'>Male</Select.Option>
              <Select.Option value='Female'>Female</Select.Option>
              <Select.Option value='Transgender'>Transgender</Select.Option>
            </Select>
          </div>
        </div>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              D.O.B[Official]
            </label>
            <DatePicker
              style={{ width: '100%' }}
              onChange={(date) =>
                dateChangeHandler(date.toISOString(), 'dobOfficial')
              }
            />
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              D.O.B[Alternate]
            </label>
            <DatePicker
              style={{ width: '100%' }}
              onChange={(date) =>
                dateChangeHandler(date.toISOString(), 'dobAlternate')
              }
            />
          </div>
        </div>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Blood Group
            </label>
            <Select
              style={{ width: '100%' }}
              placeholder='Choose Blood Group'
              showArrow={false}
              value={form.values.otherDetailsForm.bloodGroup || undefined}
              onChange={bloodGroupChangeHandler}
            >
              <Select.Option value='A+'>A+</Select.Option>
              <Select.Option value='A-'>A-</Select.Option>
              <Select.Option value='B+'>B+</Select.Option>
              <Select.Option value='B-'>B-</Select.Option>
              <Select.Option value='AB+'>AB+</Select.Option>
              <Select.Option value='AB-'>AB-</Select.Option>
              <Select.Option value='O+'>O+</Select.Option>
              <Select.Option value='O-'>O-</Select.Option>
            </Select>
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Private Profile
              <Tooltip
                trigger='hover'
                placement='bottom'
                color='#264966'
                title='You can use this to hide your information from public'
              >
                <IoIosHelpCircle
                  className='inline mx-2'
                  color='#12344d'
                  size='1.5em'
                />
              </Tooltip>
            </label>
            <input
              type='checkbox'
              checked={form.values.otherDetailsForm.privateProfile}
              onChange={togglePrivateProfile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
