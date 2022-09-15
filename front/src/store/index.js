import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products : [],
    product : {}
  },
  mutations: {
    async refproduct(state){
      state.products =  (await axios.get("http://localhost:3000/products/")).data
      
    },
    async refoneproduct(state){
      state.products =  (await axios.get("http://localhost:3000/products?id="+router.currentRoute.params.id)).data;
      state.product = state.products[0];
      console.log(router.currentRoute.params.id);

      console.log(state.product.name);
    },
  
  },
  actions: {
    async add_product (_,id) {
      await axios.get("http://localhost:3000/products/"+id);
    },
  },
  modules: {},
});
