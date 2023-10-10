const Joi = require("joi");

/** Create product */
const createProduct = {
  body: Joi.object({
    product_name: Joi.string().required().trim(),
    product_description: Joi.string().optional(),
    product_price: Joi.number().required(),
  }),
};


/** Get production list */
const getList = {
  query: Joi.object({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow("").default(10),
    page: Joi.number().integer().allow("").default(1),
  }),
};

/** Update product details */
const updateProduct = {
  params: Joi.object({
    productId: Joi.string().required().trim(),
  }),
  body: Joi.object({
    product_name: Joi.string().trim().optional(),
    product_description: Joi.string().optional(),
    product_price: Joi.number().optional(),
  }),
};

module.exports = {
  createProduct,
  getList,
  updateProduct,
};