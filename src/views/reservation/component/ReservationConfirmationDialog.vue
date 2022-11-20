<template>
  <div class="text-center">
    <v-dialog v-model="isOpen" width="400">
      <v-card class="bg-color">
        <v-card-title class="primary-color">
          {{ i18n('reservationPage.confirmation') }}
        </v-card-title>
        <v-card-subtitle class="text-start text-body-1 pt-4 text1">
          {{ i18n('reservationPage.confirmationInfo') }}
        </v-card-subtitle>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="mr-4" text color="error" @click="cancel">{{ i18n('common.cancel') }}</v-btn>
          <v-btn text color="success" @click="confirm">{{ i18n('common.submit') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'ReservationConfirmationDialog',
  props: {
    dialog: Boolean,
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    confirm(): void {
      this.$emit('choiceclick', true);
      this.isOpen = false;
    },
    cancel(): void {
      this.$emit('choiceclick', false);
      this.isOpen = false;
    }
  },
  watch: {
    dialog(): void {
      this.isOpen = this.dialog;
    }
  }
})
</script>

<style scoped>

</style>
