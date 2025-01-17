import * as Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern': 'Input must be 1-20 letters only (Latin, Cyrillic, or Ukrainian)'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'Price must be at least 0',
        'number.max': 'Price cannot exceed 1000000'
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        'number.min': 'Year must be 1990 or later',
        'number.max': 'Year cannot exceed 2024'
    }),
});

export default carValidator;
