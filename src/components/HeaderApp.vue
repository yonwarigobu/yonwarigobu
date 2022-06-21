<template>
  <div class="header-container">
    <div class="header-img-container">
      <img class="header-img" src="../assets/tabiLogo.png" alt="" />
    </div>
    <div id="nav">
      <router-link class="menu" to="/home">HOME</router-link>

      <router-link class="menu" to="/post">POST</router-link>
      <!-- <router-link to="/mypage">Mypage</router-link>| -->
      <router-link class="menu" to="/logout">LOGOUT</router-link>
    </div>
  </div>
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-container {
}

.header-img-container {
  text-align: center;
  /* background-color: #00b5ad; */
}

.header-img {
  margin-top: 1rem;
  margin-bottom: 0;
  height: 10%;
  width: 10%;
  /* background-color: aqua; */
}

#nav {
  padding: 30px;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-family: Arial, Helvetica, sans-serif;
}

#nav a:hover {
  color: #00b5ad;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}

.menu {
  font-size: 1.5em;
  text-decoration: none;
  padding: 0 4em;
  display: block;
}

/*.menu:hover {
  background-color: #00b5ad;
}*/
</style>
