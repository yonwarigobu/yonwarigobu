<template>
  <div>
    <HeaderApp></HeaderApp>
  </div>
  <div>
    <LogoutApp></LogoutApp>
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue"
import LogoutApp from "@/components/Logout.vue"

export default {
  components: {
    HeaderApp,
    LogoutApp,
  },
}
</script>
