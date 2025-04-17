import morgan from 'morgan';
import * as handlers from './handlers.js'
import ProductRouter from './module/product/product.routes.js';

export function init(express,app){
    app.use(express.json());
    
    app.use(morgan("dev"));

    app.use("/product",ProductRouter);
    
}

