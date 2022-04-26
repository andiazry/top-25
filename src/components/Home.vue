<template>
  <main>
    <Header />
    <Featured />
    <CardCarousel />
    <Footer />
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Featured from "../components/Featured.vue";
import CardCarousel from "../components/CardCarousel.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Featured,
    CardCarousel,
    Footer,
  },
};
</script>
