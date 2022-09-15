<template>
    <div class="details">
        <div class="">
            <div class="col-md-10 col-sm-12 container">
                <div class="row">
                    <div class="card col-md-12 col-sm-12 text-left my-5 " style=" border: aliceblue;" >
                        <div class="row">
                            <div class="col-md-6 col-sm-12 " style="margin-top: 20px;">
                                <div class="d-flex" >
                                    <div class="h-75"  style="padding-top: 25px;">
                                       <a  v-for="(image,i) in product.images" :key="i" > <img @mouseenter="choose(i)" :src="image" alt="" :style="{ border: 'solid 1px' , 'image-rendering': '-webkit-optimize-contrast','width': '50px',    'margin-top': '12px', 'height': '50px' ,'opacity' : style[i] ? null : 0.5 , 'border-right': style[i] ?  'solid' : null }"><br></a>
                                    </div>
                                    <div style="width: auto; height: auto; ">
                                        <zoom-on-hover :img-normal="img"></zoom-on-hover>
                                    </div>
                                    <!-- <v-zoomer style="width: 500px; height: 500px; ">
                                        <img class="container" :src="img" alt="" style=" max-height: 550px;    padding-top: 20px; overflow: auto; image-rendering: -webkit-optimize-contrast;">
                                    </v-zoomer> -->
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12" style="    padding-top: 15px;">
                                
                                <h6  ><strong>{{product.name}}</strong></h6>
                                <div  >
                                    <img src="../images/star.jpg" alt=""  style=" padding-right: 7px;   padding-bottom: 5px;">
                                    <img src="../images/star.jpg" alt="" style=" padding-right: 7px;   padding-bottom: 5px;">
                                    <img src="../images/star.jpg" alt="" style=" padding-right: 7px;   padding-bottom: 5px;">
                                    <img src="../images/star.jpg" alt="" style=" padding-right: 7px;   padding-bottom: 5px;">
                                    29 Reviews
                                </div> 
                                <hr>
                                <h4> <i class="fs-4">  </i><strong style=" margin-left: 10px; "> USD {{product.price}}</strong>   </h4>
                                                                    <p>{{product.description}}</p>

                                
                                <p style=" color: darkcyan; ">Patern </p>
                                <div  class="container" style=" overflow: auto;">
                                    <a v-for="(img, i) in product.min_imgs" :key="i"><img  @click="choose_patern(i)"  :src="img" class="rounded-circle" alt="" :style="{'width': '70px', 'height' : '70px' , 'margin-right': '15px', 'image-rendering': '-webkit-optimize-contrast','border': paterns[i] ? 'solid 3px' : 'white','opacity' : paterns[i] ? null : 0.5  }"></a>
                                </div>
                                <br>
                                <div v-if="product.size.length > 0">
                                    <p style=" color: darkcyan;">Size </p>
                                    <div class="container" style="overflow: auto;    padding-bottom: 4px;">
                                        <a v-for="(s,index) in product.size" :key="index"><label @click="choose_size(index)"   :style=" { 'min-width': '28px',  'margin-right': '15px' , 'width': 'auto', 'text-align': 'center', 'border': 'groove' ,'border': size[index] ? 'inset 4px sienna' : 'inset' , }" class="container" > {{s}} </label></a> 
                                    </div>
                                </div>
                                <br>
                                <p style=" color: darkcyan;">Quantity : </p>
                                <div class="container" style="display: flex;  padding-bottom: 15px;">
                                    <button  :disabled="nb <= 1"  @click="decr()" id = "m" class="rounded-circle " :style=" {  'width': '30px', 'text-align': 'center', 'border': 'none'}" >-</button>
                                    <input type="number"  style="border: aliceblue; background: bottom; width : 10%; text-align : center" v-model="nb">
                                    <button  @click="incr()" id = "m" class="rounded-circle " :style=" { 'width': '30px', 'text-align': 'center', 'border': 'none'}" >+</button>
                                    <!-- <label style="margin-left: 60px;" >TOTAL : {{calcul}} $</label> -->
                                    <p style="margin-left: 50px; color: grey;">{{product.nb_tot}} Pieces availaible</p>
                                </div>
                                <br>
                                <div class="row  " style="    padding-bottom: 20px;">
                                    <div class="col-md-6 col-6 ">
                                        <button @click="save('rent')"  type="button" class="btn btn-dark w-100 " >PICK TO RENT</button> 
                                    </div>
                                    <div class="col-md-6 col-6 ">
                                        <button @click="save('wish')" type="button" class="btn btn-outline-secondary w-100 " >ADD TO WISH</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : "Details",
    props :{
        product : {}
    },
    data() {
        return {
            style : [true,false,false],
            paterns : [true,false,false],
            size : [true,false,false],
            nb : 1,
            dis : [true,false],
            img : "",
            prod : {
            name : this.product.name,
            descritption : this.product.description,
            price : this.product.price,
            url : this.product.min_imgs[0],
            size : this.product.size[0],
            nb : 1,
            total : this.product.price,
            patern : this.product.patern[0]
            }
        }
        
    },
    mounted() {             
        this.img = this.product.images[0];  
    }, 
    methods : {
        choose : function (i){
            this.style = [false,false,false];
            this.style[i]= !this.style[i];
            this.img = this.product.images[i];
        },
        choose_patern : function (i) {
           
            this.paterns = [false,false,false];
            this.paterns[i]= !this.paterns[i];
            if(this.paterns[i]) {
                this.prod.url=this.product.min_imgs[i];
                this.prod.patern=this.product.patern[i];
                this.img = this.product.min_imgs[i];
            }
            
        },
        choose_size : function(i) {
            this.size = [false,false,false];
            this.size[i]= !this.size[i];
            if(this.size[i]) this.prod.size=this.product.size[i];
        },
        save : function(a){
                var products=[] ;
                this.prod.name=this.product.name;
                this.prod.price=this.product.price;
                this.prod.description=this.product.description;
                if(a == 'rent'){
                    this.prod.nb = this.nb;
                    this.prod.total= this.calcul;
                    products = JSON.parse(localStorage.getItem('product_rent'));
                    products.unshift(this.prod);
                    localStorage.setItem('product_rent', JSON.stringify(products)); 
                    alert ("item added to Rents")
                }
                if(a == 'wish'){
                    this.prod.url=this.product.images[0];
                    products = JSON.parse(localStorage.getItem('product_wish'));
                    var ch = 0;
                    products.forEach(element => {
                        if(element.name == this.prod.name){
                            ch=1;
                        }
                    });
                    if(ch != 1){
                         products.unshift(this.prod);
                    }
                    localStorage.setItem('product_wish', JSON.stringify(products)); 
                    alert ("item added to Wishes")
                }
        },
        incr : function(){
            this.nb ++;
        },
        decr : function(){
            this.nb --;
        },
    },
    computed : {
        calcul : function(){
            if( this.nb > 0) return  this.nb * this.product.price;
            else return this.product.price;
        },
    },
}
</script>