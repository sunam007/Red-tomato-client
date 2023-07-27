import Joi from "joi";

export const orderSchema = Joi.object({
  _id: Joi.any().optional(),
  mealId: Joi.number().min(5).required(),
  mealTitle: Joi.string().min(3).max(50).required(),
  mealCategory: Joi.string().min(3).max(50).required(),
  mealThumb: Joi.string().required(),
  mealThumbSmall: Joi.any().optional(),
  mealTags: Joi.array().optional(),
  mealPrice: Joi.number().required(),
  mealQuantity: Joi.number().required(),
  customerName: Joi.string().min(3).max(100).optional(),
  customerEmail: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .min(3)
    .max(100)
    .required(),
});

export const validateOrder = (objectToBeValidated) => {
  return orderSchema.validate(objectToBeValidated);
};
