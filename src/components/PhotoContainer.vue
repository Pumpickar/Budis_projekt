<template>
  <v-col cols="12" md="6" lg="4">
    <v-card>
      <v-img :src="photo.src" alt="Photo"></v-img>
      <v-card-text>{{ photo.description }}</v-card-text>
      <v-card-subtitle>{{ photo.price }} EUR</v-card-subtitle>
      <v-btn @click="addToCart">pridať do košíka</v-btn>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    photo: Object,
    addToCartProp: Function,
  },
  methods: {
    addToCart() {
      this.addToCartProp(this.photo);
    },
  },
};
</script>
