import mongoose, { Document } from 'mongoose';

interface IRecipieModel extends Document {
    recipieName: string;
    recipieDirections: string;
    recipieIngredients: string;
    cookingTime: number,
    recipieAuthor: string;
    recipieImage: string;
}

const RecipieSchema = new mongoose.Schema({
    recipieName: {
        type: String,
        required: true,
    },
    recipieDirections: {
        type: Array,
        required: true,
    }, 
    recipieIngredients: {
        type: Array,
        required: true,
    }, 
    cookingTime: {
        type: Number,
        required: true,
    },
    recipieAuthor: {
        type: String,
        required: true,
    },
    recipieImage: {
        type: String,
        required: true,
    },
});


const Recipie = mongoose.model<IRecipieModel>('Recipie', RecipieSchema);
export default Recipie;
