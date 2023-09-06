import mongoose from 'mongoose';

const database = async () => {
  try {
    // Connect to MongoDB (replace with your MongoDB URI)
    const mongoURI = "mongodb+srv://pallavi:pallavisdatabase@learningdb.rze9uis.mongodb.net/";
    console.log(mongoURI);
    
    await mongoose.connect(mongoURI);

    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

export default database;
