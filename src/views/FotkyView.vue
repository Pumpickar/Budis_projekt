<template>
  <v-row justify="center" align="center">
    <photo-container
      v-for="(photo, index) in photos"
      :key="index"
      :photo="photo"
      :addToCartProp="addToCart"
    ></photo-container>
  </v-row>
</template>

<script>
import PhotoContainer from '@/components/PhotoContainer.vue';
import { useCartStore } from '@/stores/cartStore';

export default {
  components: {
    PhotoContainer,
  },
  data() {
    return {
      photos: [
        { src: 'src/assets/img/cat.png', description: 'Leopardo DaWinczy (autoportrét)', price: 10 },
        { src: 'src/assets/img/dog.png', description: 'Vincent van Rogh (autoportrét)', price: 10 },
        { src: 'src/assets/img/SwoleDoge.png', description: 'Vincent van Rogh (prémium)', price: 20 },
        { src: 'src/assets/img/vanGoghAI.png', description: 'Výhľad na more (van Rogh)', price: 30 },
        { src: 'src/assets/img/chair.png', description: 'Stolička (umelecká)', price: 50 },
        { src: 'src/assets/img/jezisko.jpg', description: 'Zjavenie (DaWinczy)', price: 20 },

      ],
    };
  },
  methods: {
    addToCart(photo) {
      const cartStore = useCartStore();
      cartStore.addToCart(photo);
      console.log('pridáva sa do košíka', photo);
    },
  },
};
</script>
