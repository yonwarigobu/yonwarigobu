<template>
  <div></div>
  <router-view />
</template>

<script>
export default {
  components: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "M PLUS Rounded 1c";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccccff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ccccff;
}

#nav a.router-link-exact-active {
  color: #ccccff;
}
</style>
