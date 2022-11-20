<template>
  <div v-if="!loading">
    <v-carousel
        height="300"
        interval="6000"
        continuous cycle hide-delimiters
        next-icon="fa-caret-right"
        prev-icon="fa-caret-left"
        show-arrows-on-hover
    >
      <v-carousel-item
          v-for="(slide, index) in slidesTyped"
          :style="{'background-color': slide.bg_color}"
          :key="index"
      >
        <v-row class="fill-height" justify="center" :style="{'color': slide.text_color}">
          <v-col cols="12" class="mt-auto mb-auto">
            <span class="text-h2">{{ slide.name }}</span>
            <br/><br/>
            <span class="text-h5">{{ slide.description }}</span>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-container class="pt-10 start-container">
      <v-row>
        <v-col cols="6">
          <v-card class="bg-color" outlined shaped elevation="8">
            <v-card-title class="primary-color">{{ i18n('locations') }}</v-card-title>
            <v-card-subtitle class="text2 text-body-1 text-start">
              {{ i18n('startPage.checkOurLocations') }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn text color="accent" @click="openLocations">
                {{ i18n('startPage.openLocations') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="6" class="pl-5">
          <v-card class="bg-color" outlined shaped elevation="8">
            <v-card-title class="primary-color">{{ i18n('doctors') }}</v-card-title>
            <v-card-subtitle class="text2 text-body-1 text-start">
              {{ i18n('startPage.checkOurDoctors') }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn text color="accent" @click="openDoctors">
                {{ i18n('startPage.openDoctors') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" class="pt-6">
          <v-card class="bg-color" outlined shaped elevation="8">
            <v-card-title class="primary-color">{{ i18n('dates') }}</v-card-title>
            <v-card-subtitle class="text2 text-body-1 text-start">
              {{ i18n('startPage.checkOurDates') }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn text color="accent" @click="openAppointments">
                {{ i18n('startPage.openDates') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {GET_PAGES} from "@/graphql/queries";
import {Page} from "@/graphql/types";

export default Vue.extend({
  name: 'StartPage',
  data() {
    return {
      loading: true,
      slides: []
    }
  },
  computed: {
    slidesTyped(): Page[] {
      return this.slides as Page[]
    }
  },
  methods: {
    openLocations(): void {
      this.$router.push({name: 'Locations'});
    },
    openDoctors(): void {
      this.$router.push({name: 'Doctors'});
    },
    openAppointments(): void {
      this.$router.push({name: 'Appointments'});
    }
  },
  apollo: {
    Med_Pages: {
      query: GET_PAGES,
      fetchPolicy: 'network-only',
      result({data}): void {
        this.slides = data.Med_Pages;
        this.loading = false;
      }
    }
  }
})
</script>

<style scoped>

.start-container {
  padding: 40px 10% 60px;
}

</style>
