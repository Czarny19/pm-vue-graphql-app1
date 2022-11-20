<template>
  <div>
    <div class="text-left text2 text-body-1 font-weight-bold">{{ dayOfWeek() }}:</div>
    <div class="text-left primary-color text-body-1">{{ location }}</div>
    <div class="text-left text1 text-body-1 font-weight-bold">{{ hours }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'DoctorsVisitingHours',
  props: {
    day: Number,
    location: String,
    hours: String
  },
  methods: {
    dayOfWeek(): string {
      switch (this.day) {
        case 0:
          return this.$t('common.monday').toString();
        case 1:
          return this.$t('common.tuesday').toString();
        case 2:
          return this.$t('common.wednesday').toString();
        case 3:
          return this.$t('common.thursday').toString();
        case 4:
          return this.$t('common.friday').toString();
        default:
          return this.$t('common.monday').toString();
      }
    }
  }
})
</script>

<style scoped>

</style>
