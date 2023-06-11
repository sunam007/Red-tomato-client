import Joi from "joi";

export const orderSchema = Joi.object({
  _id: Joi.any().optional(),
  mealId: Joi.number().min(5).required(),
  mealTitle: Joi.string().min(3).max(50).required(),
  mealCategory: Joi.string().min(3).max(50).required(),
  mealThumb: Joi.string().min(3).required(),
  mealThumbSmall: Joi.any().optional(),
  mealTags: Joi.array().optional(),
  mealPrice: Joi.number().min(2).required(),
  mealQuantity: Joi.number().min(1).max(2).required(),
  customerName: Joi.string().min(3).max(100).optional(),
  customerEmail: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .min(3)
    .max(100)
    .required(),
});

export const validateOrder = (objectToBeValidated) =>
  orderSchema.validate(objectToBeValidated);
