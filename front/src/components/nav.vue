<template>
    <div  class="navbar navbar-light bg-light col-md-12 col-sm-12 text-left">
        <h3 class="col-md-8 col-8">Product Store</h3>
            <router-link  :to="{ name: 'Home' }">Home</router-link>
            <router-link   :to="{ name: 'Home' }"><i class="far fa-heart " ></i></router-link>
            <router-link   :to="{ name: 'Home' }"><i class="fas fa-shopping-cart "></i></router-link>        
    </div>
</template>