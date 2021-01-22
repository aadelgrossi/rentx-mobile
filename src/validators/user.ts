import Joi from 'joi'

export const updateUserInfoSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
})

export const updateUserPasswordSchema = Joi.object({
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
  confirmPassword: Joi.any().equal(Joi.ref('newPassword')).required()
})
