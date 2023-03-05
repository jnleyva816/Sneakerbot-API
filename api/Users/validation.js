import { Joi } from 'express-validation';

export const create = {
  body: Joi.object({
    name: Joi.string().required(),
    email_address: Joi.string().required(),
    username: Joi.string().allow(null).required(),
    password: Joi.string().allow(null).required()
  })
};

export const findOne = {
  params: Joi.object({
    id: Joi.number().required()
  })
};

export const findAll = {
  query: Joi.object({
    protocol: Joi.string().optional()
  })
};

export const update = {
  params: Joi.object({
    id: Joi.number().required()
  }),
  body: Joi.object({
    name: Joi.string().optional(),
    email_address: Joi.string().optional(),
    username: Joi.string().allow(null).required(),
    password: Joi.string().allow(null).required()
  })
};

export const deleted = {
  params: Joi.object({
    id: Joi.number().required()
  })
};
