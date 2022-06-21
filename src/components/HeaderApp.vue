<template>
  <div id="nav">
    <router-link class="menu" to="/home">HOME</router-link>

    <router-link class="menu" to="/post">POST</router-link>
    <!-- <router-link to="/mypage">Mypage</router-link>| -->
    <router-link class="menu" to="/logout">LOGOUT</router-link>
  </div>
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;*/
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  font-weight: bold;
  /*color: #2c3e50;*/
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.menu {
  font-size: 2rem;
  text-decoration: none;
  padding: 0 4em;
  display: block;
}

.menu:hover {
  background-color: #00b5ad;
}
</style>
