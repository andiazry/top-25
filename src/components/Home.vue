<template>
  <main>
    <section
      class="grid grid-cols-1 lg:grid-cols-3 m-12 mt-24 pb-24 items-top border-b border-black"
    >
      <div class="col-span-2">
        <h1 class="font-gtBlack text-[400px] leading-[300px] uppercase">
          Top 25
        </h1>
      </div>
      <div>
        <!-- <p
          class="font-editorial text-3xl border border-black rounded-full p-14 text-left"
        >
          <span
            class="h-[25px] w-[25px] rounded-full bg-customYellow inline-block mr-2"
          ></span
          >We ask some cool cats what some of their favorite things are so we
          can share them with you.
        </p> -->
        <img class="scale-75" src="../img/itstops.svg" />
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
