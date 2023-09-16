import { register, login } from "../controllers/authController";
import { getProfile } from "../controllers/userController";
import { addProduct, getProducts, findProduct, updateProduct, deleteProduct } from "../controllers/productController";

import authorize from "../controllers/middleware";

export default function initRoutes(app: any) {
    app.post("/register", register);
    app.post("/login", login);
    app.get("/profile/:id", authorize, getProfile);


    app.get("/products", getProducts);
    app.post("/addproduct", addProduct);
    app.get("/product/:id", findProduct);
    app.put("/updateproduct/:id", updateProduct);
    app.delete("/deleteproduct/:id", deleteProduct);
}