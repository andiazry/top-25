<template>
  <div>
    <h2 class="font-gtBlack text-xl ml-12 uppercase">Top Songs</h2>
  </div>
  <section class="flex flex-nowrap overflow-x-auto p-12 mb-24">
    <div class="flex">
      <router-link to="/songs">
        <div>
          <div
            class="relative flex overflow-y-hidden w-[450px] h-[650px] bg-zinc-900 mr-6 transition hover:rotate-2"
          >
            <div
              class="absolute top-3 left-3 bg-customYellow rounded-full p-2 px-4 font-gtRegular font-bold text-lg text-white"
            >
              Fresh!
            </div>
            <img class="object-cover" src="../img/azry-profile.jpg" />
          </div>
          <div class="mt-6">
            <p class="text-2xl font-bold mb-1">Andi Azry</p>
            <p class="text-md text-neutral-400">Designer — NYC, NY</p>
          </div>
        </div>
      </router-link>
      <div>
        <div
          class="flex overflow-y-hidden w-[450px] h-[650px] mr-6 transition hover:rotate-2"
        >
          <img class="object-cover" src="../img/cath-profile.jpg" />
        </div>
        <div class="mt-6">
          <p class="text-2xl font-bold mb-1">Cathleen Clarke</p>
          <p class="text-md text-neutral-400">Artist — NYC, NY</p>
        </div>
      </div>
      <div>
        <div
          class="flex overflow-y-hidden w-[450px] h-[650px] mr-6 transition hover:rotate-2"
        >
          <img class="object-cover" src="../img/test-img.jpg" />
        </div>
        <div class="mt-6">
          <p class="text-2xl font-semibold mb">Jimmy Clarke</p>
          <p class="text-md text-stone-800">Musician — Chicago, IL</p>
        </div>
      </div>
      <div>
        <div
          class="flex overflow-y-hidden w-[450px] h-[650px] mr-6 transition hover:rotate-2"
        >
          <img class="object-cover" src="../img/test-img.jpg" />
        </div>
        <div class="mt-6">
          <p class="text-2xl font-semibold">Maurice Latzke</p>
          <p class="text-md text-stone-800">Art Director — Shanghai, China</p>
        </div>
      </div>
      <div>
        <div
          class="flex overflow-y-hidden w-[450px] h-[650px] mr-6 transition hover:rotate-2"
        >
          <img class="object-cover" src="../img/test-img.jpg" />
        </div>
        <div class="mt-6">
          <ul>
            <li>
              <p class="text-2xl font-semibold">Jimmy Clarke</p>
              <p class="text-md text-stone-800">Musician — Chicago, IL</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
