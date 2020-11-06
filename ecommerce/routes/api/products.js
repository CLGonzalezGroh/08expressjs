const express = require("express");
const router = express.Router();
const ProductsService = require("../../services/products");

const productsService = new ProductsService();

router.get("/", async function (req, res, next) {
  const { tags } = req.query;
  console.log(req);
  try {
    const products = await productsService.getProducts({ tags });

    res.status(200).json({
      data: products,
      message: "products listed",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:productId", async function (req, res, next) {
  const { productId } = req.params;
  console.log(req);

  try {
    const product = await productsService.getProduct({ productId });

    res.status(200).json({
      data: product,
      message: "product retrieved",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async function (req, res, next) {
  const { body } = req;
  console.log(req);

  try {
    const createdProduct = await productsService.createProduct({ body });

    res.status(201).json({
      data: createdProduct,
      message: "product created",
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:productId", async function (req, res, next) {
  const { productId } = req.params;
  const { body } = req;
  console.log(req);

  try {
    const updatedProduct = await productsService.updateProduct({
      productId,
      body,
    });

    res.status(200).json({
      data: updatedProduct,
      message: "product updated",
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:productId", function (req, res, next) {
  const { productId } = req.params;
  console.log(req);

  try {
    const deletedProduct = productsService.deleteProduct({ productId });

    res.status(200).json({
      data: deletedProduct,
      message: "product deleted",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
