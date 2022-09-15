const Product = require('../model/product');
const axios = require("axios");


module.exports = class Products {

    static async getproducts(req,res){
        try {
          var products;
            if(req.query.id){
              products = await Product.find({_id : req.query.id});

            }else{
              products = await Product.find();
            }
            res.json(products);

    
          } catch (error) {
            res.status(500).json({error: error})
          }
     }



    static async createproduct (req,res){
        try {
            const options = {
                method: 'GET',
                url: 'https://magic-aliexpress1.p.rapidapi.com/api/product/'+req.params.id,
                headers: {
                  'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com',
                  'X-RapidAPI-Key': '69f73edb4emshda6181a1436181ep15d42djsnbd804b7e10a9'
                }
              };
              
              axios.request(options).then( async function (response) {
                  
                //   console.log(response.data.metadata.titleModule.product_title);
                // console.log(response.data.metadata.titleModule.product_description);
                // console.log(response.data.app_sale_price);
                // console.log(response.data.quantityObject.totalAvailQuantity);
                const pics = [];
                const patern = [];
                response.data.skuProperties[0].skuPropertyValues.forEach(element => {
                  pics.push(element.skuPropertyImagePath);
                  patern.push(element.propertyValueName);
                });
                // console.log(pics);
              
                // console.log(patern);
              
                // console.log(response.data.product_small_image_urls.string);
              
                const size = [];
                response.data.skuProperties[1].skuPropertyValues.forEach(element => {
                  if(element.propertyValueDefinitionName){
                    size.push(element.propertyValueDefinitionName);
                  }
                  
                });
              
                // console.log(size);

                const pr = {
                    name : response.data.metadata.titleModule.product_title,
                    description : response.data.metadata.titleModule.product_description,
                    price : response.data.app_sale_price,
                    nb_tot : response.data.quantityObject.totalAvailQuantity,
                    images : response.data.product_small_image_urls.string,
                    size : size,
                    min_imgs : pics,
                    patern : patern
                }
                const p =new Product(pr);
                await p.save();
                res.send('<center>  <h1> <mark>Added 👍</mark> </h1><br> <h3 class="text-center"><strong>'+pr.name+'</strong> </h3><br> <img class="container" src="'+pr.images[0]+'" ><center/>');
              
            }).catch(function (error) {
                res.send(error);
            });
        } catch (error) {
            res.send(error);
        }

        
    }
}