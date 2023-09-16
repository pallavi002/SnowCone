import mongoose, { Document } from 'mongoose';

interface IProductModel extends Document {
    productName: string;
    productDescription: string;
    productPrice: number;
    productImage: string;
}

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
});


const Product = mongoose.model<IProductModel>('Product', ProductSchema);
export default Product;
