const fs = require("fs");
const { ProductService } = require("../services");

/** Create product */
const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;

    const createdProduct = await ProductService.createProduct(reqBody);

    res.status(200).json({
      success: true,
      message: "Product create successfully!",
      data: createdProduct,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};



/** Get prooduct list */
const getProductList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};


    const getList = await ProductService.getProductList(filter, options);

    res.status(200).json({
      success: true,
      data: getList,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};

/** Update product details */
const updateProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const productId = req.params.productId;
    const productExists = await ProductService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }
    const updatedProduct = await ProductService.updateProduct(
      productId,
      reqBody
    );

    res.status(200).json({
      success: true,
      message: "Product details update successfully!",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};



/** Delete product */
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const productExists = await ProductService.getProductById(productId);
    if (!productExists) {
      throw new Error("Product not found!");
    }

    const deletedProduct = await ProductService.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product delete successfully!",
      data: deletedProduct,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};

module.exports = {
  createProduct,
  getProductList,
  updateProduct,
  deleteProduct,
};