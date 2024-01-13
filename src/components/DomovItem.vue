<template>
    <div class="welcome">
      <h1>Vitajte u nás!</h1>
      <p>Sme radi, že ste tu. Užite si prehliadku moderného umenia.</p>
  
      <div class="links">

        <router-link to="/fotky" class="link">
          <img src="../assets/img/fotky.png" alt="Fotky">
          <p>prejsť na prehliadku</p>
        </router-link>
        <router-link to="/sluzby" class="link">
          <img src="../assets/img/sluzby.png" alt="Služby">
          <p>prejsť mna služby</p>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .welcome {
    text-align: center;
    padding: 20px;
  }
  
  .links {
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
  }
  
  .link img {
    width: 500px;
    height: 350px;
  }
  </style>
  