<template>
  <v-col cols="12" md="6" lg="4">
    <v-card>
      <v-card-title>{{ service.description }}</v-card-title>
      <v-card-subtitle>{{ `Price: ${service.price} EUR` }}</v-card-subtitle>
      <v-btn @click="addToCart">pridať do košíka</v-btn>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    service: Object,
    addToCartProp: Function,
  },
  methods: {
    addToCart() {
      this.addToCartProp(this.service);
    },
  },
};
</script>