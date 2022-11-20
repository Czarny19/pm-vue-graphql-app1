<template>
  <div class="pb-16">
    <AppInfo/>

    <div class="pt-10 pl-10 pr-10 pb-6 primary-color text-start title-text font-weight-bold">
      {{ i18n('locations') }}
    </div>

    <v-progress-circular v-if="loading" indeterminate color="primary" size="50" class="mt-10"/>

    <v-container fluid v-else>
      <v-row v-for="location in locationsTyped" :key="location.id">
        <v-col cols="9" class="pa-10 pt-6 pb-0 pr-5">
          <v-card class="bg-color" outlined elevation="4">
            <v-card-title class="primary-color">{{ location.name }}</v-card-title>
            <v-card-subtitle class="info-color text-body-1 text-start">
              {{ location.phone_number }}
            </v-card-subtitle>
            <v-card-text class="text2 text-body-1 text-start">
              {{ location.description }}
            </v-card-text>
            <v-card-actions class="mb-3">
              <v-btn text color="info" @click="goToAppointments(location.id)">
                {{ i18n('locationsPage.openDates') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="3" class="pt-6 pb-0 pr-5 pl-5">
          <v-card color="secondary" outlined elevation="0" class="pb-6">
            <v-container>
              <v-row>
                <v-col cols="8">
                  <v-card-title>{{ i18n('locationsPage.address') }}:</v-card-title>
                  <v-card-text class="text--primary text-h6 text-start">
                    {{ location.address_line_1 }}
                    <br/>
                    {{ location.address_line_2 }}
                  </v-card-text>
                </v-col>
                <v-col cols="4" justify="center" align-self="center">
                  <v-icon size="70" class="mt-auto">fa-map-location</v-icon>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppInfo from "@/components/AppInfo.vue";
import {GET_LOCATIONS} from "@/graphql/queries";
import {Location} from "@/graphql/types";

export default Vue.extend({
  name: 'LocationsPage',
  components: {AppInfo},
  data() {
    return {
      loading: true,
      locations: []
    }
  },
  computed: {
    locationsTyped(): Location[] {
      return this.locations as Location[]
    }
  },
  methods: {
    goToAppointments(locationId: number): void {
      this.$router.push({name: 'Appointments', params: {location: locationId.toString()}});
    }
  },
  apollo: {
    Med_Location: {
      query: GET_LOCATIONS,
      fetchPolicy: 'network-only',
      result({data}): void {
        this.locations = data.Med_Location;
        this.loading = false;
      }
    }
  }
})
</script>

<style scoped>

</style>
