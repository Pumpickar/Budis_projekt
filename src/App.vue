<template>
  <v-app>
    <TheNavbar />

    <v-container class="mt-15 mb-15">
      <router-view></router-view>
    </v-container>

    <TheFooter />
  </v-app>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';


export default {
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>