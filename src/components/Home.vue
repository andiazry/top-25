<template>
  <main>
    <section
      class="grid grid-cols-1 lg:grid-cols-3 m-12 mt-24 pb-24 items-top border-b border-black"
    >
      <div class="col-span-2">
        <h1 class="font-pangramBlack text-[240px] leading-[180px] uppercase">
          Top Twenty Five
        </h1>
      </div>
      <div>
        <p class="font-editorial text-4xl text-right">
          We ask some cool cats what some of their favorite things are so we can
          share them with you
          <span
            class="h-[25px] w-[25px] rounded-full bg-customYellow inline-block"
          ></span>
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
