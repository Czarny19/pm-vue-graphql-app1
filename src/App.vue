<template>
  <v-app>
    <div id="app-main">
      <AppBar/>
      <v-main>
        <router-view/>
      </v-main>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "@/components/AppBar.vue";

export default Vue.extend({
  name: 'App',
  components: {AppBar}
})
</script>

<style lang="scss">
@import "./assets/styles/main";
</style>
