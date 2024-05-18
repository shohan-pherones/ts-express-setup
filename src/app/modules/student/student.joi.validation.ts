import Joi from 'joi';

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, 'capitalize format')
    .required()
    .messages({
      'string.empty': 'First name is required',
      'string.max': 'Firstname cannot be more than 20 characters',
      'string.pattern.name': '{#value} is not in capitalize format',
    }),
  middleName: Joi.string().allow(null, ''),
  lastName: Joi.string()
    .pattern(/^[a-zA-Z]+$/, 'alpha')
    .required()
    .messages({
      'string.empty': 'Last name is required',
      'string.pattern.name': '{#value} is not valid',
    }),
});

const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': "Father's name is required",
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': "Father's occupation is required",
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.empty': "Father's contact number is required",
  }),
  motherName: Joi.string().required().messages({
    'string.empty': "Mother's name is required",
  }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': "Mother's occupation is required",
  }),
  motherContactNo: Joi.string().required().messages({
    'string.empty': "Mother's contact number is required",
  }),
});

const localGuardianSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': "Local guardian's name is required",
  }),
  occupation: Joi.string().required().messages({
    'string.empty': "Local guardian's occupation is required",
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': "Local guardian's contact number is required",
  }),
  address: Joi.string().required().messages({
    'string.empty': "Local guardian's address is required",
  }),
});

const studentSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'Student ID is required',
  }),
  password: Joi.string().max(20).required().messages({
    'string.empty': 'Password is required',
  }),
  name: userNameSchema.required().messages({
    'object.base': 'Student name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': '{#value} is not a valid gender',
    'string.empty': 'Gender is required',
  }),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    'string.email': '{#value} is not a valid email',
    'string.empty': 'Email is required',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-')
    .required()
    .messages({
      'any.only': '{#value} is not a valid blood group',
      'string.empty': 'Blood group is required',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent address is required',
  }),
  guardian: guardianSchema.required().messages({
    'object.base': 'Guardian information is required',
  }),
  localGuardian: localGuardianSchema.required().messages({
    'object.base': 'Local guardian information is required',
  }),
  profileImg: Joi.string().optional(),
  isActive: Joi.string()
    .valid('active', 'inactive')
    .default('active')
    .messages({
      'any.only': '{#value} is not a valid status',
    }),
  isDeleted: Joi.boolean().default(false),
});

export default studentSchema;
