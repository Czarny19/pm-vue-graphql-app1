<template>
  <v-app-bar color="primary" app clipped-left>
    <v-toolbar-title class="text-h6">
      {{ i18n('title') }}
    </v-toolbar-title>

    <v-toolbar-items class="ml-16">
      <v-btn min-width="100" text @click="goToStart">
        {{ i18n('start') }}
      </v-btn>

      <v-btn min-width="100" text @click="goToLocations">
        {{ i18n('locations') }}
      </v-btn>

      <v-btn min-width="100" text @click="goToDoctors">
        {{ i18n('employees') }}
      </v-btn>

      <v-btn min-width="100" text @click="goToAppointments">
        {{ i18n('reserveADate') }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'AppBar',
  methods: {
    goToStart(): void {
      this.$router.push({name: 'Start'});
    },
    goToLocations(): void {
      this.$router.push({name: 'Locations'});
    },
    goToDoctors(): void {
      this.$router.push({name: 'Doctors'});
    },
    goToAppointments(): void {
      this.$router.push({name: 'Appointments'});
    },
  }
})
</script>

<style scoped>

</style>
