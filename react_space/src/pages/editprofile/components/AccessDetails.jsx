const AccessDetails = ({ form }) => {
  return (
    <div className='h-max-content p-4 bg-gray-50 rounded shadow-lg'>
      <h2 className='dark-blue capitalize'>System Access Details</h2>
      <div className='p-3 rounded bg-white'>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Alternate Email
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter Alternate Email'
              name='accessDetailsForm.alternateEmail'
              value={form.values.accessDetailsForm.alternateEmail}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessDetails;
