import 'text-encoding-polyfill'
import Joi from 'joi'

export const signUpStepOneSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .label('Email')
})

export const signUpStepTwoSchema = Joi.object({
  password: Joi.string().min(8).required().label('Senha'),
  password_confirmation: Joi.any().equal(Joi.ref('password')).required()
})
