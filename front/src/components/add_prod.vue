<template>
    <div class="add">
      <div class="col-md-10 col-10 container" >
      <div class="row  " style="margin: 40px;">
            <button type="button" class="btn btn-dark  col-md-2 " data-toggle="modal" data-target="#addproduct">
                Add Prodoct
            </button>
            <input class="form-control col-md-3 container" type="text"  placeholder="Search by ">            

            <!-- <input class="form-control col-md-3 container" type="text" v-model="code"   :placeholder="'Search by '+type_search">             -->
      </div>
    </div>
      <!-- <div class="row  " >
             <div class="col-md-2  container" style=" margin-left: 15%;">
                <h6 style="margin-top: 10px;" class="text-secondary">Acceil/{{this.$route.params.code}}/{{this.$route.params.name_pr}}</h6>
            </div>
             
             <div class="col-md-2  container" >
                <b-form-select class="bg-light" @change="change" v-model="$store.state.limit" :options="options"></b-form-select>
            </div>
            
      </div> -->

<!-- Modal -->

<div class="modal" id="addproduct" tabindex="-1" role="dialog">
            <div  class="col-md-5 container my-5 " >
                <div class="card">  
                    <div class="card-header text-center">
                            <h3>Add Product</h3>	
                    </div>
                    <div class=" card-body " >
                        <form class="frmm" method="post" @submit.prevent="add_prod()" enctype="multipart/form-data">
                          <div  class=" form-group">
                            <label></label>
                            <input v-model="ID" type="text" class="form-control" placeholder="Id Product" required>
                          </div>
                            <div class="card-footer">
                            <button type="submit"   class="btn btn-primary container">Add</button>
                            </div>
                        </form>
                    </div><br>
                </div>
            </div>
        </div>


        <!-- <div class="modal-body">
            <div class="card-body">
                <form  @submit.prevent="add_prod(ID)"  method="post" enctype="multipart/form-data">
                    <div  class=" form-group">
                        <label></label>
                            <input v-model="ID" type="text" class="form-control" placeholder="Name " required>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary container">Add</button>
                    </div>
                </form>
            </div>
        </div> -->
    </div>
</template>
<script>
    export default {
        name : "add",
        data () {
          return{
            ID : "",
          }
        },
        methods : {
            add_prod : function(){
                this.$emit('add_prod',this.ID)
                this.ID = null;
                

            }
        }
    }
</script>
