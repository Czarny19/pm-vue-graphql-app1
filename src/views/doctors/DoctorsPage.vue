<template>
  <div>
    <AppInfo/>

    <div class="pt-10 pl-10 pr-10 primary-color text-start title-text font-weight-bold">
      {{ i18n('doctors') }}
    </div>

    <v-progress-circular v-if="loading" indeterminate color="primary" size="50" class="mt-10"/>

    <v-container fluid class="pa-10" v-else>
      <v-row v-for="doctor in doctorsTyped" :key="doctor.id">
        <v-col cols="2">
          <div class="text-left primary-color text-h6 font-weight-bold">{{ doctor.name }}</div>
          <div class="text-left text2 text-h6 font-weight-bold">{{ doctor.specialization }}</div>
        </v-col>
        <v-col cols="2">
          <DoctorsVisitingHours :day="0" :location="doctor.monday_location" :hours="doctor.monday_hours"/>
        </v-col>
        <v-col cols="2">
          <DoctorsVisitingHours :day="1" :location="doctor.tuesday_location" :hours="doctor.tuesday_hours"/>
        </v-col>
        <v-col cols="2">
          <DoctorsVisitingHours :day="2" :location="doctor.wednesday_location" :hours="doctor.wednesday_hours"/>
        </v-col>
        <v-col cols="2">
          <DoctorsVisitingHours :day="3" :location="doctor.thursday_location" :hours="doctor.thursday_hours"/>
        </v-col>
        <v-col cols="2">
          <DoctorsVisitingHours :day="4" :location="doctor.friday_location" :hours="doctor.friday_hours"/>
        </v-col>
        <v-col cols="12" class="text-start">
          <v-btn color="info" @click="goToAppointments(doctor.id)">{{ i18n('reserveADate') }}</v-btn>
        </v-col>
        <v-col cols="12" class="text-start">
          <v-divider class="divider"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppInfo from "@/components/AppInfo.vue";
import DoctorsVisitingHours from "@/views/doctors/component/DoctorsVisitingHours.vue";
import {GET_DOCTORS} from "@/graphql/queries";
import {Doctor} from "@/graphql/types";

export default Vue.extend({
  name: 'DoctorsPage',
  components: {DoctorsVisitingHours, AppInfo},
  data() {
    return {
      loading: true,
      doctors: []
    }
  },
  computed: {
    doctorsTyped(): Doctor[] {
      return this.doctors as Doctor[]
    }
  },
  methods: {
    goToAppointments(doctorId: number): void {
      this.$router.push({name: 'Appointments', params: {doctor: doctorId.toString()}});
    }
  },
  apollo: {
    Med_Doctor: {
      query: GET_DOCTORS,
      fetchPolicy: 'network-only',
      result({data}): void {
        this.doctors = data.Med_Doctor;
        this.loading = false;
      }
    }
  }
})
</script>

<style scoped>

</style>
