import Joi from "joi";

export const orderSchema = Joi.object({
  _id: Joi.any().optional(),

  mealId: Joi.number().min(5).required().messages({
    "number.min": "mealId should be minimum 5 characters",
    "any.required": "Must have a valid meal id",
  }),
  mealTitle: Joi.string().min(3).max(50).required().messages({
    "string.min": "mealTitle should be minimum 3 characters long",
    "string.max": "mealTitle should not exceed 50 characters",
    "any.required": "mealTitle is required",
  }),
  mealCategory: Joi.string().min(3).max(50).required().messages({
    "string.min": "mealCategory should be minimum 3 characters long",
    "string.max": "mealCategory should not exceed 50 characters",
    "any.required": "mealCategory is required",
  }),
  mealThumb: Joi.string().min(3).required().messages({
    "string.min": "mealThumb should be minimum 3 characters long",
    "any.required": "mealThumb URL is required",
  }),
  mealThumbSmall: Joi.any().optional(),

  mealTags: Joi.array().optional(),

  mealPrice: Joi.number().min(2).required().messages({
    "number.min": "mealPrice should be minimum 2",
    "any.required": "mealPrice is required",
  }),
  mealQuantity: Joi.number().min(1).max(2).required().messages({
    "number.min": "Order quantity must be at least 1",
    "number.max": "Maximum limit reached",
    "any.required": "mealQuantity is required",
  }),
  customerName: Joi.string().min(3).max(100).messages({
    "string.min": "customerName should be minimum 3 characters long",
    "string.max": "customerName should not exceed 100 characters",
  }),
  customerEmail: Joi.string()
    .email({ tlds: { allow: false } })
    .min(3)
    .max(100)
    .required()
    .messages({
      "string.pattern.base": "Invalid email format",
      "string.min": "customerEmail should be minimum 3 characters long",
      "string.max": "customerEmail should not exceed 100 characters",
      "any.required": "customerEmail is required",
    }),
});

export const validateOrder = (objectToBeValidated) => {
  return orderSchema.validate(objectToBeValidated);
};
