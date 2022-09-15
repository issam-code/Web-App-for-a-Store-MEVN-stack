<template>
    <div class="wished">
        <div class="container">
            <div class="col-md-12 col-sm-12">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div v-for="(p,index) in products" :key="index" class="card col-md-10 col-sm-12 container bg-light text-left" style=" border: aliceblue;   ">
                            <div   class="row">
                                <div class="col-md-4 col-sm-12 "> 
                                    <center class="d-flex">                            
                                    <img :src="p.url" alt="" style="   width: 70%;   margin: 10px; overflow: auto;">
                                    </center>                       
                                </div>
                                <div class="col-md-8 col-sm-12 " >
                                    <a href="" style="text-decoration:none;"><h2 @click="go_details(p.name)" style=" padding-top: 20px; color : black; ">{{p.name}}</h2></a> 
                                    <p>{{p.description}} </p>
                                    <div class="row">
                                        <div class="col-md-7 col-sm-6 col-5">
                                            <p style="    padding-top: 7px;"><strong>US <strong> {{p.prix}} </strong>$</strong> </p>
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
        </div>
    </div>
</template>
<script>
export default {
    name: "wished",
    props : {
        products : {},
    },
    methods : {
        remove : function(i){
            this.$emit('remove',i)
        },
        go_details : function(name){
            this.$emit('go_details',name)
        },
    }
}
</script>