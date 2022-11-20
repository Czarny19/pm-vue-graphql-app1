<template>
  <v-container>
    <v-row>
      <v-col cols="3"/>
      <v-col cols="6" class="pt-10">
        <v-icon color="success" size="70">fa-check-circle</v-icon>

        <div class="pt-8 primary-color text-h5 font-weight-bold">
          {{ i18n('confirmationPage.confirmationInfo') }}
        </div>

        <div class="pb-4 text2 text-h6">
          {{ i18n('confirmationPage.reservationNum') }} {{ reservationId }}
        </div>

        <div class="pt-8 pb-10 primary-color text-h5 font-weight-bold">
          {{ i18n('confirmationPage.details') }}
        </div>

        <v-text-field
            light outlined
            :value="location"
            readonly
            :label="i18n('confirmationPage.location')"
        />

        <v-text-field
            light outlined
            :value="doctor"
            readonly
            :label="i18n('confirmationPage.doctor')"
        />

        <v-text-field
            light outlined
            :value="date"
            readonly
            :label="i18n('confirmationPage.date')"
        />

        <v-text-field
            light outlined
            :value="hour"
            readonly
            :label="i18n('confirmationPage.hour')"
        />

        <v-btn class="pa-6" block color="accent" @click="backToStart">{{ i18n('confirmationPage.backToStart') }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {Doctor, Location} from "@/graphql/types";
import {GET_DOCTORS_PICKLIST, GET_LOCATIONS_PICKLIST} from "@/graphql/queries";

export default Vue.extend({
  name: 'ConfirmationPage',
  data() {
    return {
      locations: [],
      doctors: []
    }
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
    },
    reservationId(): number {
      return Number(this.$route.params.reservationId);
    }
  },
  methods: {
    backToStart() {
      this.$router.push({name: 'Start'});
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

</style>
