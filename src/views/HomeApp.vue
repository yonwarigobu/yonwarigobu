<template>
  <div>
    <HeaderApp></HeaderApp>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderApp from "@/components/HeaderApp.vue"

export default {
  name: "HomeApp",
  components: {
    HeaderApp,
  },
}
</script>
