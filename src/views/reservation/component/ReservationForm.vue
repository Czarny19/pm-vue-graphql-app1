<template>
  <div v-if="saving">
    <v-progress-circular indeterminate color="primary" size="50" class="mt-10"/>

    <div class="pt-6 pl-10 pr-10 pb-6 primary-color text-h5 font-weight-bold">
      {{ i18n('common.saving') }}
    </div>
  </div>

  <v-form v-else v-model="valid" ref="form" @submit.prevent="submit">
    <ReservationConfirmationDialog :dialog="confirmation" @choiceclick="confirm"/>

    <div class="mt-10 accent-color text-h5">
      {{ i18n('reservationPage.patientInfo') }}
    </div>

    <v-container fluid class="pa-0 pt-8">
      <v-row>
        <v-col cols="6">
          <v-text-field
              light
              v-model="reservationToSave.name"
              :rules="nameRules"
              :label="i18n('reservationPage.name')"
          />
        </v-col>

        <v-col cols="6">
          <v-text-field
              light
              v-model="reservationToSave.surname"
              :rules="surnameRules"
              :label="i18n('reservationPage.surname')"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-text-field
        light
        class="mt-4"
        v-model="reservationToSave.email"
        :rules="emailRules"
        :label="i18n('reservationPage.email')"
    />

    <v-text-field
        light
        class="mt-4"
        v-model="reservationToSave.phone"
        :rules="phoneRules"
        :label="i18n('reservationPage.phoneNum')"
    />

    <div class="mt-10 accent-color text-h5">
      {{ i18n('reservationPage.reason') }}
    </div>

    <div class="mt-10 info-color text-body-1 text-start">
      {{ i18n('reservationPage.reasonHint') }}
    </div>

    <v-textarea light rows="5" v-model="reservationToSave.cause" :label="i18n('reservationPage.reason')"/>

    <v-checkbox
        light color="success"
        on-icon="fa-square-check"
        off-icon="fa-square"
        :rules="termsRules"
        :label="i18n('reservationPage.acceptTerms')"
    />

    <div class="text-start pt-2">
      <a href="http://localhost:8081/#/terms" target="_blank" class="text1 text-body-1">
        {{ i18n('reservationPage.terms') }}
      </a>
    </div>

    <v-btn block color="success" class="mt-10 pa-5" @click="submit">
      {{ i18n('reservationPage.reserve') }}
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import {RESERVE_APPOINTMENT} from "@/graphql/queries";
import {Reservation} from "@/graphql/types";
import ReservationConfirmationDialog from "@/views/reservation/component/ReservationConfirmationDialog.vue";

export default Vue.extend({
  name: 'ReservationForm',
  components: {ReservationConfirmationDialog},
  props: {
    locations: Array,
    doctors: Array
  },
  data() {
    return {
      reservationToSave: {},
      valid: false,
      confirmation: false,
      saving: false,
      nameRules: [
        (v: string) => !!v || this.$t('reservationPage.fieldRequired')
      ],
      surnameRules: [
        (v: string) => !!v || this.$t('reservationPage.fieldRequired')
      ],
      emailRules: [
        (v: string) => !!v || this.$t('reservationPage.fieldRequired'),
        (v: string) => (!v || v && new RegExp('[a-zA-Z0-9+_-]+@[a-zA-Z0-9+_-]+[.][a-zA-Z0-9+_-]+').test(v)) || this.$t('reservationPage.incorrectEmail')
      ],
      phoneRules: [
        (v: string) => !!v || this.$t('reservationPage.fieldRequired'),
        (v: string) => (!v || v && new RegExp('[+][0-9]{2}\\s[0-9]{9}').test(v)) || this.$t('reservationPage.incorrectPhone')
      ],
      termsRules: [
        (v: boolean) => v || this.$t('reservationPage.fieldRequired')
      ],
    }
  },
  computed: {
    reservationId(): number {
      return Number(this.$route.params.reservationId);
    },
    location(): number {
      return Number(this.$route.params.location);
    },
    doctor(): number {
      return Number(this.$route.params.location);
    },
    date(): string {
      return this.$route.params.date;
    },
    hour(): string {
      return this.$route.params.hour;
    }
  },
  methods: {
    submit(): void {
      (this.$refs.form as Vue & { validate: () => boolean }).validate();

      if (this.valid) {
        this.confirmation = true;
      }
    },
    confirm(confirmed: boolean): void {
      this.confirmation = false;
      this.saving = confirmed;

      if (confirmed) {
        this.reserve();
      }
    },
    reserve(): void {
      this.$apollo.mutate({
        mutation: RESERVE_APPOINTMENT,
        variables: {
          id: this.reservationId,
          isReserved: true,
          name: (this.reservationToSave as Reservation).name,
          surname: (this.reservationToSave as Reservation).surname,
          email: (this.reservationToSave as Reservation).email,
          phone: (this.reservationToSave as Reservation).phone,
          cause: (this.reservationToSave as Reservation).cause
        }
      }).then(() => {
        this.goToConfirmation();
      }).catch(() => {
        this.$router.push({name: 'Start'});
      })
    },
    goToConfirmation() {
      this.$router.push({
        name: 'Confirmation', params: {
          location: this.location.toString(),
          doctor: this.doctor.toString(),
          hour: this.hour,
          date: this.date,
          reservationId: this.reservationId.toString()
        }
      });
    }
  },
  beforeMount() {
    (this.reservationToSave as Reservation).phone = '+48 ';
  }
})
</script>

<style scoped>

</style>
