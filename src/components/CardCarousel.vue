<template>
  <div class="flex">
    <a href="list-template.html">
      <div>
        <div
          class="relative flex overflow-y-hidden w-[450px] h-[650px] bg-zinc-900 mr-6 transition hover:rotate-3"
        >
          <div
            class="absolute top-3 left-3 bg-red-600 rounded-full p-2 px-4 font-pangram font-bold text-lg text-white"
          >
            Fresh!
          </div>
          <img class="object-cover" src="../img/azry-profile.jpg" />
        </div>
        <div class="mt-6">
          <p class="text-3xl font-bold mb">Andi Azry</p>
          <p class="text-xl">Designer — NYC, NY</p>
        </div>
      </div>
    </a>
    <div>
      <div
        class="flex overflow-y-hidden w-[450px] h-[650px] mr-6 transition hover:rotate-3 rounded-t-full"
      >
        <img class="object-cover" src="../img/cath-profile.jpg" />
      </div>
      <div class="mt-6">
        <p class="text-3xl font-bold mb">Cathleen Clarke</p>
        <p class="text-lg text-stone-800">Artist — NYC, NY</p>
      </div>
    </div>
    <div>
      <div
        class="flex overflow-y-hidden w-[450px] h-[650px] mr-6 transition hover:rotate-3"
      >
        <img class="object-cover" src="../img/test-img.jpg" />
      </div>
      <div class="mt-6">
        <p class="text-3xl font-semibold mb">Jimmy Clarke</p>
        <p class="text-lg text-stone-800">Musician — Chicago, IL</p>
      </div>
    </div>
    <div>
      <div
        class="flex overflow-y-hidden w-[450px] h-[650px] mr-6 transition hover:rotate-3 rounded-full"
      >
        <img class="object-cover" src="../img/test-img.jpg" />
      </div>
      <div class="mt-6">
        <p class="text-3xl font-semibold">Maurice Latzke</p>
        <p class="text-lg text-stone-800">Art Director — Shanghai, China</p>
      </div>
    </div>
    <div>
      <div
        class="flex overflow-y-hidden w-[450px] h-[650px] mr-6 transition hover:rotate-3"
      >
        <img class="object-cover" src="../img/test-img.jpg" />
      </div>
      <div class="mt-6">
        <p class="text-3xl font-semibold">Jimmy Clarke</p>
        <p class="text-lg text-stone-800">Musician — Chicago, IL</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: "CardCarousel",
  data() {
    return { users: data };
  },
};
</script>
