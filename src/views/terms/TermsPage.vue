<template>
  <div>
    <div class="mt-10 mb-10 primary-color title-text font-weight-bold">
      {{ i18n('termsPage.terms') }}
    </div>

    <v-container fluid>
      <v-row>
        <v-col cols="3"/>
        <v-col cols="6">
          <div class="text1 terms-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non scelerisque ipsum.
            In dapibus accumsan elit, non cursus odio sodales sed. Quisque ut est metus.
            Suspendisse bibendum non arcu sed accumsan. In sagittis gravida libero. Morbi euismod tristique facilisis.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Donec sit amet nunc nibh. Integer varius consequat felis non varius.
            Pellentesque semper libero ligula, nec convallis nibh faucibus at.
            Mauris dui ante, tincidunt in semper ut, efficitur id nisl.
            Vivamus dapibus, augue sed commodo feugiat, sem ipsum varius sem, in aliquam mauris lectus sed nisi.
            In vitae urna vel nisi posuere finibus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Suspendisse dignissim ante quis ex ultricies condimentum. Suspendisse a tincidunt elit.
            Etiam nec tempor dui, vel maximus augue. Nunc vitae rhoncus neque.
            Aenean neque diam, pretium non sapien vel, elementum efficitur neque. Fusce quis tellus non nisi porta
            ullamcorper.
            In hac habitasse platea dictumst. Ut vitae purus in dolor ornare suscipit.
            Curabitur ornare malesuada neque nec volutpat. Vestibulum eget massa enim.
            Suspendisse a est in sapien dapibus fringilla vel at ligula.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Suspendisse id blandit magna, in facilisis enim. Suspendisse potenti.
            Donec consequat dolor a ipsum imperdiet suscipit. Phasellus id lacus id quam tristique pretium ut a sapien.
            Pellentesque fringilla erat ante, et molestie nunc bibendum auctor.
            Nunc laoreet, ante nec rhoncus lobortis, dolor tellus viverra justo, in suscipit lacus lectus a orci.
            Suspendisse gravida leo a mollis lobortis. Donec interdum vehicula felis.
            Suspendisse dui neque, molestie id lacinia non, fermentum eget leo.
            Maecenas id ipsum vitae nulla accumsan pulvinar sit amet eget odio.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: 'TermsPage'
})
</script>

<style scoped>

.terms-text {
  font-size: 14pt;
  font-weight: lighter;
}

</style>
