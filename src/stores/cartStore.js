import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(item) {
      this.items.push(item); 
    },
    getTotal() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    },
    clearCart() {
      this.items = [];
    },
  },
});
