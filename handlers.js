

const product=[
    {id:1,name:"p1",price:200},
    {id:2,name:"p2",price:300},
    {id:3,name:"p3",price:400}
];
export const addproduct =(req,res)=>{
    const {name,price}=req.body;
    const newproduct = {id:product.length+1,name,price};
    product.push(newproduct);
   
    res.status(201).json({
        mes:"successful",
        product
    })

};
export const getproduct=(req,res)=>{
    res.status(200).json(product);
}
export const updateproduct1=(req,res)=>{
    const {id}=req.params;
    const{name,price}=req.body;
    const index =product.findIndex(products=>products.id === parseInt(id));
    
    if(index === -1){
     res.status(404).json({
         mes:"not found"
     })
    }
    product[index]={...product[index],name,price}
    res.status(200).json({
     mes:"update successful",
     product
 })
 }
 export const updateproduct2=(req,res)=>{
    const {id}=req.params;
    const{name,price}=req.body;
    const index =product.findIndex(products=>products.id === parseInt(id));
    
    if(name){
    product[index].name=name
    }
    if(price){
        product[index].price=price
    }
    res.status(200).json({
        mes:"update data",
        product
    })

 }
 export const deleteproduct=(req,res)=>{
    const {id}=req.params;
    const index =product.findIndex(products=>products.id === parseInt(id));
    if(index === -1){
        res.status(404).json({
            mes:"not found"
        })
       }
       product.splice(index,1)
       res.json(product)
    
 }