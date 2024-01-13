<template>
  <v-app-bar app>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="route in routes" :key="route.name" :to="route.path">
        {{ route.name }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sidebar: false,
      routes: [
        { path: '/', name: 'domov' },
        { path: '/fotky', name: 'fotky' },
        { path: '/sluzby', name: 'služby' },
        { path: '/kontakt', name: 'kontakt' },
        { path: '/cart', name: 'košík' },
      ],
    };
  },
};
</script>
