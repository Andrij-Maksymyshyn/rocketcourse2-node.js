const Joi = require("joi");
const { EMAIL_REGEXP, PASSWORD_REGEXP } = require("../../configs/regexp.enum");

const newUserSchema = Joi.object({
  firstName: Joi.string()
    .alphanum()
    .min(2)
    .max(12)
    .trim()
    .error(new Error("firstName is not valid")),

  lastName: Joi.string()
    .alphanum()
    .min(2)
    .max(12)
    .trim()
    .error(new Error("lastName is not valid")),

  email: Joi.string()
    .regex(EMAIL_REGEXP)
    .required()
    .lowercase()
    .trim()
    .error(new Error("Email is not valid")),

  password: Joi.string().regex(PASSWORD_REGEXP).required(),

  age: Joi.number().integer().min(1).max(120),
});

module.exports = {
  newUserSchema,
};
