<template>
  <main>
    <section
      class="grid grid-cols-1 lg:grid-cols-3 m-12 mt-24 pb-24 items-center border-b border-black"
    >
      <div class="col-span-2">
        <h1 class="font-pangramBlack text-[230px] leading-[170px] uppercase">
          Top Twenty Five
        </h1>
      </div>
      <div>
        <p class="font-editorial text-3xl text-right">
          We ask some cool cats what some of their favorite things are so we can
          share them here with you cool cats 🌞
        </p>
      </div>
    </section>
    <CardCarousel />
    <Footer />
  </main>
</template>

<script>
import CardCarousel from "../components/CardCarousel.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    CardCarousel,
    Footer,
  },
};
</script>
