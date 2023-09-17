import { Request, Response } from 'express';
import Product from "../models/Product";
import Recipie from "../models/Recipie";

import { IProduct } from "../types/product";
import { IRecipie } from "../types/recipie";


export const getProducts = async (req: Request, res: Response) => {
  const { page, perPage } = req.query;
  const pageNumber = parseInt(page as string, 10) || 1;
  const itemsPerPage = parseInt(perPage as string, 10) || 6; // Default to 6 items per page

  try {
    const skip = (pageNumber - 1) * itemsPerPage;
    const result = await Product.find()
      .skip(skip)
      .limit(itemsPerPage);

    const total = await Product.countDocuments(); // Get the total number of products

    return res.status(201).json({
      code: 201,
      success: true,
      message: "Products found!",
      data: result,
      total,
    });
  } catch (err) {
    return res.status(400).json({
      code: 400,
      success: false,
      message: "Error Fetching Products!",
      data: err,
    });
  }
};


export const addProduct = async (req: Request, res: Response) => {    
    try {
        const {productName, productDescription, productPrice, productImage} :IProduct = req.body;
        const productData = new Product({ productName, productDescription, productPrice, productImage });
        const result = await productData.save();
            console.log("here", result);

        return res.status(201).json({
            code: 201,
            success: true,
            message: "Product Added!",
            data: result,
        });
    } catch(err) {
        return res.status(400).json({
            code: 400,
            success: false,
            message: "Error Adding Product!",
            data: err,
        });
    }
}

export const findProduct = async (req: Request, res: Response) => {
    try {
        const result = await Product.findById(req?.params?.id)
        console.log(result);
        
        return res.status(201).json({
            code: 201,
            success: true,
            message: "Product found!",
            data: result,
        });
    } catch(err) {
        return res.status(400).json({
            code: 400,
            success: false,
            message: "Error Finding Product!",
            data: err,
        });
    }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProductData: IProduct = {
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      productPrice: req.body.productPrice,
      productImage: req.body.productImage,
    };

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: req.params.id },
      updatedProductData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        code: 404,
        success: false,
        message: 'Product not found',
        data: null,
      });
    }

    return res.status(200).json({
      code: 200,
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      success: false,
      message: 'Internal server error',
      data: null,
    });
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
      const result = await Product.findByIdAndDelete(req?.params?.id)
      
      return res.status(201).json({
          code: 201,
          success: true,
          message: "Product Deleted Successfully!",
          data: result,
      });
  } catch(err) {
      return res.status(400).json({
          code: 400,
          success: false,
          message: "Error Deleting Product!",
          data: err,
      });
  }
}


export const getRecipies = async (req: Request, res: Response) => {
  try {
    const result = await Recipie.find();

    return res.status(201).json({
      code: 201,
      success: true,
      message: "Recipies found!",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      code: 400,
      success: false,
      message: "Error Fetching Recipies!",
      data: err,
    });
  }
};

export const addRecipie = async (req: Request, res: Response) => {    
  try {
      const {recipieName, recipieDirections, recipieIngredients, cookingTime, recipieAuthor, recipieImage} :IRecipie = req.body;
      const recipieData = new Recipie({ recipieName, recipieDirections, recipieIngredients, cookingTime, recipieAuthor, recipieImage });
      const result = await recipieData.save();

      return res.status(201).json({
          code: 201,
          success: true,
          message: "Recipie Added!",
          data: result,
      });
  } catch(err) {
      return res.status(400).json({
          code: 400,
          success: false,
          message: "Error Adding Recipie!",
          data: err,
      });
  }
}