<template>
    <v-footer app>
      <v-spacer></v-spacer>
   
        <div class="text-center">
            <v-btn @click="toggleTheme">zmeniť tému</v-btn>
        </div>

      <v-spacer></v-spacer>
    </v-footer>
  </template>
  
  <script>
  export default {
    name: 'TheFooter',
  };
  </script>
  
  <script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
  <style scoped>

  </style>