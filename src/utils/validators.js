import Joi from 'joi';

export const validateLogin= Joi.object().keys({
    email: Joi.string().email({tlds:{allow: false}}).required(),
    password: Joi.string().min(6)
});