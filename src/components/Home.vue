<template>
  <main>
    <header class="grid lg:grid-cols-5 mx-12 mt-12">
      <div class="col-span-3">
        <h1
          class="font-neueMontrealBold text-[450px] leading-[350px] uppercase"
        >
          Top 25
        </h1>
      </div>
      <div class="col-span-2">
        <img class="scale-75" src="../img/itstops.svg" />
      </div>
    </header>
    <section class="grid lg:grid-cols-4 mx-12 mb-12">
      <p
        class="col-span-2 font-neueMontrealRegular text-[35px] leading-snug tracking-tight"
      >
        Where we ask some cool cats about their cool tastes and share them with
        the rest of you.
      </p>
    </section>
    <Featured />
    <CardCarousel />
    <Footer />
  </main>
</template>

<script>
import CardCarousel from "../components/CardCarousel.vue";
import Footer from "../components/Footer.vue";
import Featured from "../components/Featured.vue";
export default {
  name: "Home",
  components: {
    CardCarousel,
    Footer,
    Featured,
  },
};
</script>
