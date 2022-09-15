<template>
    <div class="rent bg-light" style="padding-bottom : 20%;">
        <div style="padding-top : 5%" class="col-md-9 col-sm-12 container">
            <div  class="card col-md-10 col-sm-12 container text-left " style=" border: aliceblue; " >
                <div style="padding-left : 7%" class="row">
                    <div class="col-md-6 col-sm-8 "> 
                                                           
                        <h1>item</h1>
                    </div>
                    <div class="col-md-3 col-sm-2 text-center " >
                        <h2>Qte</h2>
                    </div>
                    <div class="col-md-3 col-sm-2 text-center" >
                        <h3>price</h3>
                    </div>
                </div>
            </div>
        </div>
        <div  class="col-md-9 col-sm-12 container">
            <div  v-for="(p,index) in products" :key="index" class="card col-md-10 col-sm-12 container text-left " style=" border: aliceblue;     " >
                <div  style="padding-top : 5%" class="row">
                    <div class="col-md-2 col-sm-6">
                        <a href="" style="text-decoration:none;">
                            <img @click="go_details(p.name)" :src="p.url" alt="" style="  width: 90%;     overflow: auto;">
                        </a>
                    </div>
                    <div class="col-md-10 col-sm-6">
                        <div class="row">
                            <div class="col-md-6 col-sm-12 "> 
                                <center class="d-flex ">                        
                                    <div>
                                        <h3  style=" padding-top: 20px; color : black; ">{{p.name}}</h3>
                                        <p class="text-left">{{p.patern}}, {{p.size}} </p>
                                    </div>
                                </center>                       
                            </div>  
                            <div class="col-md-3 col-sm-12" >
                                <div class="container" style="display: flex;  padding-bottom: 15px;">
                                    <button  :disabled="nb <= 1"  @click="incr(-1)" id = "m" class="rounded-circle " style="width: 30px; text-align:center;border: groove;" >-</button>
                                    <label   style="border: aliceblue; background: bottom; width : 15%; text-align : center"> {{nb}}</label>
                                    <button  @click="incr(1)" id = "m" class="rounded-circle " style="width: 30px; text-align:center;border: groove;" >+</button>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-12 " >
                                <h5 class="text-center" > $ {{calcul}} </h5>
                            </div>
                            <div class="col-md-5 col-sm-6 col-6">
                                <button @click="remove(index)" class="btn btn-outline-secondary  "> remove</button>                                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
                    
                <!--<div class="col-md-3 col-sm-12">
                    <div class="card" style=" border: aliceblue; padding : 2%; " >
                        <h2  style="padding : 15px;"><strong>The total amount</strong> </h2>
                        <div class="row" style="padding : 10px">
                            <p class="col-md-8 col-sm-8 text-left">Temporary amount</p>
                            <p class="col-md-4 col-sm-4">{{tot}}</p>
                        </div>
                        <div class="row" style="padding : 10px">
                            <p class="col-md-8 col-sm-8 text-left">Shipping</p>
                            <p class="col-md-4 col-sm-4">free</p>
                        </div>
                        <hr  style="width : 80%; place-self: center;">
                        <div class="row" style="padding : 10px">
                            <p style="padding-top : 10px;" class="col-md-8 col-sm-7 text-left"><strong>Total</strong> </p>
                            <p style="font-size : 25px;" class="col-md-4 col-sm-5"><strong>{{tot}} $</strong> </p>
                        </div>
                        <div style="padding : 10px">
                            <button class="btn btn-primary w-100" >Buy Now</button>
                        </div>
                    </div>

                </div>-->
                    
               

<script>
export default {
    name : "rent",
    props : {
        products : {},
        tot : Number
    },
    data (){
        return{
            nb : 1,
        }
        
    },
    methods : {
        remove : function(i){
            this.$emit('remove',i);

        },
        go_details : function(name){
            this.$emit('go_details',name)
        },
        incr : function(i){
            this.nb += i;
        },
        
         

    },
    computed : {
        calcul : function(){
            if( this.nb > 0) return  this.nb * this.products[0].prix;
            else return this.products[0].prix;
        },
    },
    
}
</script>