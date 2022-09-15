<template>
    <div class="rnt ">
        <Rent_product :products="prods" :tot="tot" @remove="remove($event)" @go_details="go_details($event)" @totale="totale()" />
    </div>
</template>
<script>
import Rent_product from "../components/Rent_product.vue";
export default {
    name : "Rent",
    components : {
        Rent_product,
    },
    data(){
        return {
            prods : JSON.parse(localStorage.getItem('product_rent')),
            tot : 0,
        }
    },
    mounted (){
        for(let i = 0 ; i<this.prods.length;i++){
                this.tot += this.prods[i].total;
            }
    },
    methods : {
        remove : function(i){
            var pr = this.prods.filter((item,index) => index != i);
            localStorage.setItem('product_rent',JSON.stringify(pr) );
            this.prods = JSON.parse(localStorage.getItem('product_rent'));
            this.tot=0;
            for(let j = 0 ; j<this.prods.length;j++){
                this.tot += this.prods[j].total;
            }
        },
        go_details : function(name){
            this.$router.push({ path: `/product/${name}` })
        },
        totale : function(){
            for(let i = 0 ; i<this.prods.length;i++){
                this.tot += this.prods[i].total;
            }
        }
    },
   
}
</script>