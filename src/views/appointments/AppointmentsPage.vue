<template>
  <div>
    <AppInfo/>

    <v-progress-circular v-if="loading" indeterminate color="primary" size="50" class="mt-10"/>

    <v-container class="page-container" v-else>
      <div class="pt-12 pb-3 primary-color text-start title-text font-weight-bold">
        {{ i18n('appointmentsPage.availableDates') }}
      </div>

      <v-select
          outlined
          class="mt-3"
          light
          persistent-hint
          item-value="id"
          item-text="name"
          item-color="white"
          v-model="location"
          :items="locations"
          :label="i18n('appointmentsPage.location')"
          :hint="i18n('appointmentsPage.locationHint')"
      />

      <v-select
          outlined
          class="mt-3"
          light
          persistent-hint
          item-value="id"
          item-text="name"
          item-color="white"
          v-model="doctor"
          :items="doctors"
          :label="i18n('appointmentsPage.doctor')"
          :hint="i18n('appointmentsPage.doctorHint')"
      />

      <v-divider class="divider mt-4"/>

      <v-row v-for="appointment in filteredAppointments" :key="appointment.id">
        <v-col cols="12" class="mt-8 pb-3">
          <v-card class="bg-color" outlined elevation="4">
            <v-card-title class="primary-color">{{ appointment.date }}</v-card-title>
            <v-card-subtitle class="info-color text-body-1 text-start">
              {{ appointment.location.name }}
            </v-card-subtitle>
            <v-card-text class="accent-color text-body-1 text-start">
              {{ appointment.doctor.name }}
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="2" class="pa-1 pl-3 pr-3" v-for="reservation in appointment.reservations" :key="reservation.id">
          <v-btn
              color="info"
              light
              block
              :disabled="reservation.is_reserved"
              @click="goToReservation(appointment, reservation)"
          >
            {{ i18n('appointmentsPage.hour') }} {{ reservation.hour }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppInfo from "@/components/AppInfo.vue";
import {GET_APPOINTMENTS, GET_DOCTORS_PICKLIST, GET_LOCATIONS_PICKLIST} from "@/graphql/queries";
import {Appointment, Reservation} from "@/graphql/types";

export default Vue.extend({
  name: 'AppointmentsPage',
  components: {AppInfo},
  data() {
    return {
      location: -1,
      locations: [],
      loadingLocations: false,
      doctor: -1,
      doctors: [],
      loadingDoctors: false,
      appointments: [],
      loadingAppointments: false
    }
  },
  computed: {
    loading(): boolean {
      return this.loadingLocations || this.loadingDoctors || this.loadingAppointments;
    },
    filteredAppointments(): Appointment[] {
      let filtered = (this.appointments as Appointment[]);

      if (this.location >= 0) {
        filtered = filtered.filter((item) => item.location_id === this.location);
      }

      if (this.doctor >= 0) {
        filtered = filtered.filter((item) => item.doctor_id === this.doctor);
      }

      return filtered;
    }
  },
  methods: {
    goToReservation(appointment: Appointment, reservation: Reservation): void {
      this.$router.push({
        name: 'Reservation', params: {
          location: appointment.location_id.toString(),
          doctor: appointment.doctor_id.toString(),
          hour: reservation.hour,
          date: appointment.date,
          reservationId: reservation.id.toString()
        }
      });
    }
  },
  apollo: {
    Med_Location: {
      query: GET_LOCATIONS_PICKLIST,
      fetchPolicy: 'network-only',
      result({data}): void {
        this.locations = data.Med_Location;
        this.loadingLocations = false;
      }
    },
    Med_Doctor: {
      query: GET_DOCTORS_PICKLIST,
      fetchPolicy: 'network-only',
      result({data}): void {
        this.doctors = data.Med_Doctor;
        this.loadingDoctors = false;
      }
    },
    Med_Appointments: {
      query: GET_APPOINTMENTS,
      fetchPolicy: 'network-only',
      result({data}): void {
        this.appointments = data.Med_Appointments;
        this.loadingAppointments = false;
      }
    },
  },
  beforeMount() {
    this.location = Number(this.$route.params.location)
    this.doctor = Number(this.$route.params.doctor)
  }
})
</script>

<style scoped>

.page-container {
  padding: 30px 10% 80px;
  min-width: 100%;
}

</style>
