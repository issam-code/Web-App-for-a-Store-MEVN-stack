<template>
  <div class="product">
    <Details_prod :product="showProduct" />
  </div>
</template>
<script>
import Details_prod from "@/components/Details_prod.vue";
export default {
  name : "Product",
  components : {
    Details_prod,
  },
  data(){
    return {
      // prods :  JSON.parse(localStorage.getItem('products')),
      i : '',
    }
  },
  async created () {
      this.$store.commit('refproduct');
    },
    
  computed : {
        showProduct() {
          const id = this.$route.params.id;
          const product = this.$store.state.products.find((p) => p._id === id);
          return product;
        },
    }
  
}


</script>
