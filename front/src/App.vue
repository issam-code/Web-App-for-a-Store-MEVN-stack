<template>
  <div id="app">
      <div  class="navbar navbar-light col-md-12 col-sm-12 text-left">
        <router-link   :to="{ name: 'Products' }" style=" color: black;  text-decoration:none; "><h3 >Products Store</h3></router-link>
          <div style="padding-right: 20px;">
            <router-link style="font-size : 35px;" class="col-md-4 col-4" :to="{ name: 'Wish' }"><i  style=" color: black;" class="fas fa-heart"></i></router-link>
            <router-link style="font-size : 35px;"  class="col-md-4 col-4"  :to="{ name: 'Rent' }"><i style=" color: black;" class="fas fa-shopping-cart "></i></router-link>        
          </div>
      </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
