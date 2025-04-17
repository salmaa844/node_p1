
import { Router } from "express";

import * as handlers from './product.handlers.js'

const ProductRouter = Router()
ProductRouter.use((req, res, next) => {
    console.log("Request from: salma");
    next();
});
ProductRouter.route("/")
.post(handlers.addproduct)
.get(handlers.getproduct);

ProductRouter.route("/:id")
.put(handlers.updateproduct1)
.patch(handlers.updateproduct2).delete(handlers.deleteproduct);


export default ProductRouter;
   
