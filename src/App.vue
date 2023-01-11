<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import navbar from "./components/navBar.vue";
import cards from "./components/cards.vue";
</script>

<template lang="pug">
navbar
br
HelloWorld
cards 
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
