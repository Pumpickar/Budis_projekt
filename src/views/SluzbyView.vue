<template>
      <article-component></article-component>
  <div>
    <v-row justify="center" align="center">
      <service-container
        v-for="(service, index) in services"
        :key="index"
        :service="service"
        :addToCartProp="addToCart"
      ></service-container>
    </v-row>

  </div>
  
</template>

<script>
import ServiceContainer from '@/components/ServiceContainer.vue';
import ArticleComponent from '@/components/TheArticle.vue';
import { useCartStore } from '@/stores/cartStore';

export default {
  components: {
    ServiceContainer,
    ArticleComponent,
  },
  data() {
    return {
      services: [
        { description: 'nafúkať gumy na bicykli', price: 10 },
        { description: 'fotografia (profesionálna)', price: 20 },
        { description: 'portrét (veľmi profesionálny)', price: 30 },

      ],
    };
  },
  methods: {
    addToCart(service) {
      const cartStore = useCartStore();
      cartStore.addToCart(service);
      console.log('Adding to cart:', service);
    },
  },
};
</script>