<template>
  <div class="pt-8">
    <div class="text-h6 text2 font-weight-bold" v-html="i18n('common.infoLine1')"/>
    <div class="text-h6 text2 font-weight-bold" v-html="i18n('common.infoLine2')"/>
    <div class="text-h6 info-color font-weight-bold pt-5" v-html="i18n('common.infoLine3')"/>
    <div class="text-h6 text2 font-weight-bold pt-5" v-html="i18n('common.infoLine4')"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'AppInfo'
})
</script>

<style scoped>

</style>
