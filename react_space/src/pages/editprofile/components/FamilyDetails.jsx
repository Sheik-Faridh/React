import { Select, DatePicker, Tooltip } from 'antd';
import classnames from 'classnames';
import { IoMdAddCircle, IoMdTrash } from 'react-icons/io';

const FamilyDetails = ({ form }) => {
  const { setFieldValue, setTouched, touched, errors } = form;
  const { childDetails } = form.values.familyDetailsForm;

  const updateFormState = (val, prop) => {
    setFieldValue(prop, val);
  };

  const getTouchedData = () => {
    return form.touched.familyDetailsForm
      ? {
          ...form.touched.familyDetailsForm,
          childDetails: form.touched.familyDetailsForm.childDetails.map(
            (d, i) => {
              if (i === childDetails.length - 1) {
                return Object.keys(d).reduce((o, k) => {
                  o[k] = true;
                  return o;
                }, {});
              }
              return d;
            }
          ),
        }
      : {
          childDetails: childDetails.map((d) => {
            const obj = {};
            for (const k of Object.keys(d)) {
              obj[k] = true;
            }
            return obj;
          }),
        };
  };

  const addChild = () => {
    const isAnyEmptyField = childDetails.some((d) =>
      Object.values(d).some((v) => v.trim() === '')
    );
    if (isAnyEmptyField) {
      setTouched({
        ...form.touched,
        familyDetailsForm: getTouchedData(),
      });
    } else {
      setFieldValue('familyDetailsForm.childDetails', [
        ...childDetails,
        { name: '', dob: '', gender: '' },
      ]);
    }
  };

  const removeChild = (index) => {
    setFieldValue(
      'familyDetailsForm.childDetails',
      childDetails.filter((d, i) => i !== index)
    );
  };

  return (
    <div className='h-max-content p-4 bg-gray-50 rounded shadow-lg'>
      <h2 className='dark-blue capitalize'>Family Details</h2>
      <div className='p-3 rounded bg-white'>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Father's Name
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder={"Enter Father's Name"}
              name='familyDetailsForm.fatherName'
              value={form.values.familyDetailsForm.fatherName}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Mother's Name
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder={"Enter Mother's Name"}
              name='familyDetailsForm.motherName'
              value={form.values.familyDetailsForm.motherName}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
        </div>
        <div className='grid grid-cols-3 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>
              Spouse Name
            </label>
            <input
              className='w-full p-1'
              type='text'
              placeholder='Enter Spouse Name'
              name='familyDetailsForm.spouseDetails.name'
              value={form.values.familyDetailsForm.spouseDetails.name}
              onChange={form.handleChange}
              autoComplete='off'
            />
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>D.O.B</label>
            <DatePicker
              style={{ width: '100%' }}
              onChange={(date) =>
                updateFormState(
                  date.toISOString(),
                  'familyDetailsForm.spouseDetails.dob'
                )
              }
            />
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold'>Gender</label>
            <Select
              style={{ width: '100%' }}
              placeholder='Choose Gender'
              showArrow={false}
              value={
                form.values.familyDetailsForm.spouseDetails.gender || undefined
              }
              onChange={(val) =>
                updateFormState(val, 'familyDetailsForm.spouseDetails.gender')
              }
            >
              <Select.Option value='Male'>Male</Select.Option>
              <Select.Option value='Female'>Female</Select.Option>
              <Select.Option value='Transgender'>Transgender</Select.Option>
            </Select>
          </div>
        </div>
        {childDetails.map((child, i) => (
          <div key={`${i + 1}`} className='grid grid-cols-6 mb-2 space-x-4'>
            <div className='col-start-1 col-end-3 m-0'>
              <label className='block dark-blue my-1 font-semibold'>
                Child's Name
              </label>
              <input
                className={classnames('w-full', 'p-1', {
                  error:
                    touched?.familyDetailsForm?.childDetails?.[i] &&
                    Boolean(errors?.familyDetailsForm?.childDetails[i]?.name),
                })}
                type='text'
                placeholder={"Enter Child's Name"}
                name={`familyDetailsForm.childDetails[${i}].name`}
                value={child.name}
                onChange={form.handleChange}
                autoComplete='off'
              />
              <div className='text-red-500 text-xs'>
                {touched?.familyDetailsForm?.childDetails?.[i] &&
                errors?.familyDetailsForm?.childDetails[i]?.name
                  ? errors?.familyDetailsForm?.childDetails[i]?.name
                  : ''}
              </div>
            </div>
            <div className='col-start-3 col-end-5 m-0'>
              <label className='block dark-blue my-1 font-semibold'>
                D.O.B
              </label>
              <DatePicker
                style={{ width: '100%' }}
                onChange={(date) =>
                  updateFormState(
                    date.toISOString(),
                    `familyDetailsForm.childDetails[${i}].dob`
                  )
                }
              />
              <div className='text-red-500 text-xs'>
                {touched?.familyDetailsForm?.childDetails?.[i] &&
                errors?.familyDetailsForm?.childDetails[i]?.dob
                  ? errors?.familyDetailsForm?.childDetails[i]?.dob
                  : ''}
              </div>
            </div>
            <div className='col-start-5 col-end-7 m-0'>
              <label className='block dark-blue my-1 font-semibold'>
                Gender
              </label>
              <Select
                style={{ width: '100%' }}
                placeholder='Choose Gender'
                showArrow={false}
                value={child.gender || undefined}
                onChange={(val) =>
                  updateFormState(
                    val,
                    `familyDetailsForm.childDetails[${i}].gender`
                  )
                }
              >
                <Select.Option value='Male'>Male</Select.Option>
                <Select.Option value='Female'>Female</Select.Option>
                <Select.Option value='Transgender'>Transgender</Select.Option>
              </Select>
              <div className='text-red-500 text-xs'>
                {touched?.familyDetailsForm?.childDetails?.[i] &&
                errors?.familyDetailsForm?.childDetails[i]?.gender
                  ? errors?.familyDetailsForm?.childDetails[i]?.gender
                  : ''}
              </div>
            </div>
            <div className='col-start-7 m-0'>
              <div className='flex justify-center items-end w-full h-full'>
                {i + 1 === childDetails.length && i === 0 && (
                  <Tooltip
                    trigger='hover'
                    placement='bottom'
                    color='#264966'
                    title='Add'
                  >
                    <IoMdAddCircle
                      color='#00a886'
                      size='2em'
                      className='inline mx-2 cursor-pointer'
                      onClick={addChild}
                    />
                  </Tooltip>
                )}
                {i + 1 === childDetails.length && i !== 0 && (
                  <>
                    <Tooltip
                      trigger='hover'
                      placement='bottom'
                      color='#264966'
                      title='Add'
                    >
                      <IoMdAddCircle
                        color='#00a886'
                        size='2em'
                        className='inline mx-2 cursor-pointer'
                        onClick={addChild}
                      />
                    </Tooltip>
                    <Tooltip
                      trigger='hover'
                      placement='bottom'
                      color='#264966'
                      title='Delete'
                    >
                      <IoMdTrash
                        color='#d72d30'
                        size='2em'
                        className='inline mx-2 cursor-pointer'
                        onClick={() => removeChild(i)}
                      />
                    </Tooltip>
                  </>
                )}
                {i + 1 !== childDetails.length && (
                  <Tooltip
                    trigger='hover'
                    placement='bottom'
                    color='#264966'
                    title='Delete'
                  >
                    <IoMdTrash
                      color='#d72d30'
                      size='2em'
                      className='inline mx-2 cursor-pointer'
                      onClick={() => removeChild(i)}
                    />
                  </Tooltip>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyDetails;
