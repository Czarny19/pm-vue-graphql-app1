<template>
  <div>
    <v-text-field light outlined class="mt-14" :value="location" readonly :label="i18n('reservationPage.location')"/>
    <v-text-field light outlined :value="doctor" readonly :label="i18n('reservationPage.doctor')"/>

    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="6">
          <v-text-field light outlined :value="date" readonly :label="i18n('reservationPage.date')"/>
        </v-col>

        <v-col cols="6">
          <v-text-field light outlined :value="hour" readonly :label="i18n('reservationPage.hour')"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Doctor, Location} from "@/graphql/types";

export default Vue.extend({
  name: 'ReservationInfo',
  props: {
    locations: Array,
    doctors: Array
  },
  computed: {
    location(): string {
      const locationId = Number(this.$route.params.location);
      return (this.locations as Location[]).find((item) => item.id === locationId)?.name ?? '';
    },
    doctor(): string {
      const doctorId = Number(this.$route.params.location);
      return (this.doctors as Doctor[]).find((item) => item.id === doctorId)?.name ?? '';
    },
    date(): string {
      return this.$route.params.date;
    },
    hour(): string {
      return this.$route.params.hour;
    }
  }
})
</script>

<style scoped>

</style>
