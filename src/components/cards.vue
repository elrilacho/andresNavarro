<template lang="pug">
.p-5.mx-5
  .content-cards.row.justify-content-center.align-items-end
    .col-xl-3(v-for="(item, index) in items" :key="index")
      .tarjeta-album.text-white.h-100
        img(:src="item.imagen")
        .text-center
          h3.mb-1 {{ item.name }}
          h5.mb-1 {{ item.artist }}
          p.mb-1 {{ item.rol }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          imagen: "imagenes/img3.jpg",
          name: "Si te vas",
          artist: "Josele",
          rol: "Piano y produccion",
        },
        {
          imagen: "imagenes/img5.jpg",
          name: "Somos y nos tenemos",
          artist: "El Rila",
          rol: "Piano y co-produccion",
        },
        {
          imagen: "imagenes/img4.png",
          name: "Adictivo",
          artist: "Bienmeli",
          rol: "Piano y co-produccion",
        },
        {
          imagen: "imagenes/img6.jpg",
          name: "So High",
          artist: "Garca",
          rol: "Piano y produccion",
        },
        {
          imagen: "imagenes/img2.jpg",
          name: "Girl",
          artist: "El Rila ft El Ruido",
          rol: "Piano y produccion",
        },
        {
          imagen: "imagenes/forero.jpg",
          name: "Raices de un corazón",
          artist: "Andres forero",
          rol: "Piano",
        },
        {
          imagen: "imagenes/kuisi.jpg",
          name: "Tradicion Viva",
          artist: "Kuisitambo",
          rol: "Piano",
        },
        {
          imagen: "imagenes/img1.jpg",
          name: "Entre montaña y cemento",
          artist: "Ricardo Andres",
          rol: "Piano",
        },
      ],
    };
  },
};
</script>

<style lang="sass"></style>
