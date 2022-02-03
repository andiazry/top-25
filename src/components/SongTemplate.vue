<template>
  <body class="text-stone-900 bg-offWhite font-pangram">
    <main class="grid grid-cols-2 lg:grid-cols-2">
      <section class="h-screen bg-red-500 inline-block relative">
        <img
          class="object-cover object-center h-full w-full"
          src="../img/azry-profile.jpg"
        />
        <div class="absolute bottom-3 left-3 p-3 text-white">
          <h3 class="text-3xl font-bold">Andi Azry</h3>
          <p class="text-xl mb-2">Designer — NYC, NY</p>
          <p class="font-editorial italic text-xl">
            "Eiusmod dolor mollit id nulla non dolore mollit ut fugiat est
            fugiat sit aliqua. Nostrud reprehenderit excepteur ut mollit ullamco
            cillum pariatur. Non ea eu minim magna commodo officia sint veniam.
            Esse qui ipsum reprehenderit qui dolor. Sit occaecat magna mollit
            elit. Excepteur ullamco magna nisi aliquip aute id aute."
          </p>
        </div>
      </section>
      <section class="p-10 h-screen inline-block overflow-y-auto">
        <h1
          class="font-pangramBlack text-[200px] mb-6 uppercase leading-[160px]"
        >
          <span class="text-amber-400">Andi's</span><br />
          Top 25 Songs
        </h1>
        <iframe
          class="mb-12"
          src="https://open.spotify.com/embed/playlist/1cdwNTnM4qLBV9wScLPi4n?utm_source=generator&theme=0"
          width="50%"
          height="80"
          frameborder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <div>
          <ul class="list-none font-editorial">
            <li
              v-for="song in userdata"
              :key="song.id"
              class="flex flex-row border-y border-b border-black py-6 justify-between items-center"
            >
              <div class="flex flex-row items-center">
                <img class="mr-4 w-24 h-24" :src="song.img" />
                <div>
                  <p class="text-2xl font-semibold">
                    {{ song.id }}. {{ song.title }}
                  </p>
                  <p class="text-lg">
                    {{ song.artist }} —
                    <span class="italic">{{ song.album }}</span>
                  </p>
                </div>
              </div>
              <div
                v-if="song.isTop"
                class="bg-blue-600 text-white rounded-full p-2 px-4 w-fit rotate-6 font-pangram font-semibold"
              >
                You're a winner!
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
import userdata from "../andi-data.json";
export default {
  name: "SongTemplate",
  data() {
    return { userdata };
  },
};
</script>
