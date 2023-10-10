const express = require("express");
const validate = require("../../middlewares/validate");
const { productvalidtion } = require("../../validations");
const { productController } = require("../../controllers");

const router = express.Router();

/** Create product */
router.post(
  "/create",
  validate(productvalidtion.createProduct),
  productController.createProduct
);


/** Get production list */
router.get(
  "/list",
  validate(productvalidtion.getList),
  productController.getProductList
);

/** Update product details */
router.put(
  "/update/:productId",

  validate(productvalidtion.updateProduct),
  productController.updateProduct
);


/** Delete product */
router.delete(
  "/delete/:productId",
  validate(productvalidtion.updateProduct),
  productController.deleteProduct
);

module.exports = router;