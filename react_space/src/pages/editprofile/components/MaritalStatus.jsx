import { Select } from 'antd';

const MaritalStatus = ({ form }) => {
  const { setFieldValue } = form;
  const changeHandler = (val) => {
    setFieldValue('martialStatusForm.martialStatus', val);
  };

  return (
    <div className='h-max-content p-4 bg-gray-50 rounded shadow-lg'>
      <h2 className='dark-blue capitalize'>Marital Status</h2>
      <div className='p-3 rounded bg-white'>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Marital Status
            </label>
            <Select
              style={{ width: '100%' }}
              placeholder='Enter Marital Status'
              showArrow={false}
              value={form.values.martialStatusForm.martialStatus || undefined}
              onChange={changeHandler}
            >
              <Select.Option value='Single'>Single</Select.Option>
              <Select.Option value='Married'>Married</Select.Option>
              <Select.Option value='Divorced'>Divorced</Select.Option>
              <Select.Option value='Widowed'>Widowed</Select.Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaritalStatus;
