import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

export const getSignUpFormFields = (passwordClickHandler) => ({
	firstName: {
		name: 'First Name',
		icon: <PersonOutlineIcon color='primary' />,
		type: 'text',
	},
	lastName: {
		name: 'Last Name',
		icon: <PersonOutlineIcon color='primary' />,
		type: 'text',
	},
	username: {
		name: 'UserName',
		icon: <PersonOutlineIcon color='primary' />,
		type: 'text',
	},
	password: {
		name: 'Password',
		icon: <LockIcon color='primary' />,
		type: 'password',
		icon_1: <VisibilityIcon color='primary' onClick={passwordClickHandler} />,
		icon_2: (
			<VisibilityOffIcon color='primary' onClick={passwordClickHandler} />
		),
	},
	confirmPassword: {
		name: 'Confirm Password',
		type: 'password',
		icon: <LockIcon color='primary' />,
		icon_1: <CheckIcon color='success' />,
		icon_2: <CloseIcon color='error' />,
	},
});

export const getInputProps = (key, formFields, showIconOne) => {
	switch (key) {
		case 'password':
		case 'confirmPassword':
			return showIconOne
				? {
						startAdornment: formFields[key].icon,
						endAdornment: formFields[key].icon_1,
				  }
				: {
						startAdornment: formFields[key].icon,
						endAdornment: formFields[key].icon_2,
				  };

		default:
			return {
				startAdornment: formFields[key].icon,
			};
	}
};

export const toggleIcon = (key, value, flag) => {
	switch (key) {
		case 'password':
			return {
				showIconOne: !flag,
				type: flag ? 'text' : value.type,
			};

		case 'confirmPassword':
			return {
				showIconOne: flag,
				type: value.type,
			};

		default:
			return {
				showIconOne: false,
				type: value.type,
			};
	}
};
