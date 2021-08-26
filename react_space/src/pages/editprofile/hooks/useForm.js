import { useFormik } from 'formik';

const contactFormInitialState = {
  officialName: '',
  skypeId: '',
  mobile: '',
  residence: '',
  permanentAddress1: '',
  permanentAddress2: '',
  permanentAddress3: '',
  permanentAddress4: '',
  currentAddress1: '',
  currentAddress2: '',
  currentAddress3: '',
  currentAddress4: '',
  addressProofType: '',
  idNumber: '',
  file: '',
};

const accessDetailsFormInitialState = {
  alternateEmail: '',
};

const maritalStatusInitialState = {
  martialStatus: '',
};

const otherDetailsFormInitialState = {
  nationality: '',
  dobOfficial: '',
  dobAlternate: '',
  gender: '',
  bloodGroup: '',
  privateProfile: false,
};

const familyDetailsFormInitialState = {
  fatherName: '',
  motherName: '',
  spouseDetails: {
    name: '',
    dob: '',
    gender: '',
  },
  childDetails: [
    {
      name: '',
      dob: '',
      gender: '',
    },
  ],
};

const passportDetaislFormInitialState = {
  name: '',
  passport: '',
  placeOfIssue: '',
  issueDate: '',
  expiryDate: '',
  file: '',
};

const accountDetailsFormInitialState = {
  bank: '',
  ifscCode: '',
  acNo: '',
  panCardNo: '',
  adhaarNo: '',
  file: '',
};

const useForm = () => {
  const submitHandler = (values) => {
    console.info('Formik Values', values);
  };

  const validateData = (values) => {
    const errors = {
      contactForm: {},
      familyDetailsForm: {
        childDetails: [],
      },
    };
    const { officialName } = values.contactForm;
    if (!officialName)
      errors.contactForm.officialName = 'Please enter the officialName';
    for (const [i, child] of values.familyDetailsForm.childDetails.entries()) {
      for (const [key, value] of Object.entries(child)) {
        if (value.trim() === '') {
          if (!errors.familyDetailsForm.childDetails[i])
            errors.familyDetailsForm.childDetails[i] = {};
          errors.familyDetailsForm.childDetails[i][
            key
          ] = `Please Enter the ${key}`;
        }
      }
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      contactForm: contactFormInitialState,
      accessDetailsForm: accessDetailsFormInitialState,
      martialStatusForm: maritalStatusInitialState,
      otherDetailsForm: otherDetailsFormInitialState,
      familyDetailsForm: familyDetailsFormInitialState,
      passportDetailsForm: passportDetaislFormInitialState,
      accountDetailsForm: accountDetailsFormInitialState,
    },
    onSubmit: submitHandler,
    validate: validateData,
  });

  return formik;
};

export default useForm;
