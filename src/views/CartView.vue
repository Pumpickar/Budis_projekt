<template>
  <v-container>
    <v-row v-if="cartItems.length > 0">
      <v-col v-for="(item, index) in cartItems" :key="index">
        <v-card>
          <v-card-title>{{ item.description }}</v-card-title>
          <v-card-text>{{ `Price: ${item.price} EUR` }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="cartItems.length">
      <v-col>
        <v-card>
          <v-card-text>{{ `Total: ${getTotal()} EUR` }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>Košík je prázdny</v-col>
    </v-row>
    <v-btn @click="resetCart" v-if="cartItems.length" color="primary">Zaplatiť</v-btn>
  </v-container>
</template>

<script>
import { useCartStore } from '@/stores/cartStore';

export default {
  data() {
    const cartStore = useCartStore();
    return {
      cartItems: cartStore.items,
    };
  },
  methods: {
    getTotal() {
      const cartStore = useCartStore();
      return cartStore.getTotal();
    },
    resetCart() {
      const cartStore = useCartStore();
      cartStore.clearCart();
      this.cartItems = [];
      console.log('Counter reset!');
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
</style>