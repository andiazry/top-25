<template>
  <div class="mx-4 md:mx-12 border-t-2 border-black">
    <h2
      class="font-neueMontrealBold text-lg md:text-2xl uppercase my-2 md:my-6 pb-6 md:pb-12"
    >
      All lists
    </h2>
  </div>
  <section class="grid md:grid-cols-3 gap-8 p-4 md:p-12 mb-24">
    <router-link to="/songs" class="col-span-1">
      <div class="transition hover:rotate-1">
        <div>
          <img
            class="object-cover aspect-[7/8]"
            src="../img/azry-profile.jpg"
          />
        </div>
        <div class="mt-6">
          <p class="text-3xl mb-1">Andi Azry</p>
          <p class="text-xl mb-2">Designer — NYC, NY</p>
          <span class="block text-xl"
            >🎵 Top song: Elliott Smith &mdash; Angeles</span
          >
        </div>
      </div>
    </router-link>
    <router-link to="/songs" class="col-span-1">
      <div class="transition hover:rotate-1">
        <div>
          <img
            class="object-cover aspect-[7/8]"
            src="../img/cath-profile.jpg"
          />
        </div>
        <div class="mt-6">
          <p class="text-3xl mb-1">Cathleen Clarke</p>
          <p class="text-xl mb-2">Artist — NYC, NY</p>
          <span class="block text-xl"
            >🎵 Top song: Elliott Smith &mdash; Angeles</span
          >
        </div>
      </div>
    </router-link>
    <router-link to="/songs" class="col-span-1">
      <div class="transition hover:rotate-1">
        <div>
          <img class="object-none aspect-[7/8]" src="../img/jim.jpg" />
        </div>
        <div class="mt-6">
          <p class="text-3xl mb-1">Jimmy Clarke</p>
          <p class="text-xl mb-2">Musician — Chicago, IL</p>
          <span class="block text-xl"
            >🎵 Top song: Elliott Smith &mdash; Angeles</span
          >
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
import userdata from "../andi-data.json";
export default {
  name: "CardCarousel",
  data() {
    return { userdata };
  },
};
</script>
