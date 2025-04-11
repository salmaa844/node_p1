import * as handlers from './handlers.js'

export function init(express,app){
    app.use(express.json());
    app.route("/product").post(handlers.addproduct).get(handlers.getproduct);
    app.route("/product/:id").put(handlers.updateproduct1).patch(handlers.updateproduct2).delete(handlers.deleteproduct);
   
}

