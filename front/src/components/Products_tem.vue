<template>
    <div class="products_tem">
        
        <div class="c">
            <div class="col-md-10 col-10 container" style="padding-bottom : 10%;">
                <div class="row">
                    <div v-for="(p,i) in this.$store.state.products" :key="'C'+i" class="card col-md-2 col-sm-12 " style=" image-rendering: -webkit-optimize-contrast; border: aliceblue; padding-bottom : 50px;">
                        <img :src="p.images[0]" alt="" style="padding : 10px ; image-rendering: -webkit-optimize-contrast;" >
                        <h6 style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">{{p.name}}</h6>
                        <h5 > <strong> US {{p.price}} $</strong> </h5>
                         <div >
                           <button @click="go_details(p._id)" type="button" class="btn btn-outline-secondary " style="width : 85%;" >Details</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     name : "Products_tem",
    props :{
        products : {},
        
    },
    methods : {
        go_details : function(id){
            this.$emit('go_details',id);
        },
    }
}
</script>