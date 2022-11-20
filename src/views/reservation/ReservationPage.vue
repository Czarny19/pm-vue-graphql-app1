<template>
  <v-container class="form-container">
    <v-row>
      <v-col cols="3"/>
      <v-col cols="6">
        <div class="mt-8 primary-color text-start text-h5 font-weight-bold">
          {{ i18n('reservationPage.reservation') }}
        </div>

        <ReservationInfo :locations="locations" :doctors="doctors"/>
        <ReservationForm/>
      </v-col>
      <v-col cols="3"/>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ReservationInfo from "@/views/reservation/component/ReservationInfo.vue";
import ReservationForm from "@/views/reservation/component/ReservationForm.vue";
import {GET_DOCTORS_PICKLIST, GET_LOCATIONS_PICKLIST} from "@/graphql/queries";

export default Vue.extend({
  name: 'ReservationPage',
  components: {ReservationForm, ReservationInfo},
  data() {
    return {
      locations: [],
      doctors: []
    }
  },
  apollo: {
    Med_Location: {
      query: GET_LOCATIONS_PICKLIST,
      fetchPolicy: 'network-only',
      result({data}): void {
        this.locations = data.Med_Location;
      }
    },
    Med_Doctor: {
      query: GET_DOCTORS_PICKLIST,
      fetchPolicy: 'network-only',
      result({data}): void {
        this.doctors = data.Med_Doctor;
      }
    }
  }
})
</script>

<style scoped>

.form-container {
  padding-bottom: 120px !important;
}

</style>
