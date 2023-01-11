<template lang="pug">
.mb-5
  .nav-bar.p-3
    .row.justify-content-between
      .col-lg-1.col-3
        img(src="../assets/imgs/logo2.svg" alt="" )
      .col-1
        .d-flex.justify-content-center.align-items-center
          a(href="https://www.instagram.com/andresnavrro/" target="_blank")
            img.social-icon(src="../assets/imgs/instagram.svg" alt="")
</template>

<script>
export default {};
</script>

<style lang="sass">
.nav-bar
  top: 0
  position: fixed
  z-index: 1
  margin-bottom: 30px
  background-color: #1b1b1b
  width: 100%
  // box-shadow: 10px 1px 100px #8f8f8f
</style>
