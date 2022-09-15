<template>
    <div class="prods">
      <card_top />
      <add @add_prod = add_prod($event) />
      <Products  @go_details="go_details($event)" />
        
    </div>
</template>
<script>
import Products from "../components/Products_tem.vue";
import card_top from "../components/card_top.vue";
import add from "../components/add_prod.vue";

export default {
    name : "products",
    components : {
        Products,
        card_top,
        add
    },
    async created () {
      this.$store.commit('refproduct');
    },
    data(){
      return {
        // prods : JSON.parse(localStorage.getItem('products')),
      }
    },
    methods : {
      go_details : function(name){
        this.$router.push({ path: `/product/${name}` })
      },
      add_prod : function (id) {
                this.$store.dispatch('add_product',id)
                .then(  () => {
                this.$store.commit('refproduct');
                });
            }
    }
}
</script>