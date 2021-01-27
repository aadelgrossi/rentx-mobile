import { ApolloQueryResult } from '@apollo/client'
import Joi from 'joi'

import { IS_EMAIL_AVAILABLE } from '~/graphql'
import { getApolloClient } from '~/services/apollo'

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

export const checkIfEmailAvailable = async (
  email: string
): Promise<ApolloQueryResult<any>> =>
  await getApolloClient().query({
    query: IS_EMAIL_AVAILABLE,
    variables: {
      email
    }
  })
