<template>
  <div class="mx-12 border-t-2 border-black">
    <h2 class="font-neueMontrealBold text-2xl uppercase my-6">All lists</h2>
  </div>
  <section class="flex flex-nowrap overflow-x-auto p-12 mb-24">
    <div class="flex">
      <router-link to="/songs">
        <div>
          <div
            class="relative flex overflow-y-hidden w-[450px] h-[650px] bg-zinc-900 mr-6 transition hover:rotate-2"
          >
            <img class="object-cover" src="../img/azry-profile.jpg" />
          </div>
          <div class="mt-6">
            <p class="text-3xl mb-1">Andi Azry</p>
            <p class="text-xl">Designer — NYC, NY</p>
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
          <p class="text-3xl mb-1">Cathleen Clarke</p>
          <p class="text-xl">Artist — NYC, NY</p>
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
