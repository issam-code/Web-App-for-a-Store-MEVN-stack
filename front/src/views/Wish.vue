<template>
    <div class="wish">
    <Wished :products="prods" @remove="remove($event)" @go_details="go_details($event)" />
    </div>
</template>
<script>
import Wished from "../components/wished_product.vue";
export default {
    name: "wish",
    components: {
        Wished,
    },
    data(){
        return {
            prods :JSON.parse(localStorage.getItem('product_wish')),
        }
    },
    methods : {
        remove : function(i){
            var pr = this.prods.filter((item,index) => index != i);
            localStorage.setItem('product_wish',JSON.stringify(pr));
            this.prods =JSON.parse(localStorage.getItem('product_wish'));
        },
        go_details : function(name){
            this.$router.push({ path: `/product/${name}` })
        },
    },
}
</script>